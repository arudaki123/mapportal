const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../docs'); // Đường dẫn thư mục docs
const outputFile = path.join(__dirname, '../src/data/docsTree.json'); // File xuất kết quả

function generateTree(dir) {
    const items = fs.readdirSync(dir);
    return items.map((item) => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
let in4 = {};
        if (stat.isDirectory()) {
            try {
                const data = fs.readFileSync(`${fullPath}/_category_.json`, "utf8");
                const jsonData = JSON.parse(data);
                in4.label = jsonData.label;
                if(jsonData.link?.description) {in4.description = jsonData.link?.description;}
                if(jsonData.position) {in4.position = jsonData.position;}
            } catch (err) {
                // console.log("Error:", err);
            }

            return {
                name: item,
                type: 'folder',
                children: generateTree(fullPath),
                path: fullPath.replace(path.resolve(__dirname, '..\\docs'), ''), // Đường dẫn tương đối
                ...in4,
            };
        } else {
            return {
                name: item,
                type: 'file',
                path: fullPath.replace(path.resolve(__dirname, '..\\docs'), ''), // Đường dẫn tương đối
            };
        }
    });
}

function writeTreeToFile() {
    const tree =
        [{
            name: 'docs',
            type: 'folder',
            children: generateTree(docsDir),
            path: docsDir.replace(path.resolve(__dirname, '..\\docs'), ''), // Đường dẫn tương đối
        }];
    fs.writeFileSync(outputFile, JSON.stringify(tree, null, 2));
    console.log('Generated docs tree at:', outputFile);
}

writeTreeToFile();

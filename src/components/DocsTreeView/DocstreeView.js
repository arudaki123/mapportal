import React, { useState } from 'react';
import treeData from '/src/data/docsTree.json';
import Translate, { translate } from '@docusaurus/Translate';
import './DocsTreeView.css';

const URL_SERVER = process?.env?.URL_SERVER || 'http://localhost:3000/';
const URL_FOLDER = process?.env?.URL_FOLDER || './';

const TreeNode = ({ node, onAddFolder }) => {
    const [expanded, setExpanded] = useState(false || node.name === 'docs');
    const [isAddingFolder, setIsAddingFolder] = useState(false);
    const [newFolderName, setNewFolderName] = useState('');
    const [isDeleteFile, setIsDeleteFile] = useState(false);

    const toggleExpand = () => setExpanded(!expanded);

    const handleCreateFolder = (e) => {
        e.preventDefault();
        if (newFolderName.trim()) {
            onAddFolder(node.path, newFolderName.trim());
            setNewFolderName('');
            setIsAddingFolder(false);
            setExpanded(true); // Automatically expand to show new folder
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setIsAddingFolder(false);
            setNewFolderName('');
        }
    };

    return (
        <div className={'treeNode'}>
            <div className='divideTree'></div>
            <div className={'nodeLabel'}>
                <div onClick={toggleExpand} className={'nodeTitle'}>
                    {node.type === 'folder' && (
                        <span>{expanded ? '🔽📂 ' : '▶️📁 '}</span>
                    )}
                    {node.type === 'file' && <span>📄 </span>}
                    <div className="nodeTitleContent">
                        <div className="nodeMainTitle">{node.name}</div>
                        {node.label && <div className="nodeSubtitle">{node.label}</div>}
                    </div>
                </div>

                {/* Nút download cho file */}
                {node.type === 'file' &&  <button
                    type="button"
                    title='Download'
                    onClick={() => HandleDownload(node.path.replace(`\\${node.name}`, ''), node.name)}
                    className={'button button--outline button--secondary treeButton download-button'}
                >
                    <span> 📥 </span>
                </button>
                }

                {node.type === 'file' && node.name != '_category_.json' && !isDeleteFile && <button
                    type="button"
                    title='Delete'
                    onClick={() => setIsDeleteFile(true)}
                    className={'button button--outline button--secondary treeButton delete-button'}
                >
                    <span> ❌ </span>
                </button>}

                {/* Nút upload cho thư mục */}
                {node.type === 'folder' && (
                    <>
                        <label className={'button button--outline button--secondary uploadButton'}>
                            📤 <Translate>Upload File</Translate>
                            <input
                                type="file"
                                multiple
                                onChange={(e) => {
                                    e.preventDefault();
                                    handleFileUpload(e, node.path);
                                }} // Truyền đường dẫn thư mục
                                style={{ display: 'none' }}
                            />
                        </label>
                        {/* Nút tạo thư mục mới */}
                        <button
                            className={'button button--outline button--secondary uploadButton'}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsAddingFolder(pre => !pre);
                            }}
                        >
                            ➕ <Translate>Create folder</Translate>
                        </button>
                    </>
                )}
            </div>

            {/* Form xóa file */}
            {isDeleteFile && (
                <DialogDelete
                    handleDelete={() => HandleDeleteFile(node.path.replace(`\\${node.name}`, ''), node.name)}
                    setIsDeleteFile={setIsDeleteFile}
                />
            )}

            {/* Form tạo thư mục mới */}
            {isAddingFolder && (
                <DialogAddingFolder
                    newFolderName={newFolderName}
                    handleKeyDown={handleKeyDown}
                    handleCreateFolder={handleCreateFolder}
                    setNewFolderName={setNewFolderName}
                    setIsAddingFolder={setIsAddingFolder}
                />
            )}

            {/* Hiển thị con nếu là thư mục */}
            {expanded && node.children && (
                <div className={'childrenTree'}>
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} onAddFolder={onAddFolder} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function DocsTreeView() {

    const [treeDocsData, setTreeDocsData] = useState(treeData);

    const handleAddFolder = (parentPath, folderName) => {
        const addFolderToTree = (nodes) => {
            return nodes.map(node => {
                if (node.path === parentPath) {
                    return {
                        ...node,
                        children: [
                            ...(node.children || []),
                            {
                                type: 'folder',
                                name: folderName,
                                path: `${parentPath}/${folderName}`,
                                children: []
                            }
                        ]
                    };
                }
                if (node.children) {
                    return {
                        ...node,
                        children: addFolderToTree(node.children)
                    };
                }
                return node;
            });
        };

        setTreeDocsData(addFolderToTree(treeDocsData));
    };

    return (
        <div className={'treeContainer'}>
            {treeDocsData.map((node, index) => (
                <TreeNode key={index} node={node} onAddFolder={handleAddFolder} />
            ))}
        </div>
    );
}


const DialogDelete = ({ handleDelete, setIsDeleteFile }) => {

    return (
        <form onSubmit={handleDelete} className={'newFolderForm'}>
            <Translate>Do you want to delete this item?</Translate>
            <button type="submit" className={'button button--outline button--secondary treeButton delete-button'}>
                <Translate>Delete</Translate>
            </button>
            <button
                onClick={() => setIsDeleteFile(false)}
                className={'button button--outline button--secondary treeButton cancel-button'}
            >
                <Translate>Cancel</Translate>
            </button>
        </form>)
}

const DialogAddingFolder = ({ newFolderName, handleKeyDown, handleCreateFolder, setNewFolderName, setIsAddingFolder }) => {

    return (
        <form onSubmit={handleCreateFolder} className={'newFolderForm'}>
            <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tên thư mục mới"
                autoFocus
                className={'folder-input'}
            />
            <button type="submit" className={'button create-button'}>
                <Translate>Create</Translate>
            </button>
            <button
                onClick={() => setIsAddingFolder(false)}
                className={' button button--outline button--secondary treeButton cancel-button'}
            >
                <Translate>Cancel</Translate>
            </button>
        </form>)
}

// download file
const HandleDownload = async (folderPath, name) => {
    if (!folderPath || !name) return;
    try {
        const myHeaders = new Headers();
        const formData = new FormData();


        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",

        };

        fetch(`${URL_SERVER}/indoors/v1/docusaurus?filename=${name}&key=${folderPath}&folder=${URL_FOLDER}`, requestOptions)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const a = document.createElement('a');
            a.href = url;
            a.download = name;
            a.click();
        })
        .catch(error => console.log('download error',name, error));

    } catch (error) {
        console.error('Delete error:', error);
        alert(`Failed to delete file: ${error.message}`);
    }
}

// Xử lý upload file
const handleFileUpload = async (event, folderPath) => {
    const files = event.target.files;
    if (!files) return;
    console.log('event, folderPath', files, folderPath);

    try {
        // Tạo dữ liệu form để gửi lên API
        const formData = new FormData();
        Array.from(files).forEach((file, index) => {
            // console.log('file', file);
            if (file.name != '_category_.json') {
                formData.append('file' + index, file);
            }
        });
        formData.append('key', folderPath); // Truyền đường dẫn thư mục
        formData.append('folder', URL_FOLDER);

        // Gọi API upload file
        const response = await fetch(`${URL_SERVER}/indoors/v1/docusaurus`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('File upload failed');
        }

        alert(`File "${files.length}" uploaded successfully to folder "${folderPath}"!`);
    } catch (error) {
        console.error('Upload error:', error);
        alert(`Failed to upload file: ${error.message}`);
    }
};

const HandleDeleteFile = async (folderPath, name) => {
    if (!folderPath || !name) return;
    try {
        const myHeaders = new Headers();
        const formData = new FormData();


        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow",

        };

        const response = fetch(`${URL_SERVER}/indoors/v1/docusaurus?filename=${name}&key=${folderPath}&folder=${URL_FOLDER}`, requestOptions);

        if (!response.ok) {
            throw new Error(`${response}`);
        }

        alert(`File "${name}" deleted successfully to folder "${folderPath}"!`);

    } catch (error) {
        console.error('Delete error:', error);
        alert(`Failed to delete file: ${error.message}`);
    }
}
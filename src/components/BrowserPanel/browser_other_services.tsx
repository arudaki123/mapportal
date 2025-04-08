import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl';

const BrowserOtherServices = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th rowSpan={2}>
                        <div> Mức </div>
                    </th>
                    <th rowSpan={2}>
                        <div>Context menu </div>
                    </th>
                    <th colSpan={jsonDatabaseEntriesInfo['type-database'].length + 2}> Type of database </th>
                </tr>
                <tr>
                    {jsonDatabaseEntriesInfo['type-database'].map(
                        (typeDatabase) => (
                            <td key={typeDatabase}>
                                <div>{typeDatabase}</div>
                            </td>
                        )
                    )}
                </tr>

            </thead>
            <tbody>
                {jsonDatabaseEntriesInfo['table-content'].map((levelMenu) => {
                    return levelMenu.contextMenu.map((itemMenu, index) => {
                        return index == 0 ? (
                            <React.Fragment key={index}>
                                <tr>
                                    <td rowSpan={levelMenu.contextMenu.length + 1}
                                    >
                                        <div>{levelMenu.level}</div>
                                    </td>
                                    <td rowSpan={2}>
                                        <div>{itemMenu.item}</div>
                                    </td>
                                </tr>
                                <tr>
                                    {Object.keys(itemMenu['typeof-database']).map(
                                        (type) => {
                                            return (
                                                <td key={type}>
                                                    <div>
                                                        {itemMenu['typeof-database'][type] && (
                                                                <img
                                                                    src={useBaseUrl(
                                                                        '/tick.svg'
                                                                    )}
                                                                    width={24}
                                                                />
                                                            )}
                                                    </div>
                                                </td>
                                            );
                                        }
                                    )}
                                </tr>

                            </React.Fragment>
                        ) : (
                            <tr key={index}>
                                <td >
                                    <div>{itemMenu.item}</div>
                                </td>
                                {Object.keys(itemMenu['typeof-database']).map(
                                    (type) => (
                                        <td key={type}>
                                            <div>
                                                {itemMenu['typeof-database'][type] && (
                                                        <img
                                                            src={useBaseUrl(
                                                                '/tick.svg'
                                                            )}
                                                            width={24}
                                                        />
                                                    )}
                                            </div>
                                        </td>
                                    )
                                )}
                            </tr>
                        );
                    });
                })}
            </tbody>
        </table>
    )
}


const jsonDatabaseEntriesInfo = {
    'type-database': ['RainLayer', 'Video', 'Image', '3DTiles', 'Terrain', 'HeatMap', 'UploadFiles'],
    'table-content': [
        {
            level: 'Top menu',
            contextMenu: [
                {
                    item: 'Thêm mục kết nối',
                    'typeof-database': {
                        RainLayer: true,
                        Video: true,
                        Image: true,
                        '3DTiles': true,
                        Terrain: true,
                        'HeatMap': true,
                        'UploadFiles': true
                    }
                },
            ]
        },
        {
            level: 'Mục kết nối/ Mục database',
            contextMenu: [
                {
                    item: 'Xóa mục kết nối',
                    'typeof-database': {
                        RainLayer: true,
                        Video: true,
                        Image: true,
                        '3DTiles': true,
                        Terrain: true,
                        'HeatMap': true,
                        'UploadFiles': false
                    }
                },
                {
                    item: 'Chỉnh sửa mục kết nối',
                    'typeof-database': {
                        RainLayer: true,
                        Video: true,
                        Image: true,
                        '3DTiles': true,
                        Terrain: true,
                        'HeatMap': true,
                        'UploadFiles': false
                    }
                }
            ]
        },
        {
            level: 'Bảng dữ liệu/ Lớp bản đồ',
            contextMenu: [
                {
                    item: 'Thêm lớp vào bản đồ chính / Thêm lớp vào bản đồ so sánh 1 / Thêm lớp vào bản đồ so sánh 2',
                    'typeof-database': {
                        RainLayer: true,
                        Video: true,
                        Image: true,
                        '3DTiles': true,
                        Terrain: true,
                        'HeatMap': true,
                        'UploadFiles': true

                    }
                },
            ]
        }
    ]
};
export default BrowserOtherServices
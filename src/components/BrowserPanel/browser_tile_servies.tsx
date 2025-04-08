import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '/src/css/browser_panel.css';


type Props = {}

const BrowserTileServices = (props: Props) => 
{
    return <table>
        <thead>
            <tr>
                <th rowSpan={2} >
                    <div> Mức </div>
                </th>
                <th rowSpan={2}>
                    <div>Context menu </div>
                </th>
                <th colSpan={jsonDatabaseEntriesInfo['type-database'].length + 2}> Type of database </th>
            </tr>
            <tr>

                {jsonDatabaseEntriesInfo['type-database'].map(
                    (typeDatabase: any) => (
                        <th key={typeDatabase}>
                            <div>{typeDatabase}</div>
                        </th>
                    )
                )}
            </tr>
        </thead>
        <tbody>
            {jsonDatabaseEntriesInfo['table-content'].map((levelMenu: any) => {
                return levelMenu.contextMenu.map((itemMenu: any, index: number) => {
                    return index == 0 ? (
                        <React.Fragment key={index}>
                            <tr>
                                <td rowSpan={levelMenu.contextMenu.length + 1}>
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
                                                        <img src={useBaseUrl('/tick.svg')}
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
                        <tr key={index} >
                            <td >
                                <div>{itemMenu.item}</div>
                            </td>
                            {Object.keys(itemMenu['typeof-database']).map(
                                (type) => {
                                    return (
                                        <td key={type}>
                                            <div>
                                                {itemMenu['typeof-database'][type] && (
                                                    <img src={useBaseUrl('/tick.svg')}
                                                        width={24}
                                                    />
                                                )}
                                            </div>
                                        </td>
                                    );
                                }
                            )}
                        </tr>
                    );
                });
            })}
        </tbody>
    </table >
};

export default BrowserTileServices;

const jsonDatabaseEntriesInfo: Record<string, any> = {
    'type-database': ['WFS', 'WMS', 'WMTS', 'XYZTiles', 'VectorTiles'],
    'table-content': [
        {
            level: 'Top menu',
            contextMenu: [
                {
                    item: 'Thêm mục kết nối',
                    'typeof-database': {
                        WFS: true,
                        WMS: true,
                        WMTS: true,
                        XYZTiles: true,
                        VectorTiles: true,

                    }
                },
                {
                    item: 'Tải mục kết nối',
                    'typeof-database': {
                        WFS: true,
                        WMS: true,
                        WMTS: true,
                        XYZTiles: true,
                        VectorTiles: true,
                    }
                }
            ]
        },
        {
            level: 'Mục kết nối/ Mục database',
            contextMenu: [
                {
                    item: 'Xóa mục kết nối',
                    'typeof-database': {
                        WFS: true,
                        WMS: true,
                        WMTS: true,
                        XYZTiles: true,
                        VectorTiles: true,
                    }
                },
                {
                    item: 'Tải lại mục kết nối',
                    'typeof-database': {
                        WFS: true,
                        WMS: true,
                        WMTS: true,
                        XYZTiles: true,
                        VectorTiles: true,
                    }
                },
                {
                    item: 'Chỉnh sửa mục kết nối',
                    'typeof-database': {
                        WFS: true,
                        WMS: true,
                        WMTS: true,
                        XYZTiles: true,
                        VectorTiles: true,
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
                        WFS: true,
                        WMS: true,
                        WMTS: true,
                        XYZTiles: true,
                        VectorTiles: true,
                    }
                },
                {
                    item: 'Xuất dữ liệu ra file GEOJSON hoặc ShapeFile',
                    'typeof-database': {
                        WFS: true,
                        WMS: false,
                        WMTS: false,
                        XYZTiles: false,
                        VectorTiles: false,
                    }
                }
            ]
        }
    ]
};
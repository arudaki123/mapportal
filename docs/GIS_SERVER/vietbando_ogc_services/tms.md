---
title: Tile Matrix Set (TMS)
# sidebar_position: 2
---

1. **Introduction** 

Support calculations for matrix sets arranged according to predefined parameters and coordinate transformation based on CRS and SRS.

1. **MAIN FEATURES**

- **TileMatrixSet** calculate tile matrices based on input parameters such as CRS, BBOX, SupportedCRS, and LevelMax.

- *Example request:*
```
GET http://{{Host}}:{{TMSPort}}/vietbando/api/v1/tms?REQUEST=TileMatrixSet&CRS=EPSG:900913&BBOX=-2.003750834E7,-2.0037508E7,2.003750834E7,2.0037508E7&SupportedCRS=urn:ogc:def:crs:EPSG::900913&LevelMax=30
```

- **TileMatrixSetLimits** calculate tile matrices set limit based on input parameters such as CRS, BBOX and LEVEL.

- *Example request:*
```
GET http://{{Host}}:{{TMSPort}}/vietbando/api/v1/tms?REQUEST=TileMatrixLimits&CRS=EPSG:900913&LEVEL=6&BBOX=103.135517,12.7616603,109.664505,8.13264825
```

- **GetBound** calculates the bounding box based on input parameters such as CRS, LevelOfDetail, TileCol, Radius and TileRow.

- *Example request:*
```
GET http://{{Host}}:{{TMSPort}}/vietbando/api/v1/tms?REQUEST=GetBound&CRS=EPSG:900913&LevelOfDetail=5&TileCol=25&TileRow=14
```

- **GetTile** calculates tiles based on input parameters such as CRS, LevelOfDetail and BBOX.

- *Example request:*
```
GET http://{{Host}}:{{TMSPort}}/vietbando/api/v1/tms?REQUEST=GetTiles&CRS=EPSG:3857&LevelOfDetail=5&BBOX=103.135517,12.7616603,109.664505,8.13264825
```

- **ConvertPoint** coordinate transformation based on CRS and SRS.

- *Example request:*
```
POST http://{{Host}}:{{TMSPort}}/vietbando/api/v1/tms?REQUEST=ConvertPoint
```
- *Example body:*
```
{
    "SRSOrCRS": "+proj=tmerc +lat_0=0 +lon_0=105.45 +k=0.9999 +x_0=500000 +y_0=0 +ellps=WGS84 +towgs84=-191.90441429,-39.30318279,-111.45032835,0.00928836,-0.01975479,0.00427372,0.252906278 +units=m +no_defs",
    "CRS_Out": "EPSG:4326",
    "Point": [
        632823.038880913,
        1194430.45224478
    ]
}
```
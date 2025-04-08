import RenderMapBound from "./RenderMapBound.png";
import RenderTile from "./RenderTile.png";
import GetVectorTile from "./GetVectorTile.png";


# Vietbando Map Service

<!-- nguyenvtv -->

## 1. Introduction 

**Vietbando Map Service** provides APIs for registering, querying, and displaying map data in formats such as images (PNG), GeoJson, and others.  

## 2. Main Features

### 2.1. Style

Style provides APIs to define how map data is displayed. Style determines how map layers are presented, including colors, scales, symbols, background styles, and other graphic elements.

### 2.1.1 Definition of APIs
#### 2.1.1.1 GetList Style
Retrieve a list of all defined Styles.
```
GET http://{{Host}}::{{Port}}/VietbandoMapService/api/image/?Function=GetStyleNames
```
- Example response: 
```xml
<ListName>
    <Name>STYLE_QUYHOACHSDDCAPHUYEN</Name>
    <Name>STYLE_TT_THUADAT</Name>
</ListName>
```
#### 2.1.1.2 Get Style
Retrieve a defined Style using the Name parameter
```
GET http://{{Host}}/VietbandoMapService/api/image/?Function=GetStyle&Name={name}
```
- Example response: 
```xml
<Style name="STYLE_QUYHOACHSDDCAPHUYEN">
	<Rule>
		<MaxScaleDenominator>100000</MaxScaleDenominator>
		<LineSymbolizer stroke="#000000" stroke-linejoin="round" stroke-width="1"/>
		<PolygonSymbolizer fill="[hexColor]" fill-opacity="0.3"/>
		<TextSymbolizer fontset-name="fontset-0" halo-fill="rgba(255, 255, 255, 0.7)" halo-radius="1" placement="point" placement-type="list" wrap-before="true" wrap-width="50">
			<Format face-name="Open Sans Bold" fill="#000000" size="10"><![CDATA[[mucDichSuDungQH]]]></Format>
		</TextSymbolizer>
	</Rule>
</Style>
```
#### 2.1.1.3 Insert Style
Add one or more new Styles
```
POST http://{{Host}}/VietbandoMapService/api/image/?Function=InsertStyle&Store=true
```
- Example body request: 
```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE Map []>
<ListStyle>
	<Style name="NLIS_HIENTRANGSDDCAPVUNG_VN_MONGO" filter-mode="all">
		<Rule>
			<MaxScaleDenominator>3400000</MaxScaleDenominator>
			<!--<LineSymbolizer stroke-linejoin="round" stroke="[hexColor]" stroke-width="1" /><PolygonSymbolizer fill-opacity="1" fill="[hexColor]" />-->
			<LineSymbolizer  clip="true" stroke-linejoin="round" stroke="#000000" stroke-width="1"/>
			<PolygonSymbolizer  clip="true" fill-opacity="1" fill="[hexColor]" />
		</Rule>
		<Rule>
			<MaxScaleDenominator>100000</MaxScaleDenominator>
			<TextSymbolizer fontset-name="fontset-0" placement="point" wrap-width="50" wrap-before="true" placement-type="list" halo-fill="rgba(255, 255, 255, 0.7)" halo-radius="1">
				<Format face-name="Open Sans Bold" fill="#000000" size="10">
					<![CDATA[[loaiDatHienTrang]]]>
				</Format>
			</TextSymbolizer>
		</Rule>
	</Style>
	<Style name="TKKK_KHOANHDAT_VN_MONGO_SHAPE" filter-mode="all">
        <Rule>
            <MaxScaleDenominator>100000</MaxScaleDenominator>
            <LineSymbolizer stroke-linejoin="round" stroke="#000000" stroke-width=".5" />
        </Rule>
    </Style>
    <Style name="TKKK_KHOANHDAT_VN_MONGO_TEXT" filter-mode="all">
        <Rule>
            <MaxScaleDenominator>5000</MaxScaleDenominator>
            <TextSymbolizer fontset-name="fontset-0" placement="point" wrap-width="80" wrap-before="true" placement-type="list" halo-fill="rgba(255, 255, 255, 0.7)" halo-radius="1">
                <Format face-name="Open Sans Bold" fill="#0000AA" size="12">
                    <![CDATA[[maLoaiDat]]]>
                </Format>
                <Format face-name="Open Sans Bold" fill="#00AA00" size="12">"  "
					 <![CDATA[[soThuTu]]]>"\n"
                </Format>
                <Format face-name="Open Sans Bold" fill="#000000" size="12">
                    <![CDATA[[maDoiTuong]]]>
                </Format>
                <Format face-name="Open Sans Bold" fill="#472D18" size="12">"  "
                    <![CDATA[[dienTich]]]>
                </Format>
            </TextSymbolizer>
        </Rule>
    </Style>
</ListStyle>
```
- Note*: The Store parameter specifies whether the data is saved to the database, default Store = false.
#### 2.1.1.4 Update Style
Similar to the Insert method, users can update the information of a Style if it has been previously defined.
```
POST http://{{Host}}/VietbandoMapService/api/image/?Function=UpdateStyle&Store=true
```
#### 2.1.1.5 Delete Style
Delete the Styles defined through the name parameter
```
GET http://{{Host}}/VietbandoMapService/api/image/?Function=DeleteStyle&Name={name}&Store=true
```

### 2.2. Map
Similar to the Style section, Map provides APIs to define a Map
### 2.2.1 Definition of APIs
#### 2.2.1.1 GetMapNames
Retrieve a list of all defined Map.
```
GET http://{{Host}}/VietbandoMapService/api/image?Function=GetMapNames
```
- Example response: 
```xml
<ListName>
    <Name>CAHCMC_DIEM_CHECK_VN2000</Name>
    <Name>HTCN_WKB_GisOnline</Name>
    <Name>IndoorNavigation</Name>
    <Name>TKKK5_KHOANHDAT_VN_MONGO</Name>
    <Name>TNG_LISP_MAP_27</Name>
    <Name>c4i2-dev-list-layers-map</Name>
    <Name>dwh-dev-list-layers-map</Name>
    <Name>inmem_test</Name>
    <Name>nguyenvtv_123</Name>
    <Name>vbdmapv3_GisOnline</Name>
    <Name>vbdmapv3_OGC</Name>
</ListName>
```
#### 2.2.1.2 GetMap
Retrieve a defined Map using the Name parameter
```
GET http://{{Host}}/VietbandoMapService/api/image/?Function=GetMap&Name={name}
```
- Example response: 
```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE Map []>
<Map srs="+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0.0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs +over" font-directory="./fonts" buffer-size="128" background-color="#00000000" crs="EPSG:3857">
    <Parameters>
        <Parameter name="bounds">-180,-85.05112877980659,180,85.05112877980659</Parameter>
        <Parameter name="center">0,0,2</Parameter>
        <Parameter name="format">png8</Parameter>
        <Parameter name="minzoom">0</Parameter>
        <Parameter name="maxzoom">22</Parameter>
    </Parameters>
    <Style filter-mode="first" name="TPTD_BEMATCONGTRINH">
        <Rule>
            <PolygonSymbolizer fill="#646363" fill-opacity=".5"/>
            <LineSymbolizer stroke="#646363" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="1.000" stroke-width="1"/>
        </Rule>
    </Style>
    <Layer name="TPTD_BEMATCONGTRINH" srs="+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs" crs="EPSG:4326">
        <StyleName>TPTD_BEMATCONGTRINH</StyleName>
        <Datasource>
            <Parameter name="Input">
                <![CDATA[mongo]]>
            
            </Parameter>
            <Parameter name="QueryType">
                <![CDATA[0]]>
            
            </Parameter>
            <Parameter name="type">
                <![CDATA[VBD]]>
            
            </Parameter>
            <Parameter name="server">
                <![CDATA[10.222.0.200:4004]]>
            
            </Parameter>
            <Parameter name="dbname">
                <![CDATA[vDMS_HGIS_HCM]]>
            
            </Parameter>
            <Parameter name="table">
                <![CDATA[go_tptd_bematcongtrinh_data_v2]]>
            
            </Parameter>
            <Parameter name="geometry_field">
                <![CDATA[Shape.Shape]]>
            
            </Parameter>
            <Parameter name="CreateGeoJson">
                <![CDATA[true]]>
            
            </Parameter>
            <Parameter name="QueryField">
                <![CDATA[Shape.MBR]]>
            
            </Parameter>
            <Parameter name="IndexType">
                <![CDATA[2dsphere]]>
            
            </Parameter>
            <Parameter name="Zlip">
                <![CDATA[true]]>
            
            </Parameter>

            <Parameter name="Fields">
                <![CDATA[
                

                 
                
                
                
                
                
                
                <?xml version="1.0" encoding="utf-8"?><Field><Name>Title</Name><DataType>3</DataType></Field>
            <?xml version="1.0" encoding="utf-8"?><Field><Name>maDoiTuong</Name><DataType>3</DataType></Field>
        <?xml version="1.0" encoding="utf-8"?><Field><Name>Shape_Length</Name><DataType>4</DataType></Field>
    <?xml version="1.0" encoding="utf-8"?><Field><Name>Shape_Area</Name><DataType>4</DataType></Field>
                ]]>
            








</Parameter>

        </Datasource>
    </Layer>
</Map>
```
#### 2.2.1.3 InsertMap
Add one new Map
```
POST http://{{Host}}/VietbandoMapService/api/image/?Function=InsertMap&Store=true&TileCacheMode=timer&TileCacheTimeOut=2592000
```
- Example body request: 
```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE Map []>
<Map srs="+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0.0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs +over" font-directory="./fonts" buffer-size="128" background-color="#00000000" crs="EPSG:3857">
    <Parameters>
        <Parameter name="bounds">-180,-85.05112877980659,180,85.05112877980659</Parameter>
        <Parameter name="center">0,0,2</Parameter>
        <Parameter name="format">png8</Parameter>
        <Parameter name="minzoom">0</Parameter>
        <Parameter name="maxzoom">22</Parameter>
    </Parameters>
    <Style filter-mode="first" name="TPTD_BEMATCONGTRINH">
        <Rule>
            <PolygonSymbolizer fill="#646363" fill-opacity=".5"/>
            <LineSymbolizer stroke="#646363" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="1.000" stroke-width="1"/>
        </Rule>
    </Style>
    <Layer name="TPTD_BEMATCONGTRINH" srs="+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs" crs="EPSG:4326">
        <StyleName>TPTD_BEMATCONGTRINH</StyleName>
        <Datasource>
            <Parameter name="Input">
                <![CDATA[mongo]]>
            
            </Parameter>
            <Parameter name="QueryType">
                <![CDATA[0]]>
            
            </Parameter>
            <Parameter name="type">
                <![CDATA[VBD]]>
            
            </Parameter>
            <Parameter name="server">
                <![CDATA[10.222.0.200:4004]]>
            
            </Parameter>
            <Parameter name="dbname">
                <![CDATA[vDMS_HGIS_HCM]]>
            
            </Parameter>
            <Parameter name="table">
                <![CDATA[go_tptd_bematcongtrinh_data_v2]]>
            
            </Parameter>
            <Parameter name="geometry_field">
                <![CDATA[Shape.Shape]]>
            
            </Parameter>
            <Parameter name="CreateGeoJson">
                <![CDATA[true]]>
            
            </Parameter>
            <Parameter name="QueryField">
                <![CDATA[Shape.MBR]]>
            
            </Parameter>
            <Parameter name="IndexType">
                <![CDATA[2dsphere]]>
            
            </Parameter>
            <Parameter name="Zlip">
                <![CDATA[true]]>
            
            </Parameter>

            <Parameter name="Fields">
                <![CDATA[
                

                 
                
                
                
                
                
                
                <?xml version="1.0" encoding="utf-8"?><Field><Name>Title</Name><DataType>3</DataType></Field>
            <?xml version="1.0" encoding="utf-8"?><Field><Name>maDoiTuong</Name><DataType>3</DataType></Field>
        <?xml version="1.0" encoding="utf-8"?><Field><Name>Shape_Length</Name><DataType>4</DataType></Field>
    <?xml version="1.0" encoding="utf-8"?><Field><Name>Shape_Area</Name><DataType>4</DataType></Field>
                ]]>
            








</Parameter>

        </Datasource>
    </Layer>
</Map>
```
##### Note*: 
- The Store parameter specifies whether the data is saved to the database, default Store = false.
- The TileCacheMode parameter sets the cache type, default TileCacheMode = timer.
- The TileCacheTimeOut parameter sets the cache timeout.
#### 2.2.1.4 UpdateMap
Similar to the Insert method, users can update the information of a Map if it has been previously defined.
```
POST http://{{Host}}/VietbandoMapService/api/image/?Function=UpdateMap&MapName={name}
```
#### 2.2.1.5 DeleteMap
Delete the Map defined through the MapName parameter
```
GET http://{{Host}}/VietbandoMapService/api/image/?Function=DeleteMap&MapName={mapName}&Store=true
```
### 2.3. Render
Render provides API to display data in different formats.
### 2.3.1 Definition of APIs
#### 2.3.1.1 RenderMapBound
Returns the image according to the requested bounding box corresponding to the layer.
```
GET http://{{Host}}/VietbandoMapService/api/image/?Function=RenderMapBound&MapName={mapName}&Width=www&Height=hhh&LatMin=aaa&LonMin=bbb&LatMax=ccc&LonMax=ddd&Layers={layerName}
```
- Example response: 

<img src={RenderMapBound} alt="style"/>

#### 2.3.1.2 RenderTile
Returns the image according to the requested bounding box corresponding to the layer.
```
GET http://{{Host}}/VietbandoMapService/api/image/?Function=RenderTile&MapName={mapName}&Level={z}&TileX={x}&TileY={y}&Layers={layersName}

z: levelzoom
x: Row index of tile matrix, character String type.
y: Column index of tile matrix, character String type.
```
- Example response: 

<img src={RenderTile} alt="style"/>

#### 2.3.1.3 RenderTileFilter
Similar to the RenderTile method, RenderTileFilter returns image data or other formats with specific filtering conditions
- Example body request
```xml
<ListLayer>
	<Layer>19</Layer>
	<DBFilter><![CDATA[{"$and":[{"maHuyen":{"$in":["168"]}},{"maXa":{"$in":["05611"]}},{"namThongKeKiemKe":2020}]}]]></DBFilter>
</ListLayer>
```
#### 2.3.1.4 GetVectorTile
Similar to the RenderTile method, GetVectorTile returns data by format 	
application/x-protobuf
- Example response:

<img src={GetVectorTile} alt="style"/>


---
title: Web Processing Service (WPS)
# sidebar_position: 2
---

1.  **Introduction**

The specified Web Processing Service (WPS) provides client access to pre-programmed calculations and/or computation models that operate on spatially referenced data. The data required by the service can be delivered across a network, or available at the server. This data can use image data formats or data exchange standards such as Geography Markup Language (GML). The calculation can be as simple as subtracting one set of spatially referenced numbers from another (e.g. determining the difference in influenza cases between two different seasons), or as complicated as a global climate change model. Enabling geospatial processing on the Internet requires the development of a wide variety web services to support atomic geospatial operations as well as sophisticated modelling capabilities. It is important to standardize the way that these processes are called, in order to reduce amount of programming required, and to facilitate the implementation and adoption of new services. WPS is intended to help OGC members to achieve these goals.

**WPS using HTTP KVP encoding**

1.   **Define path info:**
- `@hostname = http://10.225.0.234`
- `@apipath = /vietbando/api/v1/wmts`
- `@defaultid = geotest (default id capabilities)`

1.  **KVP:**

*   **GetCapabilities** operation generates a service metadata document describing a WPS service provided by a server.
- *URL:*
```
GET {{hostname}}{{apipath}}?SERVICE=WPS&REQUEST=GetCapabilities &VERSION=1.0.0
```
- *Parameter:*

| **Parameter** | **Definition** | **Data type and values** | **Default** |
| --- | --- | --- | --- |
| SERVICE | Service type identifier | Character String type, not empty SHALL be "CSW" |  |
| REQUEST | Operation name | Character String type, not empty SHALL be "GetCapabilities" |  |
| VERSION | Version WPS | Character String type | "1.0.0" |
```
Ex:{{hostname}}/{{apipath}}?SERVICE=WPS&REQUEST=GetCapabilities&VERSION=1.0.0
```
*   **DescribeProcess**: The mandatory DescribeProcess operation allows WPS clients to request a full description of one or more processes that can be executed by the Execute operation. This description includes the input and output parameters and formats. This description can be used to automatically build a user interface to capture the parameter values to be used to execute a process instance.
- *URL:*
```
GET : {{hostnam}}{{apipath}}?service=WPS&REQUEST= DescribeProcess&VERSION=1.0.0& Identifier= vbd:area& OutputFormat=
```
*   **Example response:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<wps:ProcessDescriptions service="WPS" version="1.0.0" xml:lang="en" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">

    <ProcessDescription statusSupported="true" storeSupported="true" wps:processVersion="1.0.0">

        <ows:Identifier>vbd:area</ows:Identifier>

        <ows:Title>Area</ows:Title>

        <ows:Abstract>Returns the area of a geometry, in the units of the geometry. Assumes a Cartesian plane, so this process is only recommended for non-geographic CRSes</ows:Abstract>

        <DataInputs>

            <Input maxOccurs="1" minOccurs="1">

                <ows:Identifier>geom</ows:Identifier>

                <ows:Title>geom</ows:Title>

                <ows:Abstract>Input geometry</ows:Abstract>

                <ComplexData>

                    <Default>

                        <Format>

                            <MimeType>text/xml; subtype=gml/3.1.1</MimeType>

                        </Format>

                    </Default>

                    <Supported>

                        <Format>

                            <MimeType>text/xml; subtype=gml/3.1.1</MimeType>

                        </Format>

                        <Format>

                            <MimeType>application/json</MimeType>

                        </Format>

                    </Supported>

                </ComplexData>

            </Input>

        </DataInputs>

        <ProcessOutputs>

            <Output>

                <ows:Identifier>result</ows:Identifier>

                <ows:Title>result</ows:Title>

                <LiteralOutput>

                    <ows:DataType>double</ows:DataType>

                </LiteralOutput>

            </Output>

        </ProcessOutputs>

    </ProcessDescription>

</wps:ProcessDescriptions>
```
*   **Execute:** The mandatory Execute operation allows WPS clients to run a specified process implemented by a server, using the input parameter values provided and returning the output values produced. Inputs can be included directly in the Execute request, or reference web accessible resources. The outputs can be returned in the form of an XML response document, either embedded within the response document or stored as web accessible resources. If the outputs are stored, the Execute response shall consist of a XML document that includes a URL for each stored output, which the client can use to retrieve those outputs. Alternatively, for a single output, the server can be directed to return that output in its raw form without being wrapped in an XML reponse document.
- *URL:*
```
POST {{hostnam}}{{apipath}}
```
*   **Example body request:**
```xml
<?xml version="1.0" encoding="UTF-8"?>

<wps:Execute xmlns:wps="http://www.opengis.net/wps/1.0.0"

             xmlns:ows="http://www.opengis.net/ows/1.1"

             xmlns:xlink="http://www.w3.org/1999/xlink"

             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

             xmlns:gml="http://www.opengis.net/gml"

             service="WPS"

             version="1.0.0"

             xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsExecute\_request.xsd">

    <!-- Process Identifier -->

    <ows:Identifier>vbd:area</ows:Identifier>

    <!-- Input Data -->

    <wps:DataInputs>

        <wps:Input>

            <ows:Identifier>geom</ows:Identifier>

            <ows:Title>Input Geometry</ows:Title>

            <wps:Data>

                <wps:ComplexData mimeType="text/xml; subtype=gml/3.1.1">

                    <gml:Polygon xmlns:gml="http://www.opengis.net/gml">

                        <gml:exterior>

                            <gml:LinearRing>

                                <gml:posList>

                                    100.0 0.0

                                    101.0 0.0

                                    101.0 1.0

                                    100.0 1.0

                                    100.0 0.0

                                </gml:posList>

                            </gml:LinearRing>

                        </gml:exterior>

                    </gml:Polygon>

                </wps:ComplexData>

            </wps:Data>

        </wps:Input>

    </wps:DataInputs>

    <!-- Response Format -->

    <wps:ResponseForm>

        <wps:RawDataOutput>

            <ows:Identifier>result</ows:Identifier>

        </wps:RawDataOutput>

    </wps:ResponseForm>

</wps:Execute>
```
*   **Example response:**
```xml
<?xml version="1.0" encoding="UTF-8"?>

<wps:ExecuteResponse service="WPS" version="1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">

    <wps:Status>

        <wps:ProcessSucceeded>Process completed successfully.</wps:ProcessSucceeded>

    </wps:Status>

    <wps:ProcessOutputs>

        <wps:Output>

            <ows:Identifier>result</ows:Identifier>

            <ows:Title>result</ows:Title>

            <wps:Data>

                <wps:LiteralData>1.000000</wps:LiteralData>

            </wps:Data>

        </wps:Output>

    </wps:ProcessOutputs>

</wps:ExecuteResponse>
```
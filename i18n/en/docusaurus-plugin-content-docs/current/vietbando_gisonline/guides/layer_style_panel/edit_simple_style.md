---
id: 'layer_style_edit_simple'
title: Simple edit style layers
description: ''
sidebar_position: 2
---
import fill_style_ex from '../../images/layer_style_panel/fill_style_ex.png';
import line_style_ex from '../../images/layer_style_panel/line_style_ex.png';
import symbol_style_ex from '../../images/layer_style_panel/symbol_style_ex.png';
import raster_style_ex from '../../images/layer_style_panel/raster_style_ex.png';
import circle_style_ex from '../../images/layer_style_panel/circle_style_ex.png';
import edit_rain_layer_style from '../../images/layer_style_panel/edit_rain_layer_style.png';
import fill_extrusion_style_ex from '../../images/layer_style_panel/fill_extrusion_style_ex.png';
import advance_click_menu from '../../images/layer_style_panel/advance_edit/advance_click_menu.png';
import zoom_edit_style from '../../images/layer_style_panel/advance_edit/zoom_edit_style.mp4';
import zoom_expression_ex from '../../images/layer_style_panel/advance_edit/zoom_expression_ex.png';
import edit_advance_data_range from '../../images/layer_style_panel/advance_edit/edit_advance_data_range.png';
import style_with_data_conditions from '../../images/layer_style_panel/advance_edit/style_with_data_conditions.png';
import style_data_condition_with_JSON from '../../images/layer_style_panel/advance_edit/style_data_condition_with_JSON.png';
import button_add_items from '../../images/layer_style_panel/advance_edit/button_add_items.png';
import edit_with_select_data from '../../images/layer_style_panel/advance_edit/edit_with_select_data.png';

## 1. Edit simple with layers of GEOJSON data

There are 5 displayed types for layers of GEOJSON data: fill, line, symbol, circle, fill-extrusion.

### Fill

<img src={fill_style_ex} alt="style" width="90%" />

List of simple attributes of layer **fill**:

- _Color_
- _Outline color_
- [_Pattern_](/en/docs/vietbando_gisonline/guides/layer_style_panel#5-list-of-images-for-styling-layer) _(If the user selects a pattern, the map will prioritize drawing the pattern instead of drawing the color and vice versa)_
- _Sort key_: Used in case of editing classification or ranking according to each feature in the data
- _Opacity_
- _Translate_

### Line

<img src={line_style_ex} alt="style" width="90%" />

List of simple attributes of layer **line**:

- _Color_
- _Width_
- _Gap width_
- [_Pattern_](/en/docs/vietbando_gisonline/guides/layer_style_panel#5-list-of-images-for-styling-layer) _(If the user selects a pattern, the map will prioritize drawing the pattern instead of drawing the color and vice versa)_
- _Line join_:
  - Bevel
  - Round (_đi kèm giới hạn round_)
  - Miter (_đi kèm giới hạn miter_)
- _Line cap_:
  - Butt
  - Round
  - Square
- _Line dash array_
- _Sort key_: Used in case of editing classification or ranking according to each feature in the data
- _Opacity_
- _Translate_

### Symbol

<img src={symbol_style_ex} alt="style" width="90%" />

List of simple attributes of layer **symbol**:

- For Icon:
  - [_Icon image_](/en/docs/vietbando_gisonline/guides/layer_style_panel#5-list-of-images-for-styling-layer)
  - _Icon size_
  - _Icon opacity_
  - _Icon padding_
  - _Anchor_
  - _Allow overlap icon_
  - _Symbol avoid edges_
  - _Icon rotate_
  - _Icon color_
  - _Icon rotate alignment_
  - _Symbol placement_
  - _Icon translate_
  - _Sort key_: Used in case of editing classification or ranking according to each feature in the data
  - _Icon offset_

- For text:
  - _Text field_
  - _Text size_
  - _Text opacity_
  - _Text anchor_
  - _Text font_
  - _Text color_
  - _Text halo color_
  - _Text rotate_
  - _Line height_
  - _Text max width_
  - _Letter spacing_
  - _Text ignore placement_
  - _Text halo width_
  - _Text translate_
  - _Allow overlap text_
  - _Text radial offset_
  - _Text transform_
  - _Text rotation alignment_
  - _Text justify_
  - _Text writing mode_

### Circle

<img src={circle_style_ex} alt="style" width="90%" />

List of simple attributes of layer **circle**:

- _Radius_
- _Circle color_
- _Circle stroke color_
- _Sort key_: Used in case of editing classification or ranking according to each feature in the data
- _Circle opacity_
- _Circle stroke opacity_
- _Circle translate_
- _Circle stroke width_
- _Circle pitch circle_
- _Circle pitch alignment_

### Fill-extrusion

<img src={fill_extrusion_style_ex} alt="style" width="90%" />

List of simple attributes of layer **fill-extrusion**:

- _Color_
- [_Pattern_](/en/docs/vietbando_gisonline/guides/layer_style_panel#5-list-of-images-for-styling-layer) _(If the user selects a pattern, the map will prioritize drawing the pattern instead of drawing the color and vice versa)_
- _Sort key_: Used in case of editing classification or ranking according to each feature in the data
- _Opacity_ (_opacity_)
- _Extrusion base_
- _Extrusion height_
- _Fill extrusion translate_

### Advance edit

At some attributes of layer of GEOJSON data, at simple editing, users can combine with zoom level of map, source data to display layers from color, width, ... To perform this function, users follow the following steps:

- **Step 1**: Click on the icon at the end of each layer's attribute entry:

<img src={advance_click_menu} alt="style" width="90%"/>

A popup contains a list of options for advanced editing appears:
- Style with zoom range
- Style with data range
- Style with data conditions
- Style with value properties

Each type of layer attribute will have a different list of options depending on that displayed feature.

- **Step 2**: Click to select a type to start setting rules for that feature according to the instructions below.

#### Style with zoom range

This option is often used with attributes that have linear values ​​such as color, opacity, thickness, etc. The map layer will display this attribute according to the variation of zoom level of map with the rules that the user requested.

<video
    style={{  width: '90%' }}
    src={zoom_edit_style}
    controls
/>

Inputs the user needs to enter when selecting this type of editing include:

- _Rate of change_: Change the value variation of the attributes being edited according to the change of the zoom level (default is linear)
  - [Linear](https://docs.mapbox.com/style-spec/reference/expressions/#interpolate)
  - [Exponential](https://docs.mapbox.com/style-spec/reference/expressions/#interpolate)
  - [Cubic Bezier](https://docs.mapbox.com/style-spec/reference/expressions/#interpolate)
- _Create rules while zoom map_:
  - Add stops by clicking button + at the bottom of the box
  - Add zoom level (Note: previous values ​​are always smaller than later values)
  - Add a value to the attribute being edited corresponding to the zoom level above


<img src={zoom_expression_ex} alt="style" />

#### Style with data range

Similar to styling with zoom rane, this option is only suitable for linear feature types such as color, etc. The layer will display the selected attributes according to the variation of the value of an attribute in the data that the user specifies.

<img src={edit_advance_data_range} alt="style" width="90%"/>

Inputs the user needs to enter include:
- _Rate of change_: Change the value variation of the attributes being edited according to the change of the zoom level (default is linear)
  - [Linear](https://docs.mapbox.com/style-spec/reference/expressions/#interpolate)
  - [Exponential](https://docs.mapbox.com/style-spec/reference/expressions/#interpolate)
  - [Cubic Bezier](https://docs.mapbox.com/style-spec/reference/expressions/#interpolate)
- _Select the name of attribute_: Attribute name to apply the rule for value variability to the class characteristic.
- _Select ramp color_
- _Create rules_:
  - Add a stop by clicking the button + below the edit box
  - Add values for attributes at this stop.(Note: previous values ​​are always smaller than later values)
  - Add a value to the attribute being edited corresponding to the zoom level above

#### Style with data conditions.

With this option, the user can specify the value of attribute of layer corresponding to a part of the data that satisfies the condition of the attribute value that the user created the rule, other parts will be assigned a default value. determined in layer.

<img src={style_with_data_conditions} alt="style" width="90%"/>

##### Tab edit attributes

Inputs the user needs to enter include:

- **Giá trị**: The name of attributes that user want to create rule.
- For each attribute name above, the user can create multiple assignments for the value of the attribute. The user adds an assignment by pressing the button <img src={button_add_items} alt="style" style={{marginBottom: "-0.25rem"}} width={25}/> below the last assignment.
- For each stops, the user enters the following value:
  - Right under **Value**, The user will select a value of the desired above attribute to specify a unique attribute value for this value.
  -**Characteristic value**: Unique characteristic value corresponding to the value of the above attribute
- **Other values**: For other attribute values, the user will enter a value for the default attributes value represented in the layer.

##### Tab JSON

Additionally, users can create their own rules for characteristics by entering JSON at tab **JSON**:

<img src={style_data_condition_with_JSON} alt="style" width="90%"/>

Users refer to the legal structure of JSON at [đây](https://docs.mapbox.com/style-spec/reference/expressions/) to enter valid JSON.

#### Style with value properties

With this option, The user specifies a value of properties to be the value of the feature of the shape represented on the map:
<img src={edit_with_select_data} alt="style" width="90%"/>

As above image, the user used the attribute **hexColor** in the data to assign the characteristic **Color** of the layer and it is clearly shown on the map. Each image will represent the corresponding color as the value **hexColor** in the data.

## 2. Simple editting style with other types.

### Raster layer

<img src={raster_style_ex} alt="style" width="90%"/>

Inputs the user needs to enter include:

- _Raster brightness min_
- _Raster brightness max_
- _Opacity_
- _Raster saturation_
- _Rsster constrast_
- _Raster hue rotate_
- _Raster fade duration_
- _Raster resampling_

### Rain layer

<img src={edit_rain_layer_style} alt="style" width="90%"/>

Inputs the user needs to enter include:
- _Rain color_
- _Rain opacity_
- _Snow opacity_
- _Snow color_
- _Mesh opacity_

### Weather layer

<img src="/img/layer_style_panel/edit_weather_layer.png" alt="style" width="90%"/>

Inputs the user needs to enter include:
- _Weather color_
- _Weather type_

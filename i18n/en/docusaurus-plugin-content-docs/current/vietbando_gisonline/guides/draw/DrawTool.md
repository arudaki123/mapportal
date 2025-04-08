---
title: Draw tools
sidebar_position: 1
---

import videoSnapEndPoint from "/img/guides/draw/snap-end-point.mp4"
import videoSnapMidPoint from "/img/guides/draw/snap-mid-point.mp4"
import videoSnapCentroid from "/img/guides/draw/snap-centroid.mp4"
import videoSnapNearest from "/img/guides/draw/snap-nearest.mp4"
import videoSnapParallel from "/img/guides/draw/snap-parallel.mp4"
import videoSnapPerpendicular from "/img/guides/draw/snap-perpendicular.mp4"
import videoSnapExtension from "/img/guides/draw/snap-extension.mp4"
import videoSnapAllType from "/img/guides/draw/snap-all-type.mp4"

### 1. Thêm source mới

-   Bấm vào nút <img src="/img/guides/draw/file.svg" alt="new-layer" className='_image img_margin_025' width="20"/>**_"Lớp mới"_** để bật bảng điều khiển **_"Tạo nguồn dữ liệu geojson mới"_**
    Sau đó lựa chọn kiểu hình học của nguồn và loại lớp hiển thị.
    ID source và ID layer sẽ được tạo ra tự động. Nếu muốn nhập ID tùy chỉnh, có thể mở khoá chỉnh sửa sau đó chỉnh sửa.

-   Thêm một nguồn dữ liệu kèm một lớp hiển thị dữ liệu mới:

<img
    src='/img/guides/draw/create-new-geojson-source.png'
    alt='create-new-geojson-source'
    className='_image img_margin_025'
/>

### 2. Bật tắt chức năng chỉnh sửa

-   Bật tắt trạng thái chỉnh sửa của một hoặc nhiều lớp.
    Chọn một hoặc nhiều lớp, sau đó ấn chuột phải để mở bảng danh mục.
    Bấm vào mục **_"Bật/tắt trạng thái chỉnh sửa"_**.

<img
    src='/img/guides/draw/layer-toggle-edit.png'
    alt='layer-toggle-edit'
    className='_image img_margin_025'
/>

-   Sau khi bật trạng thái chỉnh sửa của các layer. Để thêm, sửa, xóa feature cho
    lớp, người dùng phải chọn 1 lớp trong bảng **_List Layer_**. Lúc này các công
    cụ trên thanh công cụ sẽ có thể sử dụng để vẽ hoặc chỉnh sửa hình học. Các hoạt động chỉnh sửa sẽ có tác dụng lên lớp đang được chọn.

### 3. Vẽ/chỉnh sửa

#### 3.1. Nhóm công cụ vẽ

<img src="/img/guides/draw/draw-tools.png" alt="draw-tools" className='_image img_margin_025' />

-   Công cụ vẽ điểm, chuỗi đường, đa giác, hình chữ nhật, vẽ nhanh đa giác.
-   Các công cụ chỉnh sửa và vẽ sẽ chuyển sang trạng thái **_hoạt động_** và có thể sử dụng khi có một lớp ở trong trạng thái **_chỉnh sửa_** và đang được lựa chọn.

#### 3.1. Nhóm công cụ chỉnh sửa

<img
    src='/img/guides/draw/edit-tools.png'
    alt='edit-tools'
    className='_image img_margin_025'
/>

Công cụ nhóm, rã nhóm, chọn nâng cao feature, chọn chỉnh sửa cơ bản features, thay đổi kích thước, xoay, xóa đỉnh, xóa feature.

#### 3.3. Thêm 1 feature

-   Tùy thuộc vào loại lớp, bạn có thể sử dụng các biểu tượng <img src="/img/guides/draw/point.svg" alt="point" className='_image img_margin_025' width="20"/>Thêm điểm, <img src="/img/guides/draw/multiLine.svg" alt="line-string" className='_image img_margin_025' width="20"/>Thêm đường hoặc <img src="/img/guides/draw/polygon.svg" alt="polygon" className='_image img_margin_025' width="20"/>Thêm đa giác trên thanh công cụ để thêm các feature mới vào lớp hiện tại
-   B1: Lựa chọn công cụ vẽ trên **_"thanh công cụ vẽ"_** để vẽ Hình học.
-   B2: Panel **_"Thuộc tính đối tượng"_** hiện ra khi vẽ xong. Tại bảng điều khiển này có thể chỉnh sửa hoặc thêm các thuộc tính cho feature.
-   B3: Ấn **_"Lưu"_** để lưu thông tin feature hoặc ấn **_"Hủy"_** để hủy bỏ các thuộc vừa nhập và quay lại tiếp tục chỉnh sửa hình học.

#### 3.4. Chỉnh sửa feature"

##### 3.4.1 Lựa chọn đơn giản

-   Khi layer đang ở trạng thái chỉnh sửa. Sử dụng chức năng select để chọn các feature. Chọn feature hoặc tập hợp feature để đưa vào trạng thái đang chỉnh sửa.
-   Tiếp tục chọn feature để đưa vào trạng thái simple select. Ở trạng thái simple select có thể di chuyển feature. Từ đây có thể chuyển qua trạng thái direct select, scale, hoặc rotate.
    <img src="/img/guides/draw/simple_select.png" alt="simple_select" className='_image img_margin_025'/>

##### 3.4.2 Lựa chọn trực tiếp

-   Thay đổi tọa độ đỉnh bằng cách ấn giữ và kéo đỉnh.
-   Xóa đỉnh bằng cách ấn chọn đỉnh sau đó ấn nút <img src="/img/guides/draw/close.svg" alt="close" className='_image img_margin_025' width="20"/>**_"Xóa"_** hoặc ấn phím **_"Backspace/Delete"_** trên bàn phím.
-   Thêm đỉnh là trung điểm của đoạn thẳng bằng cách ấn vào biểu tượng trung điểm. Ngoài ra, để vẽ nhanh 1 điểm nằm giữa hai điểm. Khi ấn xuống nút trung điểm có thể giữ chuột ở trạng thái nhấn xuống và kéo đỉnh mới này đến vị trí trong 1 lần nhấn xuống.
    <img src="/img/guides/draw/direct_select.png" alt="direct_select" className='_image img_margin_025'/>

##### 3.4.3 Chức năng Xoay

-   Chức năng xoay cho phép xoay hình học quanh tâm bằng cách kéo icon <img src="/img/guides/draw/rotate.png" alt="rotate" className='_image img_margin_025' width="20"/> quanh tâm hình học.

##### 3.4.4 Chức năng Thu phóng

-   Chức năng thu phóng cho phép phóng to, thu nhỏ hình học bằng cách kéo icon <img src="/img/guides/draw/scale.png" alt="scale" className='_image img_margin_025' width="20"/> ra xa hoặc lại gần tâm.

##### 3.4.5 Nhóm feature

-   Chức năng nhóm feature cho phép nhóm nhiều feature thành 1 feature mới. Chọn các feature cần nhóm sau đó ấn nút.
-   Sau khi chọn một nhóm feature, ấn vào nút <img src="/img/guides/draw/group_object.svg" alt="group_feature" className='_image img_margin_025' width="20"/> để thực hiện nhóm feature. Khi quá trình nhóm feature hoàn thành, sẽ có thông báo nhóm thành công trên góc màn hình:
    <img src="/img/guides/draw/features_group_completed.png" alt="features_group_completed"/>

##### 3.4.6 Tách feature

-   Chức năng tách feature cho phép người dùng tách một feature tổng hợp thành các feature đơn lẻ mới.
-   Sau khi chọn một nhóm feature, ấn vào nút <img src="/img/guides/draw/group_object.svg" alt="group_feature" className='_image img_margin_025' width="20"/> để thực hiện nhóm feature. Khi quá trình nhóm feature hoàn thành, sẽ có thông báo nhóm thành công trên góc màn hình:
    <img src="/img/guides/draw/features_separate_completed.png" alt="features_group_completed"/>

##### 3.4.7 Xóa feature, xóa đỉnh

-   Chức năng xóa cho phép người dùng xóa feature bằng cách chọn một hoặc nhiều feature ở trong trạng thái **_"Simple select / Rotate"_**, sau đó ấn nút xóa. Tương tự, Để xóa đỉnh người dùng có thể chọn một hoặc nhiều đỉnh sau đó ấn nút xóa. _Lưu ý chỉ có thể xóa feature khi feature đang ở trạng thái lựa chọn dơn giản_

##### 3.4.8 Lùi lại / Tiến về trước

-   Chức năng **_"Lùi lại"_** và **_"Tiến về trước"_** cho phép người dùng lùi loại hoặc hoàn tác các hành động đã thực hiện bằng cách ấn vào nút <img src="/img/guides/draw/undo.svg" alt="undo" className='_image img_margin_025' width="20"/> **_"Undo"_** hoặc <img src="/img/guides/draw/redo.svg" alt="redo" className='_image img_margin_025' width="20"/> **_"Redo"_**.
-   Các trạng thái tiến về trước sẽ bị xóa khi thực hiện chỉnh sửa hoặc vẽ hỉnh mới.

##### 3.4.9 Vẽ một feature mới

-   Để vẽ mới một feature sử dụng các nút <img src="/img/guides/draw/point.svg" alt="point" className='_image img_margin_025' width="20" /> **_"Điểm"_**, <img src="/img/guides/draw/multiLine.svg" alt="line-string" className='_image img_margin_025 ' width="20"/> **_"Chuỗi đường"_**hoặc <img src="/img/guides/draw/polygon.svg" alt="polygon" className='_image img_margin_025' width="20"/> **_"Đa giác"_**

-   Điểm: Ấn vào nút <img src="/img/guides/draw/point.svg" alt="point" className='_image img_margin_025' width="20" /> **_"Point"_** sau đó ấn vào bản đồ để vẽ.

-   Chuỗi đường: Ấn vào nút <img src="/img/guides/draw/multiLine.svg" alt="multi-line-string" className='_image img_margin_025 ' width="20"/> **_"Chuỗi đường"_** sau đó ấn vào bản đồ để vẽ lần lượt từng đỉnh. Ấn liên tục 2 đỉnh trùng nhau để hoàn thành vẽ.

-   Đa giác: Người dùng ấn vào nút <img src="/img/guides/draw/polygon.svg" alt="polygon" className='_image img_margin_025' width="20"/> **_"Đa giác"_** sau đó ấn vào map để vẽ lần lượt từng đỉnh. Ấn liên tục 2 đỉnh trùng nhau để hoàn thành vẽ.

###### 3.4.10 Thêm vòng cho Polygon

-   Để vẽ thêm vòng cho Polygon, thực hiện các bước sau:

    -   **Bước 1:** Select feature sau đó ấn nút <img src="/img/guides/draw/addRingPolygon.svg" alt="addRingPolygon" className='_image img_margin_025' width="20"/> **_"Thêm vòng"_** trên thanh công cụ **_"Chỉnh sửa"_** hoặc ấn chuột phải để mở menu trình đơn chuột phải sau đó chọn mục <img src="/img/guides/draw/addRingPolygon.svg" alt="addRingPolygon" className='_image img_margin_025' width="20"/> **_"Thêm vòng"_**.

    <img src="/img/guides/draw/draw-context-menu-add-ring.png" alt="draw-context-menu-add-ring" className='_image'/>

    -   **Bước 2:** Ấn vào bản đồ để lần lượt vẽ từng đỉnh cho phần đơn mới. _Lưu ý phần đơn mới không cắt nhau với các phần khác của Polygon/MultiPolygon_.
    -   **Bước 3:** kết thúc vẽ vòng bằng cách vẽ liên tiếp hai đỉnh trùng nhau.

###### 3.4.11 Thêm phần đơn cho geometry

-   Để vẽ thêm thành phần cho geometry, thực hiện các bước sau:

    -   **Bước 1:** Select sau đó ấn nút <img src="/img/guides/draw/addSingleShape.svg" alt="addSingleShape" className='_image img_margin_025' width="20"/> **_"Thêm phần đơn"_** trên thanh công cụ **_"Chỉnh sửa"_** hoặc ấn chuột phải để mở menu trình đơn chuột phải sau đó chọn mục <img src="/img/guides/draw/addSingleShape.svg" alt="addSingleShape" className='_image img_margin_025' width="20"/> **_"Thêm phần đơn"_**.

    <img src="/img/guides/draw/draw-context-menu-add-single.png" alt="draw-context-menu-add-single" className='_image'/>

    -   **Bước 2:** Ấn vào bản đổ đễ vẽ từng đỉnh cho phần đơn mới. _Lưu ý phần đơn mới không cắt nhau với các phần khác của Polygon/MultiPolygon._
    -   **Bước 3:** Kết thúc vẽ vòng bằng cách vẽ liên tiếp hai đỉnh trùng nhau.

###### 3.4.12 Di chuyển vị trí geometry

-   Trong chế độ **_"Simple Select"_**, chọn một hoặc nhiều feature sau đó kéo chuột để di chuyển.

### 4. Snap tools

    Chức năng Snap trong chương trình vẽ hình học giúp căn chỉnh chính xác các điểm và đường trên bản vẽ. Dưới đây là hướng dẫn chi tiết về các công cụ Snap bạn đã liệt kê:

<video
style={{ width: '80%' }}
src={videoSnapAllType}
loop
controls
/>

#### 4.1. Snap End Point

-   **Mục đích:** Căn chỉnh đến điểm đầu hoặc điểm cuối của một đường thẳng hoặc hình dạng.
-   **Cách sử dụng:** Khi bật tính năng này, Snap sẽ "bắt" và giữ chuột tại điểm đầu hoặc cuối của đoạn thẳng, cung cấp độ chính xác cao khi nối các đường.

    <img src="/img/guides/draw/snap-end-point.png" alt="snap-end-point" width="80%" className='_image'/>
    <video
        style={{ width: '80%' }}
        src={videoSnapEndPoint}
        loop
        controls
    />

#### 4.2. Snap Mid Point

-   **Mục đích:** Căn chỉnh đến điểm giữa của một đoạn thẳng.
-   **Cách sử dụng:** Khi di chuột gần giữa đoạn thẳng, Snap sẽ tự động giữ tại điểm giữa để bạn có thể nối hoặc kéo dài đoạn thẳng một cách chính xác.

    <img src="/img/guides/draw/snap-mid-point.png" alt="snap-mid-point" width="80%" className='_image'/>
    <video
        style={{ width: '80%' }}
        src={videoSnapMidPoint}
        loop
        controls
    />

#### 4.3. Snap Nearest

-   **Mục đích:** "Bắt" vào điểm gần nhất trên bất kỳ đường nào.
-   **Cách sử dụng:** Khi đưa chuột đến một đường bất kỳ, tính năng này sẽ giữ chuột tại điểm gần nhất trên đường đó, không nhất thiết là đầu hoặc giữa đoạn thẳng.

    <img src="/img/guides/draw/snap-nearest.png" alt="snap-nearest" width="80%" className='_image'/>
    <video
        style={{ width: '80%' }}
        src={videoSnapNearest}
        loop
        controls
    />

#### 4.4. Snap Centroid

-   **Mục đích:** "Bắt" vào tâm của các hình dạng như hình chữ nhật, hình tròn, và các hình đa giác.
-   **Cách sử dụng:** Khi bật chế độ này, Snap sẽ tự động giữ chuột tại tâm của hình dạng để dễ dàng vẽ các đường hoặc đối tượng liên quan đến điểm trung tâm.
    <img src="/img/guides/draw/snap-centroid.png" alt="snap-centroid" width="80%" className='_image'/>
    <video
    style={{ width: '80%' }}
    src={videoSnapCentroid}
    loop
    controls
    />

#### 4.5. Snap Parallel

-   **Mục đích:** Căn chỉnh các đối tượng sao cho song song với một đường cho trước.
-   **Cách sử dụng:**

            -   **Bước 1:** Nhấn và giữ phím Alt trong khi rê chuột tới đoạn thẳng tham chiếu mà bạn muốn tạo đường song song.
            Khi đã chọn được đoạn thẳng tham chiếu, thả phím Alt để xác nhận đường tham chiếu.
            Kết thúc bước này, bạn sẽ thấy một đường thẳng sáng lên trên bản đồ, xác định đoạn thẳng tham chiếu.
            -   **Bước 2:** Tiếp tục vẽ; Snap lúc này sẽ tự động căn chỉnh chuột sao cho đường bạn đang vẽ song song với đường tham chiếu.

Điều này rất hữu ích để tạo các đường song song chính xác.

<img src="/img/guides/draw/snap-parallel.png" alt="snap-parallel" width="80%" className='_image'/>
<video
        style={{ width: '80%' }}
        src={videoSnapParallel}
        loop
        controls
/>

#### 4.6. Snap Perpendicular

-   **Mục đích:** Căn chỉnh các đối tượng sao cho vuông góc với một đường có sẵn.
-   **Cách sử dụng:**

    -   **Kiểu 1:** Vuông góc với đoạn thảng liền kề:
        khi kích hoạt, Snap sẽ tự động căn chỉnh cho điểm mới sao cho vuông góc với đoạn thẳng liền kề khi di chuyển chuột gần khu vực vông góc
        <img src="/img/guides/draw/snap-perpendicular.png" alt="snap-perpendicular" width="80%" className='_image'/>
    -   **Kiểu 2:** Vuông góc với đường thẳng tham chiếu:

        -   **Bước 1:** Nhấn và giữ phím Alt, sau đó di chuyển chuột tới đoạn thẳng mà bạn muốn tạo đường vuông góc.
            Khi đã chọn được đoạn thẳng, thả phím Alt để xác nhận đường tham chiếu vuông góc.
            Lúc này, bạn sẽ thấy đường tham chiếu hiển thị rõ trên bản đồ.

            <img src="/img/guides/draw/snap-perpendicular-tracking-snap-get-reference-line.png" alt="snap-perpendicular" width="80%" className='_image'/>

        -   **Bước 2:** Tiếp tục vẽ, khi rê chuột tới gần đường tham chiếu, Snap sẽ tự động điều chỉnh góc sao cho đường bạn đang vẽ vuông góc với đường tham chiếu.

            <img src="/img/guides/draw/snap-perpendicular-tracking-snap.png" alt="snap-perpendicular" width="80%" className='_image'/>

Điều này đảm bảo các đường vuông góc chính xác khi thao tác.
<video
style={{ width: '80%' }}
src={videoSnapPerpendicular}
loop
controls
/>

#### 4.7. Snap Extension

-   **Mục đích:** Vẽ một điểm mới nằm trên đường kéo dài của một đoạn thẳng mục tiêu
-   **Cách sử dụng:**
    -   **Bước 1:** Nhấn và giữ phím Alt trong khi di chuyển chuột đến đoạn thẳng mục tiêu.
        Khi đã chọn được đoạn thẳng, thả chuột và thả phím Alt để xác nhận đường tham chiếu mở rộng.
        Lúc này, bạn sẽ thấy một đường tham chiếu kéo dài từ đoạn thẳng hiện ra trên bản vẽ.
    -   **Bước 2:** Tiếp tục vẽ; khi rê chuột đến gần đường tham chiếu, Snap sẽ tự động "bắt" điểm trên đường kéo dài này.

Chức năng này rất hữu ích khi cần vẽ một điểm nằm trên phần kéo dài của đoạn thẳng.
<img src="/img/guides/draw/snap-extension.png" alt="snap-extension" width="80%" className='_image'/>
<video
style={{ width: '80%' }}
src={videoSnapExtension}
loop
controls
/>

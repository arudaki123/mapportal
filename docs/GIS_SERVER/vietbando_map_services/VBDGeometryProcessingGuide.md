# Vietbando Geometry Processing Services

<div style={{ textAlign: 'right' }}>
  <span>Newest version: 1.1.3</span>
</div>

## 1. Giới Thiệu

**Vietbando Geometry Processing Services** cung cấp giải pháp tối ưu cho các tác vụ hình học từ cơ bản đến phức tạp. Với khả năng xử lý mạnh mẽ, dễ dàng tích hợp và sử dụng, dịch vụ đáp ứng linh hoạt các yêu cầu như giao cắt, hợp, kiểm tra quan hệ hình học, làm mịn, và nhiều chức năng khác.   
Điểm nổi bật là hiệu năng cao nhưng vẫn tiết kiệm tài nguyên hệ thống, đảm bảo hoạt động mượt mà ngay cả trên các cấu hình máy hạn chế.   

Trong tài liệu này, chúng tôi cung cấp hướng dẫn cài đặt, tùy chỉnh dịch vụ, cách tạo các request và định dạng phản hồi.   

Tên đầy đủ: **Vietbando Geometry Processing Services**.   
Tên viết tắt: **VBDGP**.   

## 2. Cài Đặt Dịch Vụ

Hiện tại, **VBDGP** chỉ hoạt động trên **Windows**. Cấu hình tối thiểu yêu cầu:
- OS: Windows 8.0/Windows Server 2008
- Ram: 2GB
- CPU: Intel Core i3 7xxx
- Memory available: 200Mb

### 2.1. Mở Port

Dịch vụ **VBDGP** mặc định sử dụng port 8007. Hãy mở port này trên tường lửa (firewall).

### 2.2. Thao Tác Cài Đặt

Thật đơn giản
- Mở file cài đặt.
- Chọn **Next** -> **Next** -> **Next** (*bao nhiêu "Next" là bấy nhiêu lần ấn*).
- Đợi quá trình cài đặt kết thúc, chọn **Close**.

Dịch vụ bây giờ đã sẵn sàng để sử dụng. 🚀🚀🚀

## 3. Tùy Chỉnh Dịch Vụ

### 3.1. Dừng Dịch Vụ
- Mở **services.msc**.
- Tìm dịch vụ **VBDGeoProcessingServices**, nhấn **Stop**.

### 3.2. Khởi động lại
Quay lại **services.msc**, nhấn **Start** để khởi động lại dịch vụ.

### 3.4. Tùy Chỉnh Bằng "Terminal" 🤖
- Mở **Terminal** ở quyền administrator, điều hướng tới thư mục cài đặt của service.
- Chạy câu lệnh `vbdgp` để xem helper, hoặc chạy các lệnh phù hợp. 

```cmd
~/VBDGeoProcessingServices>vbdgp
Usage: vbdgp <command>

Service operations:
  install: Install and run services
  start: Start services
  stop: Stop services
  uninstall: Remove services, local data, this is not uninstall program.

Utilities:
  local-data-dir: Open local data directory
  version: Get version of services
```
### 3.3. Chỉnh Sửa Cài Đặt
- Mở file **app.config** trong thư mục cài đặt.
- Tùy chỉnh:
  - Port.
  - Đường dẫn lưu trữ dữ liệu.

**Lưu ý:** cần khởi động lại dịch vụ để áp dụng các thay đổi.

🥳🎉🎊🪩

## 4. Request Form

Một request bao gồm:
- **Query params**: nơi chứa các tham số cho hàm
- **Body request** (*nếu là phương thức <span style={{ color: 'orange' }}>POST</span>*): chứa geometries hoặc dữ liệu cần xử lý.

Nếu body request là các geometries, quy tắc như sau:

- Một GeoJSON tương ứng với một mảng geometry.
- Nếu xử lý *n* geometry, chỉ xét các geometries từ *1* đến *n*.
- Nếu xử lý *n* **mảng geometry**, chỉ xét các mảng từ *1* đến *n*.

Ví dụ:

So sánh giữa một mảng geometry với một geometry, body request sẽ gồm hai mảng, mảng đầu chứa nhiều geometry, mảng thứ hai chứa một geometry.

### 4.1. Các Định Dạng Geometry Được Hỗ Trợ

**GeoJSON**  
Có thể là một GeoJSON hoặc một mảng chứa nhiều GeoJSON, số lượng GeoJSON trong mảng phụ thuộc vào yêu cầu của từng hàm.

**WKT array**   
WKT không hỗ trợ mảng, vì vậy cần sử dụng mảng JSON để bao bọc các WKT.  
Cấu trúc thống nhất là một mảng JSON chứa nhiều mảng con, mỗi mảng con gồm các chuỗi WKT.

### 4.2. Các Mẫu Body Tham Chiếu

Sau đây là các ví dụ về body request để tham chiếu nhanh, áp dụng các quy tắc nói trên.

#### 4.2.1 Mẫu Body Số 1 🦊

Có một geometry.

```json
{
  "type": "FeatureCollection",
  "name": "example",
  "features": [
    { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [...] } }
  ]
}
```
```json
[
  [
    "POLYGON((...))"
  ]
]
```

#### 4.2.2. Mẫu Body Số 2 🐻

Có hai geometry.

```json
{
  "type": "FeatureCollection",
  "name": "example",
  "features": [
    { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [...] } },
    { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [...] } }
  ]
}
```
```json
[
  [
    "POLYGON ((...))",
    "LINESTRING (...)"
  ]
]
```

#### 4.2.3. Mẫu Body Số 3 🦄

Chứa nhiều geometry.

```json
{
  "type": "FeatureCollection",
  "name": "example",
  "features": [
    { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [...] } },
    { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [...] } },    
    { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [...] } }
    ...
  ]
}
```
```json
[
  [
    "POLYGON ((...))",
    "LINESTRING (...)",
    "LINESTRING (...)",
    ...
  ]
]
```

#### 4.2.4. Mẫu Body Số 4 🐲

Chứa nhiều **mảng geometry**.

```json
[
  {
  "type": "FeatureCollection",
  "name": "example",
  "features": [
    { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [...] } },
    { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [...] } },
    ...
  ]
  },
  {
  "type": "FeatureCollection",
  "name": "example",
  "features": [
    { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [...] } },
    { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [...] } },
    ...
  ]
  }
]
```
```json
[
  [
    "POLYGON ((...))",
    "LINESTRING (...)",
    ...
  ],
  [
     "POLYGON ((...))",
     "POLYGON ((...))",
    ...
  ]
]
```

Ví dụ một request sử dụng mẫu body số 4 (curl): 
```powershell
curl --location 'http://localhost:8007/geo?function=difference&format=wkt' `
--header 'Content-Type: application/json' `
--data '[
    [
        "POLYGON ((106.679820857586 10.816154684662, 106.679999576916 10.816154684662, 106.679999576916 10.816060329736, 106.679820857586 10.816060329736, 106.679820857586 10.816154684662))",
        "POLYGON ((106.679625487387 10.816081420837, 106.679543343099 10.816081420837, 106.679543343099 10.816170225473, 106.679625487387 10.816170225473, 106.679625487387 10.816081420837))"
    ],
    [
        "POLYGON ((106.679518921824 10.81620463727, 106.679637698024 10.81620463727, 106.679637698024 10.816158014836, 106.679518921824 10.816158014836, 106.679518921824 10.81620463727))",
        "POLYGON ((106.679675439995 10.816237939008, 106.679855269382 10.816237939008, 106.679855269382 10.816128043271, 106.679675439995 10.816128043271, 106.679675439995 10.816237939008))"
    ]
]'
```

## 5. Response Form

Dịch vụ phản hồi dưới dạng JSON, bao gồm dữ liệu đã qua xử lý (thẻ `response`) và metadata (thẻ `metadata`) của dịch vụ. Ý nghĩa một số thẻ quan trọng:
- **function**: tên hàm.
- **dataType**: kiểu dữ liệu trả về.
- **data**: kết quả trả về.
- **rule**: tên quy tắc hàm topo.
- **valid**: giá trị Boolean xác nhận cho **rule**.

Ví dụ:
```json
{
  "response": {
    "function": "check_topo",
    "dataType": "json",
    "data": {}        
  },
  "metadata": {
      "service": "VBDGeoProcessingServices",
      "success": true
  }
}
```

## 6. Danh Sách Hàm

Dưới đây là giải thích chi tiết về các ký hiệu sẽ được sử dụng:

- **valueA|valueB**: Nhận giá trị A **hoặc** B.   
Ký hiệu `|` chỉ ra rằng tham số có thể có giá trị là A hoặc B. Ví dụ, nếu tham số là `color` và có giá trị `red|blue`, thì tham số này có thể nhận giá trị là "red" hoặc "blue".

- **options***: Tham số bắt buộc.  
Ký hiệu `*` sau tên tham số ám chỉ rằng tham số này bắt buộc phải có.

- **\$VALUE**: Một alias đã được định nghĩa.  
Ký hiệu `$` phía trước ám chỉ rằng đây là một alias cho một giá trị đã được định nghĩa sẵn. Lưu ý rằng người dùng vẫn phải truyền giá trị theo kiểu dữ liệu tương ứng với tham số. Các định nghĩa này nằm trong bảng [Danh Sách Hằng Số](#71-danh-sách-hằng-số). Ví dụ: 
  - Bảng định nghĩa: [$DBL_EPSILON](#71-danh-sách-hằng-số)= "2.2204460492503131e-016".
  - Bảng danh sách tham số: `tolerance` = [$DBL_EPSILON](#71-danh-sách-hằng-số), lúc này nếu không chỉ định giá trị cụ thể cho `tolerance`, thì `tolerance` nhận giá trị là "2.2204460492503131e-016".

- **(*)**: Nhận giá trị bất kỳ thuộc kiểu dữ liệu đã quy định.   
Ký hiệu này chỉ ra rằng tham số có thể nhận bất kỳ giá trị nào trong kiểu dữ liệu mà đã được quy định trước đó. Ví dụ, nếu kiểu dữ liệu là `Interger`, thì tham số có thể nhận bất kỳ giá trị nào là một số nguyên.

- **X,Y**: Cặp tọa độ X, Y.   
Đây là ký hiệu để mô tả một điểm trong không gian 2D, với `X` là tọa độ theo chiều ngang (hoặc trục X) và `Y` là tọa độ theo chiều dọc (hoặc trục Y). Ví dụ: `(0.0, 0.0)` biểu thị tọa độ gốc trong không gian 2D.

- **[valueFrom:valueTo]**: Giá trị nằm trong khoảng từ "valueFrom" đến "valueTo".   
Ký hiệu `[:]` chỉ ra rằng giá trị tham số phải nằm trong khoảng từ giá trị bắt đầu `valueFrom` đến giá trị kết thúc `valueTo`. Ví dụ, nếu giá trị tham số là `[1:10]`, điều này có nghĩa là tham số phải có giá trị từ 1 đến 10 (bao gồm cả 1 và 10).

**Bảng danh sách tham số dùng chung**
| Tham số        | Kiểu dữ liệu | Giá trị          | Mặc định| Mô tả                  |
|-----------------|--------------|------------------|------------------|----------------|
| format*         | String       | geojson\|wkt   |    | Định dạng đầu vào      |
| out_format      | String       | geojson\|wkt   | geojson          | Định dạng trả về |
| function*       | String       |         |   | Tên hàm               |

### 6.1. Intersect

So sánh giao cắt giữa hai geometries. 

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>   

- Kiểu body: [Mẫu Body Số 1](#421-mẫu-body-số-1-)

Bảng danh sách tham số bổ sung
| Tham số        | Kiểu dữ liệu | Giá trị          | Mặc định| Mô tả                  |
|-----------------|--------------|------------------|------------------|---------------|
| function*       | String       | intersect        |   | Tên hàm               |

### 6.2. Remove Duplicate

Loại bỏ các geometries trùng lặp.

**Request form**
- <span style={{ color: 'orange' }}>POST: $host/geo</span>   
- Kiểu body: [Mẫu Body Số 1 🦊](#421-mẫu-body-số-1-) 

Bảng danh sách tham số bổ sung
| Tham số        | Kiểu dữ liệu | Giá trị          | Mặc định| Mô tả                  |
|-----------------|--------------|------------------|------------------|-----------------------|
| function*       | String       | removedup       |     | Tên hàm               |
| tolerance       | Double       | (*)             | [$DBL_EPSILON](#71-danh-sách-hằng-số)     | Sai số cho phép        |

### 6.3. Check Point In Polygon

Xác định điểm nằm trong polygon.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span> 
- Kiểu body: [Mẫu Body Số 1 🦊](#421-mẫu-body-số-1-) 

Bảng danh sách tham số bổ sung
| Tham số           | Kiểu dữ liệu | Giá trị        | Mặc định| Mô tả                  |
|-------------------|--------------|----------------|------------------|------------------------|
| function*         | String       | poiinpol       |      | Tên hàm                |
| point*            | String       | X,Y            |      | Tọa độ điểm            |

### 6.4. Contain

Kiểm tra một hình có nằm trong hình khác không.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span> 
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị       | Mặc định| Mô tả                        |
|---------------|--------------|---------------|-------------------|------------------------------|
| function*     | String       | contain       |     | Tên hàm                      |
| tolerance     | Double       | (*)           | [$DBL_EPSILON](#71-danh-sách-hằng-số)      | Sai số cho phép              |


### 6.5. Point To Line

Chuyển đổi các điểm thành một đường thẳng.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span> 
- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị       | Mặc định| Mô tả                        |
|---------------|--------------|---------------|-------------------|------------------------------|
| function*     | String       | poistoline    |       | Tên hàm                      |
| tolerance     | Double       | (*)           | [$DBL_EPSILON](#71-danh-sách-hằng-số)      | Sai số cho phép              |

### 6.6. Normalize

Chuẩn hóa hình học bằng cách đơn giản hóa và loại bỏ điểm thừa, giữ lại cấu trúc chính.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span> 
- Kiểu body: [Mẫu Body Số 1 🦊](#421-mẫu-body-số-1-) 

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị       | Mặc định| Mô tả                        |
|---------------|--------------|---------------|-------------------|------------------------------|
| function*     | String       | normalize     |     | Tên hàm                      |

### 6.7. Circular Arc

Vẽ một cung tròn, xác định bởi bán kính, góc và điểm bắt đầu, tạo ra đoạn cung.

**Request form**

- <span style={{ color: 'green' }}>GET: $host/geo</span> 

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị       | Mặc định| Mô tả                        |
|---------------|--------------|---------------|-------------------|------------------------------|
| function*     | String       | circlearc     |                   | Tên hàm                      |
| start_point*  | String       | X,Y           |                   | Tọa độ điểm bắt đầu của vòng cung. |
| end_point*    | String       | X,Y           |                   | Tọa độ điểm kết thúc của vòng cung. |
| center*       | String       | X,Y           |                   | Tọa độ tâm của vòng tròn. |
| left*         | Boolean         | (*)           |                   | Điều chỉnh phía trái của vòng cung. |
| radius*       | Double       | (*)           |                   | Bán kính của vòng tròn. |
| quad_segs     | Interger          | [8:256]        | 8                 | Số lượng phân đoạn của vòng cung.        |

### 6.8. Round Rect

Vẽ một hình chữ nhật với các góc bo tròn, xác định bởi chiều rộng, chiều cao và bán kính góc.

**Request form**

- <span style={{ color: 'green' }}>GET: $host/geo</span> 

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị       | Mặc định| Mô tả                        |
|---------------|--------------|---------------|-------------------|------------------------------|
| function*     | String       | roundrect     |                   | Tên hàm                      |
| left*         | Double       | (*)           |                   | Tọa độ x của góc trái trên.   |
| top*          | Double       | (*)           |                   | Tọa độ y của góc trái trên. |
| right*        | Double       | (*)           |                   | Tọa độ x của góc phải dưới.    |
| bottom*       | Double       | (*)           |                   | Tọa độ y của góc phải dưới.   |
| ratio*        | Double       | (*)           |                   | Tỷ lệ bo tròn của các góc.  |
| quad_segs     | Interger          | [8:256]        | 8                 | Số phân đoạn của mỗi góc.        |
| corner        | Interger          | 1\|2\|4\|8\|16 | 16                | Góc cần bo, 16 là cả 4 góc.    |

### 6.9. Different 

Trả về phần hình học khác biệt giữa hai đối tượng, loại bỏ phần giao nhau.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị       | Mặc định| Mô tả                        |
|---------------|--------------|---------------|-------------------|------------------------------|
| function*     | String       | difference    |                   | Tên hàm                      |

### 6.10. Xor 

Thực hiện phép toán XOR giữa hai hình học, trả về phần không giao nhau của chúng.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị       | Mặc định| Mô tả                           |
|---------------|--------------|---------------|-------------------|---------------------------------|
| function*     | String       | xor           |                   | Tên hàm. |

### 6.11. Buffering 

Tạo vùng đệm xung quanh hình học, mở rộng hoặc thu hẹp theo khoảng cách xác định.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| **Tham số**     | **Kiểu dữ liệu** | **Giá trị**      | **Mặc định** | **Mô tả**                                                                                     |
|------------------|------------------|------------------|--------------|-----------------------------------------------------------------------------------------------|
| function*        | String           | buffering        |              | Tên hàm                                                                                      |
| distance         | Double           | (*)              | 0            | Khoảng cách để tạo vùng đệm                                                                  |
| hole_treat       | Integer          | [1:4]            | 0            | Áp dụng cho kiểu vùng: 1: Lấp đầy lỗ; 2: Lỗ vùng đệm nằm bên ngoài; 3: Lỗ vùng đệm giữ nguyên; 4: Lỗ vùng đệm nằm bên trong. |
| pol_buff         | Integer          | [0:1]            | 1            | Áp dụng cho kiểu vùng: 0: Tạo vùng đệm nằm bên ngoài vùng; 1: Tạo vùng đệm nằm bên trong vùng. |
| line_buff        | Integer          | [0:2]            | 2            | Áp dụng cho kiểu đường: 0: Tạo vùng đệm bên phải; 1: Tạo vùng đệm bên trái; 2: Tạo vùng đệm cả 2 bên. |
| join             | Integer          | [1:3]            | 1            | Áp dụng cho kiểu vùng hoặc kiểu đường: 1: (Round Cap), vị trí kết hợp được bo tròn; 2: Xử lý theo tham số `mitre_limit`; 3: (Butt Cap), vị trí kết hợp được cắt ngang vuông góc với hướng của đường. |
| mitre_limit      | Integer          | [1:3]            | 1            | Áp dụng cho kiểu vùng hoặc kiểu đường với `join = 2`: 1: (Butt Cap), vị trí kết hợp được cắt ngang vuông góc; 2: (Square Cap), vị trí kết hợp được kéo dài ra một khoảng nhất định; 3: (Flat end cap), vị trí kết hợp là đầu đường nhọn. |
| end_cap          | Integer          | [1:4]            | 1            | Áp dụng cho kiểu đường: 1: (Round Cap), đầu và cuối đường gốc được làm tròn; 2: (Butt Cap), đầu và cuối đường gốc được cắt ngang; 3: (Square Cap), đầu và cuối đường gốc được kéo dài ra một khoảng nhất định; 4: (Flat end cap), đầu và cuối đường gốc là 2 đầu đường nhọn. |
| quad_segs        | Integer          | 16 \| 8 \| 3 \| 1| 16           | Áp dụng cho kiểu điểm: Tùy chọn gồm các đoạn tạo ra đường tròn, giá trị càng lớn đường tròn càng chính xác. |

### 6.12. Polygon To Line 

Chuyển đổi một đa giác các đoạn thẳng, biểu diễn các cạnh của đa giác dưới dạng các đoạn thẳng.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số        | Kiểu dữ liệu | Giá trị       | Mặc định | Mô tả                        |
|----------------|--------------|---------------|----------|------------------------------|
| function*      | String       | polygontoline |          | Tên hàm                      |

### 6.13. Line To Polygon 

Chuyển một đoạn đường thẳng thành đa giác, tạo vùng kín từ các đoạn thẳng.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số        | Kiểu dữ liệu | Giá trị       | Mặc định | Mô tả                        |
|----------------|--------------|---------------|----------|------------------------------|
| function*      | String       | polygontoline |          | Tên hàm                      |

### 6.14. Eliminate

Loại bỏ các điểm hoặc đoạn không cần thiết trong hình học, giúp đơn giản hóa hình dạng mà vẫn giữ lại cấu trúc chính.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số        | Kiểu dữ liệu | Giá trị       | Mặc định | Mô tả                        |
|----------------|--------------|---------------|----------|------------------------------|
| function*      | String       | eliminate     |          | Tên hàm                      |
| distance       | Double       | (*)           | 0        | Khoảng cách lược điểm        |

### 6.15. Smooth

Làm mượt các đoạn thẳng hoặc đường cong trong hình học, giảm độ gồ ghề hoặc các khúc khuỷu, tạo ra đường cong mượt mà hơn.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số        | Kiểu dữ liệu | Giá trị       | Mặc định | Mô tả                        |
|----------------|--------------|---------------|----------|------------------------------|
| function*      | String       | smooth        |          | Tên hàm                      |
| distance       | Double       | [0:]          | 0.5      | Độ mịn                       |

### 6.16. Cover

Tạo một hình học bao phủ các đối tượng hình học khác, tạo ra một vùng bảo vệ xung quanh chúng.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị  | Mặc định | Mô tả        |
|------------|--------------|----------|----------|--------------|
| function*  | String       | covers   |          | Tên hàm      |
| tolerance  | Double       | (*)      | 0        | Sai số       |

### 6.17. Covered By

Kiểm tra xem một hình học có bị bao phủ hoàn toàn bởi một hình học khác hay không.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị  | Mặc định | Mô tả        |
|------------|--------------|----------|----------|--------------|
| function*  | String       | coveredby   |          | Tên hàm      |
| tolerance  | Double       | (*)      | 0        | Sai số       |

### 6.18. Crosses

Kiểm tra xem hai hình học có cắt nhau tại một hoặc nhiều điểm không, nghĩa là chúng giao nhau nhưng không hoàn toàn bao phủ nhau.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị  | Mặc định | Mô tả        |
|------------|--------------|----------|----------|--------------|
| function*  | String       | crosses   |          | Tên hàm      |
| tolerance  | Double       | (*)      | 0        | Sai số       |

### 6.19. Disjoint

Kiểm tra xem hai hình học có hoàn toàn tách biệt, không giao nhau hay không.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị  | Mặc định | Mô tả        |
|------------|--------------|----------|----------|--------------|
| function*  | String       | disjoint   |          | Tên hàm      |
| tolerance  | Double       | (*)      | 0        | Sai số       |

### 6.20. Equals

Kiểm tra xem hai hình học có hoàn toàn giống nhau về hình dạng và vị trí hay không.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị  | Mặc định | Mô tả        |
|------------|--------------|----------|----------|--------------|
| function*  | String       | equals   |          | Tên hàm      |
| tolerance  | Double       | (*)      | 0        | Sai số       |

### 6.21. Within

Kiểm tra xem một hình học có hoàn toàn nằm bên trong hình học khác hay không.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-)  

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị  | Mặc định | Mô tả        |
|------------|--------------|----------|----------|--------------|
| function*  | String       | within   |          | Tên hàm      |
| tolerance  | Double       | (*)      | 0        | Sai số       |

### 6.22. Ellipse

Vẽ một elip với tâm, bán kính trục chính và bán kính trục phụ.

**Request form**

- <span style={{ color: 'green' }}>GET: $host/geo</span> 

Bảng danh sách tham số bổ sung
| Tham số        | Kiểu dữ liệu | Giá trị      | Mặc định | Mô tả                           |
|----------------|--------------|--------------|----------|---------------------------------|
| function*      | String       | ellipse   |          | Tên hàm                         |
| center         | String       | X,Y          | 0,0      | Tâm của ellipse                 |
| primaryaxis    | Double       | (*)          | 0        | Bán kính theo phương ngang      |
| secondaryaxis  | Double       | (*)          | 0        | Bán kính theo phương dọc        |

### 6.23. Ellipse Arc

Vẽ một cung elip, xác định bởi tâm, bán kính trục chính, bán kính trục phụ, và góc bắt đầu, kết thúc.

**Request form**

- <span style={{ color: 'green' }}>GET: $host/geo</span> 

Bảng danh sách tham số bổ sung
| Tham số        | Kiểu dữ liệu | Giá trị      | Mặc định | Mô tả                                  |
|----------------|--------------|--------------|----------|----------------------------------------|
| function*      | String       | ellipsearc   |          | Tên hàm                                |
| center         | String       | x,y          | 0,0      | Tọa độ tâm của ellipse arc            |
| primaryaxis    | Double       | (*)          | 0        | Bán kính theo phương ngang            |
| secondaryaxis  | Double       | (*)          | 0        | Bán kính theo phương dọc              |
| startangle     | Double       | (*)          | 0        | Góc bắt đầu ngược chiều kim đồng hồ   |
| endangle       | Double       | (*)          | 0        | Góc kết thúc ngược chiều kim đồng hồ  |

### 6.24. Rotate

Xoay hình học quanh một điểm hoặc trục với một góc xác định.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số     | Kiểu dữ liệu | Giá trị       | Mặc định | Mô tả                                  |
|-------------|--------------|---------------|----------|----------------------------------------|
| function*    | String       | rotate        |          | Tên hàm                                |
| origin      | String       | x,y           | 0,0      | Tọa độ điểm xoay                      |
| rotate      | Double       | (*)           | 0        | Góc quay (radian ngược chiều kim đồng hồ) |

### 6.25. Scale

Thay đổi kích thước của hình học, phóng to hoặc thu nhỏ theo tỷ lệ xác định từ một điểm gốc.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số   | Kiểu dữ liệu | Giá trị  | Mặc định | Mô tả                      |
|-----------|--------------|----------|----------|----------------------------|
| function*  | String       | scale    |          | Tên hàm                    |
| scale     | Double       | (*)      | 0        | Tỷ lệ phóng to/thu nhỏ     |

### 6.26. Union

Kết hợp hai hình học thành một, bao gồm tất cả các phần của cả hai, loại bỏ phần giao nhau.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị         | Mặc định | Mô tả                             |
|------------|--------------|-----------------|----------|-----------------------------------|
| function*   | String       | union           |          | Tên hàm                          |
| scale      | Double       | (*)             | 0        | Tỷ lệ phóng to hoặc thu nhỏ      |
| spherical  | Bool         | [true\|false]    | false    | Hệ tọa độ cầu                   |

### 6.27. Geometry Validate

Kiểm tra tính hợp lệ của hình học, xác định xem nó có tuân thủ các quy tắc không gian và hình học, như điểm không hợp lệ, polygon không đóng.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 1 🦊](#421-mẫu-body-số-1-) 

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị       | Mặc định | Mô tả                             |
|------------|--------------|---------------|----------|-----------------------------------|
| function*   | String       | valid         |          | Tên hàm                          |

### 6.28. Intersect Lines

Xác định điểm giao nhau giữa hai đoạn đường thẳng, nếu có. Nó trả về vị trí giao nhau hoặc thông báo nếu không có giao điểm.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-),  kiểu LineString.  

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị       | Mặc định | Mô tả                             |
|------------|--------------|---------------|----------|-----------------------------------|
| function*  | String       | lines_intersect |          | Tên hàm                          |

### 6.29. Get Center Of Polygon

Tính toán và trả về điểm trung tâm của một đa giác, thường là trọng tâm của các điểm hoặc tâm của vùng chứa hình học.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-),  kiểu Polygon.  

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị       | Mặc định | Mô tả                             |
|------------|--------------|---------------|----------|-----------------------------------|
| function*  | String       | lines_intersect |          | Tên hàm                          |

### 6.30. Inner Rect Polygon

Tạo một hình chữ nhật bên trong một đa giác, xác định bởi các cạnh của đa giác, sao cho hình chữ nhật này có diện tích lớn nhất mà không vượt ra ngoài phạm vi của đa giác.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 2 🐻](#422-mẫu-body-số-2-),  kiểu Polygon.  

Bảng danh sách tham số bổ sung
| Tham số    | Kiểu dữ liệu | Giá trị       | Mặc định | Mô tả                             |
|------------|--------------|---------------|----------|-----------------------------------|
| function*  | String       | lines_intersect |          | Tên hàm                          |

### 6.31. Get Area Of Polygon

Tính diện tích của một đa giác dựa trên các điểm xác định các đỉnh của nó.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: Mẫu số 1, kiểu Polygon.  

Bảng danh sách tham số bổ sung

| Tham số       | Kiểu dữ liệu | Giá trị       | Mặc định | Mô tả                  |
|---------------|--------------|---------------|----------|------------------------|
| function*     | String       | get_area      |          | Tên hàm                |
| src_groupcode | String       | WE            |          | Group code dữ liệu     |
| src_syscode   | String       |               |          | System code dữ liệu    |

### 6.32. Convert Geo Json To WKT

Chuyển đổi GeoJSON sang WKT (Well-Known Text) để biểu diễn dữ liệu không gian dưới dạng văn bản.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| function*     | String       | Geojson2wkt    |          | Tên hàm          |

### 6.33. Convert WKT To GeoJson

Chuyển đổi WKT (Well-Known Text) sang GeoJSON để biểu diễn dữ liệu không gian dưới dạng JSON.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| function*     | String       | Geojson2wkt    |          | Tên hàm          |

### 6.34. Convert Coordinates System

Chuyển đổi hệ tọa độ để biểu diễn dữ liệu không gian theo hệ quy chiếu mong muốn.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span>
- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số          | Kiểu dữ liệu | Giá trị         | Mặc định | Mô tả                   |
|-------------------|--------------|-----------------|----------|-------------------------|
| function*         | String       | convertcs       |          | Tên hàm                |
| src_groupcode*    | String       | [Xem danh sách](#72-group-code-và-system-code)             |          | Group code nguồn       |
| src_syscode*      | String       | [Xem danh sách](#72-group-code-và-system-code)             |          | Mã hệ tọa độ nguồn     |
| dst_groupcode*    | String       | [Xem danh sách](#72-group-code-và-system-code)             |          | Group code đích        |
| dst_syscode*      | String       | [Xem danh sách](#72-group-code-và-system-code)             |          | Mã hệ tọa độ đích      |

### 6.35. Check Topology

Kiểm tra topology trong xử lý geometry là quá trình xác minh tính chính xác và hợp lý của các đối tượng không gian. 

Quá trình này giúp phát hiện các lỗi như giao cắt sai, đoạn thẳng không hợp lệ, hay các vấn đề liên quan đến cấu trúc không gian, đảm bảo dữ liệu hình học chính xác và ổn định.

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/geo</span> 

Bảng danh sách tham số dùng chung

| **Tham số**           | **Kiểu dữ liệu** | **Giá trị**           | **Mặc định** | **Mô tả**                          |
|-----------------------|------------------|-----------------------|--------------|------------------------------------|
| function*             | String           | check_topo            |              | Tên hàm kiểm tra topo             |
| format*               | String           | geojson\|wkt         |              | Định dạng đầu vào                 |
| tolerance             | Double           | (*)                   | 1.0          | Sai số/khoảng cách tối thiểu       |
| out_format            | String           | geojson\|wkt         | geojson      | Định dạng trả về                  |
| get_invalid_data      | Boolean          | true\|false          | true        | Nhận kết quả chi tiết dữ liệu lỗi          |
| rule*     | String       |     |          | Tên luật topo          |

**Lưu ý**: Để kiểm tra **nhiều luật topology** cùng lúc, thêm dấu `;` để ngăn cách các luật với nhau. Tuy nhiên phải đảm bảo các luật là cùng loại. Ví dụ:

<span style={{ color: 'green' }}>`rule=pol_not_overlaps;pol_not_havegaps`</span>: Hợp lệ, vì cả hai điểu kiểm tra trong cùng một tập Polygon.

<span style={{ color: 'red' }}>`rule=pol_not_overlaps;covered_by_feature_class_of`</span>: Sai, vì hàm `pol_not_overlaps` kiểm tra trong cùng một tập Polygon, còn `covered_by_feature_class_of` là so sánh giữa hai tập Polygon.

**Respone form**

Dữ liệu kiểm tra topo sẽ nằm trong thẻ `response`->`data`. Nếu kiểm tra nhiều topo cùng lúc, `data` là một "array/json". Một số thẻ quan trọng:
- `rule`: tên quy tắc kiểm tra.
- `valid`: kết quả kiểm tra.
- `data`: kết quả chi tiết lỗi (geometry, số thứ tự).
- `id`: mã (số thứ tự) geometry gây lỗi.
- `layerId`: mã (số thứ tự) tập geometry gây lỗi, tương ứng với `id`.
- `refId`: mã (số thứ tự) geometry được dùng để so sánh.
- `refLayerId`: mã (số thứ tự) tập geometry được dùng để so sánh, tương ứng với `refId`.

Ví dụ:

```json
{
    "response": {
        "function": "check_topo",
        "dataType": "json", 
        "data": {
            "rule": "area_must_cover_each_other",
            "valid": false,
            "data": { 
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {
                            "id": 3,
                            "layerId": 0,
                            "refId": 0,
                            "refLayerId": -1
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [...]
                        }
                    }
                ]
            }
        }
    },
    "metadata": {
        "service": "VBDGeoProcessingServices",
        "success": true
    }
}
```

#### 6.35.1. Polygon

#### 6.35.1.1. Must Not Overlap

Đảm bảo các đa giác không được chồng lấn trong cùng một lớp đối tượng hoặc loại con.  

**Hợp lệ**: Các đa giác không được chồng lấn trong cùng một lớp đối tượng hoặc loại con. Các đa giác có thể tách rời, tiếp xúc tại một điểm hoặc tiếp xúc dọc theo một cạnh.  

**Lỗi**: Lỗi đa giác xảy ra tại các khu vực nơi các đa giác chồng lấn lên nhau.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-) 

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | pol_not_overlaps    |          | Tên luật topo          |

#### 6.35.1.2. Must Not Have Gaps

Đảm bảo các đa giác không có khoảng trống giữa chúng trong cùng một lớp đối tượng hoặc loại con.  

**Hợp lệ**: Các đa giác không được để lại bất kỳ khoảng trống nào giữa chúng trong cùng một lớp đối tượng hoặc loại con.  

**Lỗi**: Lỗi đường xảy ra tại các đường viền của các khu vực trống trong một đa giác hoặc giữa các đa giác. Các ranh giới đa giác không trùng khớp với ranh giới của các đa giác khác cũng được coi là lỗi.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-) 

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | pol_not_havegaps    |          | Tên luật topo          |

#### 6.35.1.3. Must Be Larger Than Cluster Tolerance

Đảm bảo đa giác phải lớn hơn giá trị dung sai cụm.

**Hợp lệ**: Dung sai cụm (cluster tolerance) là khoảng cách tối thiểu giữa các đỉnh của các đối tượng không gian. Các đỉnh nằm trong phạm vi dung sai cụm sẽ được coi là trùng nhau và sẽ được gắn kết lại với nhau.

**Lỗi**: Đa giác hoặc đoạn thẳng bị suy biến hoặc không hợp lệ khi kiểm tra tính hợp lệ của topology sẽ được coi là lỗi.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | area_must_be_larger_than_cluster_tolerance    |          | Tên luật topo          |

#### 6.35.2. Polygon-Polygon

#### 6.35.2.1. Must Be Covered By Feature Class Of

Đảm bảo các đa giác trong lớp đối tượng đầu tiên được bao phủ bởi các đa giác trong lớp đối tượng thứ hai.

**Hợp lệ**: Các đa giác trong lớp đối tượng đầu tiên phải được bao phủ bởi các đa giác trong lớp đối tượng thứ hai.

**Lỗi**: Lỗi đa giác xảy ra từ các khu vực chưa được bao phủ bởi các đa giác trong lớp đối tượng thứ hai.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | covered_by_feature_class_of    |          | Tên luật topo          |

#### 6.35.2.2. Must Be Covered By

Đảm bảo các đa giác trong lớp đối tượng đầu tiên được bao phủ bởi một đa giác duy nhất từ lớp đối tượng thứ hai.

**Hợp lệ**: Các đa giác trong lớp đối tượng đầu tiên phải được bao phủ bởi một đa giác duy nhất từ lớp đối tượng thứ hai.

**Lỗi**: Lỗi đa giác xảy ra khi các đa giác trong lớp đối tượng đầu tiên không được bao phủ bởi một đa giác duy nhất từ lớp đối tượng thứ hai.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | covered_by    |          | Tên luật topo          |

#### 6.35.2.3. Must Not Overlap With

Đảm bảo các đa giác trong lớp đối tượng đầu tiên không chồng lấn với các đa giác trong lớp đối tượng thứ hai.

**Hợp lệ**: Các đa giác trong lớp đối tượng đầu tiên không được chồng lấn với các đa giác trong lớp đối tượng thứ hai.

**Lỗi**: Lỗi đa giác xảy ra khi các đa giác trong hai lớp đối tượng hoặc loại con chồng lấn lên nhau.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | not_overlaps_with    |          | Tên luật topo          |

#### 6.35.2.4. Boundary Must Be Covered By

Đảm bảo ranh giới của đa giác được bao phủ bởi ranh giới của các đa giác khác.  

**Hợp lệ**: Ranh giới của các đa giác trong một lớp đối tượng hoặc loại con phải được bao phủ bởi ranh giới của các đa giác trong một lớp đối tượng hoặc loại con khác.  

**Lỗi**: Lỗi đường xảy ra khi ranh giới của các đa giác trong lớp đối tượng hoặc loại con đầu tiên không được bao phủ bởi ranh giới của các đa giác trong lớp đối tượng hoặc loại con khác.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | area_boundary_must_be_covered_by    |          | Tên luật topo          |

#### 6.35.2.5. Must Cover Each Other

Đảm bảo ranh giới của đa giác được bao phủ bởi ranh giới của các đa giác khác.  

**Hợp lệ**: Ranh giới của các đa giác trong một lớp đối tượng hoặc loại con phải được bao phủ bởi ranh giới của các đa giác trong một lớp đối tượng hoặc loại con khác.  

**Lỗi**: Lỗi đường xảy ra khi ranh giới của các đa giác trong lớp đối tượng hoặc loại con đầu tiên không được bao phủ bởi ranh giới của các đa giác trong lớp đối tượng hoặc loại con khác.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | area_must_cover_each_other    |          | Tên luật topo          |

#### 6.35.3. Polygon-Line

#### 6.35.3.1. Boundary Must Be Covered By

Đảm bảo ranh giới của các đa giác được bao phủ bởi các đường từ lớp đối tượng khác.  

**Hợp lệ**: Ranh giới của các đa giác trong một lớp đối tượng phải được bao phủ bởi các đường thuộc lớp đối tượng khác.  

**Lỗi**: Lỗi đường xảy ra khi ranh giới của các đa giác không được bao phủ bởi bất kỳ đường nào từ lớp đối tượng khác.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | area_boundary_must_be_covered_by    |          | Tên luật topo          |

#### 6.35.4. Polygon-Point

#### 6.35.4.1. Contains Point

Đảm bảo mỗi đa giác chứa ít nhất một điểm trong phạm vi của nó.

**Hợp lệ**: Mỗi đa giác trong lớp đối tượng hoặc loại con đầu tiên (mảng 1) phải chứa ít nhất một điểm của lớp đối tượng hoặc loại con thứ hai (mảng 2) trong phạm vi của nó.

**Lỗi**: Lỗi xảy ra khi các đa giác không chứa ít nhất một điểm. Một điểm nằm trên ranh giới của đa giác không được coi là nằm trong đa giác đó.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | area_contains_point    |          | Tên luật topo          |

#### 6.35.4.2. Contains One Point

Đảm bảo mỗi đa giác chứa chính xác một điểm và mỗi điểm nằm trong một đa giác duy nhất.  

**Hợp lệ**: Mỗi đa giác phải chứa đúng một điểm, và mỗi điểm phải thuộc phạm vi của một đa giác duy nhất.  

**Lỗi**: Lỗi đa giác xảy ra khi đa giác không chứa chính xác một điểm. Lỗi điểm xảy ra khi một điểm không thuộc bất kỳ đa giác nào hoặc thuộc nhiều hơn một đa giác.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | area_contains_one_point    |          | Tên luật topo          |

#### 6.35.5. Line

#### 6.35.5.1. Must Not Have Dangles

Đảm bảo đoạn thẳng không có các điểm treo (dangles).  

**Hợp lệ**: Đầu của một đoạn thẳng phải chạm vào bất kỳ phần nào của một đoạn thẳng khác hoặc chính nó trong cùng một lớp đối tượng.  

**Lỗi**: Lỗi điểm xảy ra tại các đầu của đoạn thẳng không chạm vào ít nhất một đoạn thẳng khác hoặc chính nó.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_not_dangles    |          | Tên luật topo          |

#### 6.35.5.2. Must Not Overlap

Đảm bảo đoạn thẳng không tự chồng lấn trong cùng một lớp đối tượng.  

**Hợp lệ**: Các đoạn thẳng không được tự chồng lấn trong cùng một lớp đối tượng. Tuy nhiên, chúng có thể tiếp xúc, cắt nhau hoặc chồng lấn với các đoạn thẳng trong lớp đối tượng khác.  

**Lỗi**: Lỗi đường xảy ra tại các đoạn thẳng tự chồng lấn trong cùng một lớp đối tượng.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_not_overlap    |          | Tên luật topo          |

#### 6.35.5.3. Must Not Intersect

Đảm bảo đoạn thẳng không giao nhau trong cùng một lớp đối tượng.  

**Hợp lệ**: Các đoạn thẳng không được cắt nhau hoặc chồng lấn bất kỳ phần nào của đoạn thẳng khác trong cùng một lớp đối tượng.  

**Lỗi**: Lỗi đường xảy ra khi các đoạn thẳng chồng lấn, và lỗi điểm xảy ra khi các đoạn thẳng cắt nhau.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_not_intersect    |          | Tên luật topo          |

#### 6.35.5.4. Must Not Intersect Or Touch Interior

Đảm bảo đoạn thẳng không giao nhau hoặc tiếp xúc với phần bên trong.  

**Hợp lệ**: Các đoạn thẳng chỉ có thể tiếp xúc tại các đầu của chúng và không được chồng lấn với nhau trong cùng một lớp đối tượng. Các đoạn thẳng có thể tiếp xúc, giao nhau hoặc chồng lấn với chính chúng.  

**Lỗi**: Lỗi đường xảy ra khi các đoạn thẳng chồng lấn, và lỗi điểm xảy ra khi các đoạn thẳng giao nhau hoặc tiếp xúc với phần bên trong của nhau.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_not_intersect_or_touch_interior    |          | Tên luật topo          |

#### 6.35.5.5. Must Not Have Pseudo Nodes

Đảm bảo đoạn thẳng không có các pseudo nodes.  

**Hợp lệ**: Đầu của đoạn thẳng không thể tiếp xúc với đầu của chỉ một đoạn thẳng khác trong một lớp đối tượng hoặc loại con. Đầu của một đoạn thẳng có thể tiếp xúc với bất kỳ phần nào của chính nó.  

**Lỗi**: Lỗi điểm xảy ra khi đầu của đoạn thẳng tiếp xúc với đầu của chỉ một đoạn thẳng khác.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_must_not_have_pseudonodes    |          | Tên luật topo          |

#### 6.35.5.6. Must Not Self Overlap

Đảm bảo đoạn thẳng không tự chồng lấn.  

**Hợp lệ**: Các đoạn thẳng không được chồng lấn với chính chúng trong cùng một lớp đối tượng. Các đoạn thẳng có thể tiếp xúc, giao nhau hoặc chồng lấn với các đoạn thẳng trong lớp đối tượng khác.  

**Lỗi**: Lỗi đường xảy ra khi các đoạn thẳng tự chồng lấn với chính chúng.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_not_self_overlap    |          | Tên luật topo          |

#### 6.35.5.7. Must Not Self Intersect

Đảm bảo đoạn thẳng không tự giao nhau.  

**Hợp lệ**: Các đoạn thẳng không được cắt nhau hoặc chồng lấn với chính chúng trong cùng một lớp đối tượng. Các đoạn thẳng có thể tiếp xúc với chính chúng và tiếp xúc, giao nhau, hoặc chồng lấn với các đoạn thẳng khác.  

**Lỗi**: Lỗi đường xảy ra khi các đoạn thẳng tự chồng lấn với chính chúng, và lỗi điểm xảy ra khi các đoạn thẳng tự giao nhau.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_must_not_self_intersect    |          | Tên luật topo          |

#### 6.35.5.8. Must Be Single Part

Đảm bảo đoạn thẳng chỉ chứa một phần duy nhất trong đối tượng không gian.  

**Hợp lệ**: Đoạn thẳng trong một lớp đối tượng hoặc loại con phải chỉ có một phần duy nhất.  

**Lỗi**: Lỗi đa phần đoạn thẳng xảy ra khi đoạn thẳng có hơn một phần.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_must_be_single_part    |          | Tên luật topo          |

#### 6.35.5.9. Must Be Larger Than Cluster Tolerance

Quy tắc tương tự như [Polygon: Must Be Larger Than Cluster tolerance](#63513-must-be-larger-than-cluster-tolerance)

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_must_be_larger_than_cluster_tolerance    |          | Tên luật topo   |

#### 6.35.6. Line-Polygon

#### 6.35.6.1. Must Be Covered By Boundary Of

Đảm bảo đoạn thẳng được bao phủ bởi ranh giới của các đa giác.  

**Hợp lệ**: Các đoạn thẳng trong một lớp đối tượng phải được bao phủ bởi ranh giới của các đa giác trong lớp đối tượng khác.  

**Lỗi**: Lỗi đường xảy ra khi các đoạn thẳng không được bao phủ bởi ranh giới của các đa giác.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_must_be_covered_by_boundary_of    |          | Tên luật topo   |

#### 6.35.6.2. Must Be Inside

Đảm bảo đoạn thẳng nằm hoàn toàn bên trong các đa giác.  

**Hợp lệ**: Các đoạn thẳng trong một lớp đối tượng phải được bao chứa hoàn toàn bởi các đa giác trong lớp đối tượng khác.  

**Lỗi**: Lỗi đường xảy ra khi các đoạn thẳng không nằm hoàn toàn bên trong các đa giác.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_must_be_inside    |          | Tên luật topo |

#### 6.35.7. Line-Line

#### 6.35.7.1. Must Not Overlap With

Đảm bảo đoạn thẳng không chồng lấn với đoạn thẳng trong lớp đối tượng khác.  

**Hợp lệ**: Các đoạn thẳng trong một lớp đối tượng không được chồng lấn với bất kỳ phần nào của đoạn thẳng trong lớp đối tượng khác.  

**Lỗi**: Lỗi đường xảy ra khi các đoạn thẳng từ hai lớp đối tượng chồng lấn lên nhau.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_must_not_overlap_with    |          | Tên luật topo |

#### 6.35.7.2. Must Be Covered By Feature Class Of

Đảm bảo đoạn thẳng được bao phủ bởi các đoạn thẳng trong lớp đối tượng khác.  

**Hợp lệ**: Các đoạn thẳng trong một lớp đối tượng phải được bao phủ bởi các đoạn thẳng trong lớp đối tượng khác.  

**Lỗi**: Lỗi đường xảy ra khi các đoạn thẳng trong lớp đối tượng đầu tiên không được bao phủ bởi các đoạn thẳng trong lớp đối tượng thứ hai.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_must_be_covered_by_feature_class_of    |          | Tên luật topo |

#### 6.35.7.3. Must Not Intersect With

Đảm bảo đoạn thẳng không giao nhau hoặc chồng lấn với đoạn thẳng trong lớp đối tượng khác.  

**Hợp lệ**: Các đoạn thẳng trong một lớp đối tượng không được cắt nhau hoặc chồng lấn với bất kỳ phần nào của đoạn thẳng trong lớp đối tượng khác.  

**Lỗi**: Lỗi đường xảy ra khi các đoạn thẳng chồng lấn, và lỗi điểm xảy ra khi các đoạn thẳng cắt nhau giữa hai lớp đối tượng.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_must_not_intersect_with    |          | Tên luật topo |

#### 6.35.7.4. Must Not Intersect Or Touch Interior With

Đảm bảo đoạn thẳng không giao nhau hoặc tiếp xúc với phần bên trong của đoạn thẳng trong lớp đối tượng khác.  

**Hợp lệ**: Các đoạn thẳng trong một lớp đối tượng chỉ có thể tiếp xúc tại các đầu của chúng và không được chồng lấn với các đoạn thẳng trong lớp đối tượng khác.  

**Lỗi**: Lỗi đường xảy ra khi các đoạn thẳng chồng lấn, và lỗi điểm xảy ra khi các đoạn thẳng giao nhau hoặc tiếp xúc với phần bên trong của đoạn thẳng trong lớp đối tượng khác.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_must_not_intersect_or_touch_interior_with    |          | Tên luật topo |

#### 6.35.8. Line-Point

#### 6.35.8.1. End Point Must Be Covered By

Đảm bảo điểm đầu của đoạn thẳng được bao phủ bởi các điểm trong lớp đối tượng khác.  

**Hợp lệ**: Điểm đầu của các đoạn thẳng trong một lớp đối tượng phải được bao phủ bởi các điểm trong lớp đối tượng khác.  

**Lỗi**: Lỗi điểm xảy ra tại các điểm đầu của đoạn thẳng không được bao phủ bởi bất kỳ điểm nào.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | line_end_point_must_be_covered_by    |          | Tên luật topo |

#### 6.35.9. Point

#### 6.35.9.1. Must Be Disjoint

Đảm bảo các điểm không trùng lặp trong cùng một lớp đối tượng.  

**Hợp lệ**: Các điểm trong cùng một lớp đối tượng không được trùng lặp hoặc chồng lấn.  

**Lỗi**: Lỗi điểm xảy ra tại các vị trí mà các điểm bị trùng lặp.

**Request form**

- Kiểu body: [Mẫu Body Số 3 🦄](#423-mẫu-body-số-3-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | point_disjoint    |          | Tên luật topo |

#### 6.35.10. Point-Polygon

#### 6.35.10.1. Must Be Properly Inside Polygons

Đảm bảo các điểm nằm hoàn toàn bên trong các đa giác.  

**Hợp lệ**: Các điểm trong một lớp đối tượng phải nằm bên trong các đa giác của lớp đối tượng khác.  

**Lỗi**: Lỗi điểm xảy ra khi các điểm nằm bên ngoài hoặc tiếp xúc với ranh giới của các đa giác.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | point_must_be_properly_inside_polygons    |          | Tên luật topo |

#### 6.35.10.2. Must Be Covered By Boundary Of

Đảm bảo các điểm nằm trên ranh giới của các đa giác.  

**Hợp lệ**: Các điểm trong một lớp đối tượng phải tiếp xúc với ranh giới của các đa giác trong lớp đối tượng khác.  

**Lỗi**: Lỗi điểm xảy ra khi các điểm không tiếp xúc với ranh giới của bất kỳ đa giác nào.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | point_must_be_covered_by_boundary_of    |          | Tên luật topo |

#### 6.35.11. Point-Line

#### 6.35.11.1. Must Be Covered By End Point Of

Đảm bảo các điểm được bao phủ bởi điểm đầu hoặc điểm cuối của các đoạn thẳng.  

**Hợp lệ**: Các điểm trong một lớp đối tượng phải được bao phủ bởi điểm đầu hoặc điểm cuối của các đoạn thẳng trong lớp đối tượng khác.  

**Lỗi**: Lỗi điểm xảy ra khi các điểm không được bao phủ bởi điểm đầu hoặc điểm cuối của bất kỳ đoạn thẳng nào.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | point_must_be_covered_by_endpoint_of    |          | Tên luật topo |

#### 6.35.11.2. Must Be Covered By Line

Đảm bảo các điểm được bao phủ bởi các đoạn thẳng.  

**Hợp lệ**: Các điểm trong một lớp đối tượng phải được bao phủ bởi các đoạn thẳng trong lớp đối tượng khác.  

**Lỗi**: Lỗi điểm xảy ra khi các điểm không được bao phủ bởi bất kỳ đoạn thẳng nào.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | point_must_be_covered_by_line    |          | Tên luật topo |

#### 6.35.12. Point-Point

#### 6.35.12.1. Must Be Coincident With

Đảm bảo các điểm trùng khớp giữa hai lớp đối tượng.  

**Hợp lệ**: Các điểm trong một lớp đối tượng phải trùng khớp với các điểm trong lớp đối tượng khác.  

**Lỗi**: Lỗi điểm xảy ra khi các điểm từ lớp đối tượng đầu tiên không được trùng khớp bởi các điểm từ lớp đối tượng thứ hai.

**Request form**

- Kiểu body: [Mẫu Body Số 4 🐲](#424-mẫu-body-số-4-)  

Bảng danh sách tham số bổ sung
| Tham số       | Kiểu dữ liệu | Giá trị        | Mặc định | Mô tả            |
|---------------|--------------|----------------|----------|------------------|
| rule*     | String       | point_must_be_coincident_with    |          | Tên luật topo |

## 7. Danh Sách Các Bảng Tham Chiếu

### 7.1. Danh Sách Hằng Số

| Tên variable | Giá trị                  |
|--------------|--------------------------|
| $DBL_EPSILON | 2.2204460492503131e-016 |

### 7.2. Group Code Và System Code

|GroupCode  |  SystemCode  |  Description  |
|-----|-----|-----|
|PRE  |  BONNE  |  Bonne - WGE  |
|PRE  |  MERC  |  Mercator  - WGE  |
|USER_DEF  |  BONNE1  |  Bonne - WGE  |
|USER_DEF  |  BONNE2  |  Bonne - ADINDAN  |
|USER_DEF  |  MERCATOR  |  Transverse Mecator - WGE  |
|VN2000  |  VN2000_HNoi_3_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_QTri_3_106.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_HCM_3_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_LChau_3_103  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_SLa_3_104  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_KGiang_3_104.50  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_CMau_3_104.50  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_LCai_3_104.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_YBai_3_104.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_NAn_3_104.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_PTho_3_104.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_AGiang_3_104.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_THoa_3_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_VPhuc_3_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_DThap_3_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_CTho_3_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_BLieu_3_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_NBinh_3_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_HNam_3_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_HDuong_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_HGiang_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_HTinh_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_BNinh_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_HYen_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_TBinh_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_NDinh_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_TNinh_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_VLong_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_STrang_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_TVinh_3_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_CBang_3_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_LAn_3_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_TGiang_3_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_BTre_3_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_HPhong_3_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_BDuong_3_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_TQuang_3_106  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_HBinh_3_106  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_QBinh_3_106  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_BPhuoc_3_106.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_BKan_3_106.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_TNguyen_3_106.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_BGiang_3_107  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_TTHue_3_107  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_LSon_3_107.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_KTum_3_107.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_QNinh_3_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_DNai_3_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_BRVT_3_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_QNam_3_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_LDong_3_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_DNang_3_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_QNgai_3_108  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_NThuan_3_108.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_KHoa_3_108.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_BDinh_3_108.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_DLak_3_108.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_PYen_3_108.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_GLai_3_108.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_BThuan_3_108.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_DBIEN_3_103  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_HauGiang_3_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000  |  VN2000_DNong_3_108.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_HNoi_6_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_HCM_6_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_QTri_6_106.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_LChau_6_103  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_SLa_6_104  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_KGiang_6_104.50  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_CMau_6_104.50  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_LCai_6_104.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_YBai_6_104.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_NAn_6_104.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_PTho_6_104.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_AGiang_6_104.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_THoa_6_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_VPhuc_6_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_DThap_6_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_CTho_6_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_BLieu_6_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_NBinh_6_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_HNam_6_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_HDuong_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_HGiang_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_HTinh_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_BNinh_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_HYen_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_TBinh_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_NDinh_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_TNinh_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_VLong_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_STrang_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_TVinh_6_105.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_CBang_6_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_LAn_6_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_TGiang_6_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_BTre_6_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_HPhong_6_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_BDuong_6_105.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_TQuang_6_106  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_HBinh_6_106  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_QBinh_6_106  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_BPhuoc_6_106.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_BKan_6_106.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_TNguyen_6_106.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_BGiang_6_107  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_TTHue_6_107  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_LSon_6_107.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_QNinh_6_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_DNai_6_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_BRVT_6_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_QNam_6_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_LDong_6_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_DNang_6_107.75  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_QNgai_6_108  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_NThuan_6_108.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_BDinh_6_108.25  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_DLak_6_108.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_PYen_6_108.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_GLai_6_108.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_BThuan_6_108.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_DBIEN_6_103  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_HauGiang_6_105  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_6  |  VN2000_DNong_6_108.5  |  Hệ quy chiếu VN2000 - Việt Nam  |
|VN2000_Conic  |  VN2000_QG_108  |  Hệ quy chiếu VN2000 - Việt Nam  |

### 7.3. Bảng Group Code Và System Code Tọa Độ Cầu
|GroupCode  |  SystemCode  |  Name  |
|----|----|----|
|AA  |     |  Airy 1830                      |
|AM  |     |  Modified Airy                  |
|AN  |     |  Australian National            |
|BN  |     |  Bessel 1841(Namibia)           |
|BR  |     |  Bessel 1841                    |
|CC  |     |  Clarke 1866                    |
|CD  |     |  Clarke 1880                    |
|EA  |     |  Everest (India 1830)           |
|EB  |     |  Everest (E. Malasia, Brunei)   |
|EC  |     |  Everest 1956 (India)           |
|ED  |     |  Everest 1969 (West Malasia)    |
|EE  |     |  Everest 1948(W.Mals. & Sing.)  |
|EF  |     |  Everest (Pakistan)             |
|FA  |     |  Mod. Fischer 1960(South Asia)  |
|HE  |     |  Helmert 1906                   |
|HO  |     |  Hough 1960                     |
|ID  |     |  Indonesian 1974                |
|IN  |     |  International 1924             |
|KA  |     |  Krassovsky 1940                |
|RF  |     |  GRS 80                         |
|SA  |     |  South American 1969            |
|WD  |     |  World Geodetic System 1972  |
|WE  |     |  World Geodetic System 1984  |


# Vietbando Conversion Services

<div style={{ textAlign: 'right' }}>
  <span>Newest version: 1.1.6</span>
</div>

## 1. Giới Thiệu

**Vietbando Conversion Services** cung cấp giải pháp tối ưu cho việc chuyển đổi các định dạng geometry. Với khả năng xử lý mạnh mẽ, dễ dàng tích hợp và sử dụng, hỗ trợ đa dạng các định dạng, tích hợp lưu trữ vào database, và hơn thế nữa.

Điểm nổi bật là hiệu năng cao nhưng vẫn tiết kiệm tài nguyên hệ thống, đảm bảo hoạt động mượt mà ngay cả trên các cấu hình máy hạn chế.   

Trong tài liệu này, chúng tôi cung cấp hướng dẫn cài đặt, tùy chỉnh dịch vụ, cách tạo các request và định dạng phản hồi.   

## 2. Cài Đặt Dịch Vụ

Hiện tại, **Vietbando Conversion Services** chỉ hoạt động trên **Windows**. Cấu hình tối thiểu yêu cầu:
- OS: Windows 8.0/Windows Server 2008
- Ram: 2GB
- CPU: Intel Core i3 7xxx
- Memory available: 200Mb

### 2.1. Mở Port

Dịch vụ **Vietbando Conversion Services** mặc định sử dụng port 8909. Hãy mở port này trên tường lửa (firewall).

### 2.2. Thao Tác Cài Đặt

Thật đơn giản
- Mở file cài đặt.
- Chọn **Next** -> **Next** -> **Next** (*bao nhiêu "Next" là bấy nhiêu lần ấn*).
- Đợi quá trình cài đặt kết thúc, chọn **Close**.

Dịch vụ bây giờ đã sẵn sàng để sử dụng. 🚀🚀🚀

## 3. Tùy Chỉnh Dịch Vụ

### 3.1. Dừng Dịch Vụ
- Mở **services.msc**.
- Tìm dịch vụ **Vietbando Conversion Services**, nhấn **Stop**.

### 3.2. Khởi động lại
Quay lại **services.msc**, nhấn **Start** để khởi động lại dịch vụ.

### 3.4. Tùy Chỉnh Bằng "Terminal" 🤖
- Mở **Terminal** ở quyền administrator, điều hướng tới thư mục cài đặt của service.
- Chạy câu lệnh `vbdcv` để xem helper, hoặc chạy các lệnh phù hợp. 

```cmd
~/Vietbando Conversion Services>vbdcv
Usage: vbdcv <command>

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

## 4. Danh Sách Hàm

### 4.1. Convert

**Request form**

- <span style={{ color: 'orange' }}>POST: $host/convert</span> 
- Request body: Dữ liệu binary của file.

Query params (\*: tham số bắt buộc)

| **Tham số**   | **Kiểu dữ liệu** |  **Giá trị** |**Giá trị mặc định** | **Mô tả**                                                                    |
|---------------|------------------|----------|-------------|------------------------------------------------------------------------------|
| dst*          | String           |           |           | Tên định dạng đích. Gọi [helper](#42-helper) để xem danh sách được hỗ trợ.  |
| ext*          | String           |           |            | Tên phần mở rộng của file nguồn.                                             |
| filename      | String           |       |  result                | Tên file nguồn (sử dụng trong trường hợp cần trả về tên đầy đủ trong response header) |

**Respone form**
- Code: Nếu thành công thì trả về mã *200* (OK)
- Headers:
    - Content-Type:
        - `application/json`: Trong trường hợp request gặp lỗi, service sẽ trả về message lỗi sẽ nằm trong respone body.
        - `application/zip`: Nếu kết quả convert là nhiều file, server sẽ nén lại và trả về file zip.
    - Content-Length: kích thước file nếu convert thành công.
    - Content-Disposition: chứa tên file kết quả (ví dụ: `attachment; filename="data_result.zip"`).
- Body trong trường hợp lỗi

```json
{
    "metadata": {
        "service": "VBDConversionServices",
        "success": false,
        "msg": "" // chi tiết lỗi
    }
}
```

#### 4.1.1. Excel

Excel yêu cầu chỉ định cột chứa dữ liệu geometry và định dạng của chúng, với các tham số sau:

| **Tham số**       | **Kiểu dữ liệu** | **Giá trị**       | **Giá trị mặc định** | **Mô tả**  |
|--------------------|------------------|-------------------|-----------------------|------------------------|
| geo_field_name     | String           |                   |                       | Tên cột chứa geometry|
| geo_type           | String           | WKT\|GeoJSON      |                       | Định dạng geometry|

#### 4.1.2. GDB

GDB sử dụng thư mục để lưu trữ, nên cần nén thành **Zip file** trước khi gửi.  

Khi chuyển đổi sang GDB:  
- Các lớp được tách riêng và chia theo loại geometry, với tên: "TênLớp_LoạiGeometry".  
- Geometry collection được tách ra và lưu thành các geometry đơn lẻ.

#### 4.1.3. GeoJSON

Mỗi file GeoJSON chỉ chứa một lớp dữ liệu. Do đó, nếu nguồn có nhiều lớp, chúng tôi sẽ tách mỗi lớp thành một file và đặt tên theo tên lớp.

Nếu một lớp có nhiều loại geometry (Polygon, Point, Line, v.v.), lớp sẽ được tách theo từng loại, với tên file dạng: "TênLớp_LoạiGeometry.json".

#### 4.1.4. DGN/DGNv8

DGN không hỗ trợ tên lớp mà sử dụng "level". Khi chuyển đổi sang DGN, thứ tự level sẽ được sắp xếp theo thứ tự đọc các lớp nguồn.

#### 4.1.5. ESRI Shapefile

Shapefile chỉ hỗ trợ một loại geometry trong mỗi lớp. Do đó, khi chuyển đổi, các lớp sẽ được tách riêng và tiếp tục chia theo loại geometry, dạng: "TênLớp_LoạiGeometry".

#### 4.1.6. Convert To DBMS

Service hỗ trợ chuyển đổi và lưu dữ liệu của file vào các hệ cơ sở dữ liệu (DBMS) một cách trực tiếp và nhanh chóng.

#### 4.1.6.1. ClickHouse

**Respone form**

Tương tự như convert file, chỉ thêm các tham số sau:

| **Tham số**       | **Kiểu dữ liệu**      | **Giá trị**       | **Giá trị mặc định**  | **Mô tả**     |
|--------------------|------------------|-------------------|-----------------------|------------------------|
| name*     | String           |       clickhouse            |                       | Tên DBMS|
| ext*           | String           |       |                       | Tên phần mở rộng của file nguồn.|
| cnn* | String |    |     | Connection string: `host={{clickhouse_host}};port={{clickhouse_port}};user={{clickhouse_user}};pass={{clickhouse_pass}};database={{clickhouse_db}};table={{clickhouse_table}}` |
| source_id | Integer  |   |  1234  |  Định danh nhằm xác định rằng dữ liệu là được thêm bởi ConversionService      |
| block_size | Integer  |   |  10000 | Block size cho insert    |
| srs* |   String  |     |     | Chỉ định SRS cho file nguồn      |

**Respone form**

Service sẽ trả về một báo cáo kết quả dưới dạng JSON

```json
{
    "report": {
        "layers_no_srs": [...], // danh sách lớp gặp lỗi SRS
        "success_inserted": ... // Tổng record đã insert thành công
    },
    "metadata": {
        "service": "VBDConversionServices",
        "success": true
    }
}

```

### 4.2. Helper

**Request form**

- <span style={{ color: 'green' }}>GET: $host/help</span> 

**Respone form**

Danh sách các định đạng được hỗ trợ (`response`->`supportedFormats`). Ví dụ:

```json
{
    "response": {
        "supportedFormats": [
            "DGN",
            "ESRIJSON",
            "ERS",
            "FileGDB",
            "KML",
            "GeoJSON",
            ...
        ]
    },
    "metadata": {
        "service": "VBDConversionServices",
        "success": true,
    }
}
```

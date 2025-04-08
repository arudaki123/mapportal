---
sidebar_position: 2
---

# Tổng quan API

API OCR cung cấp các endpoint để xử lý hình ảnh tài liệu và trích xuất thông tin văn bản. Phần này bao gồm các endpoint có sẵn và cách sử dụng chúng.

## Base URL

```
http://10.222.2.97:7861
```

## Các Endpoint

### Xử lý OCR

```http
POST /ocr
```

Xử lý hình ảnh mặt trước và mặt sau của tài liệu để trích xuất văn bản và thông tin có cấu trúc.

#### Request Body

```json
{
    "anh_mat_ngoai": "base64_encoded",
    "anh_mat_trong": "base64_encoded"
}
```

#### Response

API OCR sử dụng function calling để trích xuất thông tin có cấu trúc từ văn bản OCR. Function sau đây có sẵn như một công cụ cho LLM:

```python
def extract_ocr_info(names: List[str], name_ids: List[str], gcn_id: str, soThuaDat: int, stt: int):
    """Trích xuất thông tin từ Giấy chứng nhận quyền sử dụng đất

    Args:
        names: tên của cá nhân (có thể là 1 hoặc 2 cá nhân) hoặc công ty / tổ chức / doanh nghiệp.
        name_ids: số CCCD hoặc CMND của cá nhân.
        gcn_id: Số vào sổ cấp GCN (giấy chứng nhận).
        soThuaDat: số thửa đất.
        stt: số tờ bản đồ.
    Returns:
        định dạng json
    """
    # code below
    ...
```

```json
// Success OCR
{
    "ocr_text": "Văn bản thô được trích xuất từ hình ảnh...",
    "extracted_info": {
        // ...,
        "tool_calls":[{
            "type": "function",
            "function": {
                "name": "extract_ocr_info",
                "arguments": {
                    "names": ["John Doe"],
                    "name_ids": ["123456789"],
                    "gcn_id": "ABC123",
                    "soThuaDat": 123,
                    "stt": 456
                }
            }
        }],
    }
}
```

Nếu không tìm thấy tool_calls trong Response, OCR thất bại:
```json
{
    "ocr_text": "Văn bản thô được trích xuất từ hình ảnh...",
    "extracted_info": {
        // ...,
        // tool_calls không tồn tại trong response
    }
}
```


### Health Check

```http
GET /health
```

Kiểm tra xem API có đang hoạt động bình thường không.

#### Response

```json
{
    "status": "healthy"
}
```

### Root Endpoint

```http
GET /
```

Lấy thông tin cơ bản về API.

#### Response

```json
{
    "name": "OCR API",
    "version": "1.0.0",
    "description": "Vietnamese text recognition API using Qwen2.5-VL model"
}
```

### Documentation Endpoint

```http
GET /docs
```

## Error Responses

API sử dụng mã trạng thái HTTP tiêu chuẩn:

- `200`: Success
- `422`: Validation Error
- `500`: Server Error

### Ví dụ Phản hồi Lỗi

#### Validation Error (422)

```json
{
    "detail": [
        {
            "loc": ["body", "anh_mat_ngoai"],
            "msg": "field required",
            "type": "value_error.missing"
        }
    ]
}
```

#### Processing Error (500)

```json
{
    "detail": "Error processing OCR: <error message>"
}
```
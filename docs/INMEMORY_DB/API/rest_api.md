---
description: REST API tutorial.
---

# REST API

## Câu lệnh

```bash
curl --location 'localhost:8080/vbd.blaz.Blaz/Query' \
--header 'Content-Type: application/json' \
--data '{
    "sql_string": "SHOW TABLES"
}'
```

:::info

Truy cập vào trang [Query Guide](../guide) để tìm hiểu thêm về cú pháp của SQL.

:::

## Kết quả trả về

- Nếu có record:

```json
{
  "dataSet": {
    "columns": [
      {
        "name": "Table name",
        "type": {
          "value": "STRING"
        },
        "values": [
          {
            "stringVal": "test_table"
          },
          {
            "stringVal": "test_table_2"
          }
        ]
      }
    ]
  }
}
```

- Nếu không có record nào:

```json
{}
```

- Nếu có lỗi xảy ra:

```json
{
    "exception": {
        "code": "INVALID_ARGUMENT",
        "msg": "Did not find a table or view with name test_tablea"
    }
}
```

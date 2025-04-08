import React from "react";
import { TinaAdmin } from "tinacms";

export default function AdminPage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar tùy chỉnh */}
      <div style={{ width: "250px", background: "#333", color: "white", padding: "20px" }}>
        <h2>Quản lý nội dung</h2>
        <ul>
          <li><a href="/admin/collections/docs" style={{ color: "#f39c12" }}>📄 Tài liệu</a></li>
          <li><a href="/admin/collections/blog" style={{ color: "#f39c12" }}>✍ Bài viết</a></li>
        </ul>
      </div>

      {/* Khu vực chính của TinaCMS */}
      <div style={{ flexGrow: 1 }}>
        <TinaAdmin />
      </div>
    </div>
  );
}
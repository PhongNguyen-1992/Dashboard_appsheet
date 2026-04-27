import PageShell from "../components/PageShell";
import { useState } from "react";

const CASES = [
  { id: "RC001", patient: "Nguyễn Văn An", dept: "Nội tổng", status: "Đang theo dõi", date: "27/04/2026", priority: "cao" },
  { id: "RC002", patient: "Trần Thị Bình", dept: "Ngoại tiêu hóa", status: "Hoàn thành", date: "26/04/2026", priority: "thấp" },
  { id: "RC003", patient: "Lê Minh Cường", dept: "Tim mạch", status: "Chờ tiếp nhận", date: "27/04/2026", priority: "cao" },
  { id: "RC004", patient: "Phạm Thị Dung", dept: "Thần kinh", status: "Đang theo dõi", date: "25/04/2026", priority: "trung bình" },
];

const PRIORITY_COLORS: Record<string, string> = {
  "cao": "#dc2626",
  "trung bình": "#f97316",
  "thấp": "#059669",
};

const STATUS_COLORS: Record<string, string> = {
  "Đang theo dõi": "#0891b2",
  "Hoàn thành": "#059669",
  "Chờ tiếp nhận": "#f97316",
};

export default function RecarePage() {
  const [search, setSearch] = useState("");
  const filtered = CASES.filter(c =>
    c.patient.toLowerCase().includes(search.toLowerCase()) ||
    c.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageShell
      title="Recare"
      description="Quản lý theo dõi bệnh nhân sau điều trị"
      accentColor="#0891b2"
      icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
    >
      <div style={{ marginBottom: 16 }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Tìm bệnh nhân hoặc khoa phòng..."
          style={{
            width: "100%", maxWidth: 360, padding: "10px 14px", border: "0.5px solid #e4e2dc",
            borderRadius: 10, fontSize: 13, fontFamily: "inherit", background: "#fff",
            outline: "none", boxSizing: "border-box",
          }}
        />
      </div>

      <div style={{ background: "#fff", border: "0.5px solid #e4e2dc", borderRadius: 14, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#fafaf8" }}>
              {["Mã ca", "Bệnh nhân", "Khoa", "Ưu tiên", "Trạng thái", "Ngày"].map(h => (
                <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600, color: "#888", fontSize: 12 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr key={i} style={{ borderTop: "0.5px solid #f0eee8" }}>
                <td style={{ padding: "12px 16px", fontWeight: 600, color: "#0891b2", fontFamily: "monospace" }}>{c.id}</td>
                <td style={{ padding: "12px 16px", fontWeight: 500, color: "#1a1a2e" }}>{c.patient}</td>
                <td style={{ padding: "12px 16px", color: "#666" }}>{c.dept}</td>
                <td style={{ padding: "12px 16px" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: PRIORITY_COLORS[c.priority], background: `${PRIORITY_COLORS[c.priority]}15`, padding: "3px 9px", borderRadius: 10 }}>
                    {c.priority}
                  </span>
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: STATUS_COLORS[c.status], background: `${STATUS_COLORS[c.status]}15`, padding: "3px 9px", borderRadius: 10 }}>
                    {c.status}
                  </span>
                </td>
                <td style={{ padding: "12px 16px", color: "#aaa", fontSize: 12 }}>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div style={{ padding: 32, textAlign: "center", color: "#aaa", fontSize: 13 }}>Không tìm thấy kết quả</div>
        )}
      </div>
    </PageShell>
  );
}
import PageShell from "../components/PageShell";

const stats = [
  { label: "Yêu cầu hôm nay", value: "12", delta: "+3", color: "#f97316" },
  { label: "Đang chờ duyệt", value: "5", delta: "mới", color: "#7c3aed" },
  { label: "Đã xác minh", value: "38", delta: "+7", color: "#059669" },
  { label: "Thiết bị tồn kho", value: "124", delta: "-2", color: "#0891b2" },
];

const recent = [
  { name: "Nguyễn Văn A", type: "Cấp đồ", status: "Chờ duyệt", time: "10 phút trước" },
  { name: "Trần Thị B", type: "Xác minh", status: "Đã duyệt", time: "32 phút trước" },
  { name: "Lê Văn C", type: "Recare", status: "Đang xử lý", time: "1 giờ trước" },
  { name: "Phạm Thị D", type: "Cấp đồ", status: "Đã duyệt", time: "2 giờ trước" },
];

const STATUS_COLORS: Record<string, string> = {
  "Chờ duyệt": "#f97316",
  "Đã duyệt": "#059669",
  "Đang xử lý": "#0891b2",
};

export default function DashboardPage() {
  return (
    <PageShell
      title="Dashboard"
      description="Tổng quan hoạt động hệ thống"
      icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>}
    >
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 24 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: "#fff", border: "0.5px solid #e4e2dc", borderRadius: 12, padding: "16px 18px" }}>
            <p style={{ fontSize: 12, color: "#888", margin: "0 0 8px", fontWeight: 500 }}>{s.label}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 26, fontWeight: 700, color: "#1a1a2e" }}>{s.value}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: s.color, background: `${s.color}15`, padding: "2px 7px", borderRadius: 10 }}>{s.delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div style={{ background: "#fff", border: "0.5px solid #e4e2dc", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ padding: "14px 18px", borderBottom: "0.5px solid #e4e2dc", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e" }}>Hoạt động gần đây</span>
          <span style={{ fontSize: 12, color: "#f97316", cursor: "pointer", fontWeight: 500 }}>Xem tất cả →</span>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#fafaf8" }}>
              {["Nhân viên", "Loại", "Trạng thái", "Thời gian"].map(h => (
                <th key={h} style={{ padding: "10px 18px", textAlign: "left", fontWeight: 600, color: "#888", fontSize: 12 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recent.map((r, i) => (
              <tr key={i} style={{ borderTop: "0.5px solid #f0eee8" }}>
                <td style={{ padding: "12px 18px", fontWeight: 500, color: "#1a1a2e" }}>{r.name}</td>
                <td style={{ padding: "12px 18px", color: "#555" }}>{r.type}</td>
                <td style={{ padding: "12px 18px" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: STATUS_COLORS[r.status], background: `${STATUS_COLORS[r.status]}15`, padding: "3px 10px", borderRadius: 10 }}>
                    {r.status}
                  </span>
                </td>
                <td style={{ padding: "12px 18px", color: "#aaa", fontSize: 12 }}>{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
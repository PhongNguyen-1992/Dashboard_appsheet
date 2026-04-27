import PageShell from "../components/PageShell";
import { useState } from "react";

const REQUESTS = [
  { id: "XM001", requester: "Trần Văn Hùng", type: "Xác minh hồ sơ", dept: "Nhân sự", created: "27/04/2026 08:30", status: "Chờ duyệt" },
  { id: "XM002", requester: "Nguyễn Thị Lan", type: "Xác minh thiết bị", dept: "IT", created: "26/04/2026 14:15", status: "Đã duyệt" },
  { id: "XM003", requester: "Lê Quang Minh", type: "Xác minh hợp đồng", dept: "Pháp lý", created: "25/04/2026 09:00", status: "Từ chối" },
];

const STATUS_STYLE: Record<string, { color: string; bg: string }> = {
  "Chờ duyệt": { color: "#f97316", bg: "#fff7ed" },
  "Đã duyệt": { color: "#059669", bg: "#f0fdf4" },
  "Từ chối": { color: "#dc2626", bg: "#fef2f2" },
};

export default function XacMinhPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [statuses, setStatuses] = useState<Record<string, string>>(
    Object.fromEntries(REQUESTS.map(r => [r.id, r.status]))
  );

  const approve = (id: string) => setStatuses(s => ({ ...s, [id]: "Đã duyệt" }));
  const reject = (id: string) => setStatuses(s => ({ ...s, [id]: "Từ chối" }));

  return (
    <PageShell
      title="Xác minh"
      description="Duyệt và xác nhận các yêu cầu nghiệp vụ"
      accentColor="#7c3aed"
      icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16 }}>
        {/* List */}
        <div style={{ background: "#fff", border: "0.5px solid #e4e2dc", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: "0.5px solid #e4e2dc" }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e" }}>Danh sách yêu cầu</span>
          </div>
          {REQUESTS.map(r => {
            const st = statuses[r.id];
            const sStyle = STATUS_STYLE[st] || STATUS_STYLE["Chờ duyệt"];
            return (
              <div
                key={r.id}
                onClick={() => setSelected(r.id === selected ? null : r.id)}
                style={{
                  padding: "14px 18px", borderBottom: "0.5px solid #f0eee8",
                  cursor: "pointer", background: selected === r.id ? "#fafaf8" : "#fff",
                  transition: "background 0.12s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, color: "#7c3aed", fontFamily: "monospace", fontSize: 12 }}>{r.id}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: sStyle.color, background: sStyle.bg, padding: "2px 9px", borderRadius: 10 }}>{st}</span>
                </div>
                <p style={{ margin: "0 0 2px", fontWeight: 500, color: "#1a1a2e", fontSize: 13 }}>{r.type}</p>
                <p style={{ margin: 0, fontSize: 12, color: "#888" }}>{r.requester} · {r.dept}</p>
              </div>
            );
          })}
        </div>

        {/* Detail */}
        <div style={{ background: "#fff", border: "0.5px solid #e4e2dc", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: "0.5px solid #e4e2dc" }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e" }}>Chi tiết</span>
          </div>
          {selected ? (() => {
            const r = REQUESTS.find(x => x.id === selected)!;
            const st = statuses[r.id];
            const isPending = st === "Chờ duyệt";
            return (
              <div style={{ padding: 18 }}>
                <div style={{ marginBottom: 14 }}>
                  {[["Mã yêu cầu", r.id], ["Người yêu cầu", r.requester], ["Loại", r.type], ["Phòng ban", r.dept], ["Thời gian", r.created]].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "0.5px solid #f0eee8", fontSize: 13 }}>
                      <span style={{ color: "#888" }}>{k}</span>
                      <span style={{ fontWeight: 500, color: "#1a1a2e" }}>{v}</span>
                    </div>
                  ))}
                </div>
                {isPending && (
                  <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                    <button onClick={() => approve(r.id)} style={{ flex: 1, padding: "10px", background: "#059669", color: "#fff", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                      ✓ Duyệt
                    </button>
                    <button onClick={() => reject(r.id)} style={{ flex: 1, padding: "10px", background: "#fef2f2", color: "#dc2626", border: "0.5px solid #fecaca", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                      ✕ Từ chối
                    </button>
                  </div>
                )}
                {!isPending && (
                  <div style={{ marginTop: 16, padding: "10px 14px", background: STATUS_STYLE[st].bg, borderRadius: 9, textAlign: "center", fontSize: 13, fontWeight: 600, color: STATUS_STYLE[st].color }}>
                    Đã {st.toLowerCase()}
                  </div>
                )}
              </div>
            );
          })() : (
            <div style={{ padding: 40, textAlign: "center", color: "#bbb", fontSize: 13 }}>
              Chọn một yêu cầu để xem chi tiết
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
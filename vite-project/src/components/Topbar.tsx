import type { User } from "../App";

interface Props {
  label: string;
  user: User;
  onLogout: () => void;
}

export default function Topbar({ label, user, onLogout }: Props) {
  return (
    <div style={{
      height: 50, background: "#fff", borderBottom: "0.5px solid #e4e2dc",
      display: "flex", alignItems: "center", padding: "0 20px", gap: 8, flexShrink: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
        <span style={{ color: "#aaa" }}>Nghiệp vụ</span>
        <span style={{ color: "#ccc" }}>›</span>
        <span style={{ fontWeight: 600, color: "#1a1a2e" }}>{label}</span>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 13, color: "#666", fontWeight: 500 }}>
          Xin chào, <strong>{user.username}</strong>
        </div>
        <div style={{ width: 1, height: 18, background: "#e4e2dc" }} />
        <button onClick={onLogout} style={{
          display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#888",
          background: "none", border: "none", cursor: "pointer", padding: "4px 8px",
          borderRadius: 6, fontFamily: "inherit",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Đăng xuất
        </button>
      </div>
    </div>
  );
}
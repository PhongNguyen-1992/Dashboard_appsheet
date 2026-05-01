import type { User } from "../App";
import type { RouteId } from "../layouts/DashboardLayout";

interface NavItem {
  id: RouteId;
  label: string;
  badge?: number;
  icon: React.ReactNode;
  section: "nghiep-vu" | "he-thong";
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "dashboard", label: "Dashboard", section: "nghiep-vu",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>,
  },{
    id: "capthietbi", label: "Đề Xuất Thiết Bị", section: "nghiep-vu",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
  },
  {
    id: "capdo", label: "Đề nghị cấp đồ", section: "nghiep-vu",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
  },
  {
    id: "recare", label: "Recare", section: "nghiep-vu",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  },
  {
    id: "xacminh", label: "Xác minh", section: "nghiep-vu",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
  },
  {
    id: "tonkho", label: "Tồn kho", section: "he-thong",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
  },
  {
    id: "thongke", label: "Thống kê", section: "he-thong",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  },
];

interface Props {
  active: RouteId;
  open: boolean;
  user: User;
  onNavigate: (id: RouteId) => void;
  onToggle: () => void;
  onLogout: () => void;
}

export default function Sidebar({ active, open, user, onNavigate, onToggle, onLogout }: Props) {
  const nghiepVu = NAV_ITEMS.filter(n => n.section === "nghiep-vu");
  const heThong = NAV_ITEMS.filter(n => n.section === "he-thong");

  return (
    <div style={{
      width: open ? 220 : 56,
      background: "#1a1a2e",
      display: "flex",
      flexDirection: "column",
      transition: "width 0.22s cubic-bezier(.4,0,.2,1)",
      flexShrink: 0,
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{ padding: "14px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, overflow: "hidden" }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg,#f97316,#ea580c)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          {open && <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>Team Phong</span>}
        </div>
        <button onClick={onToggle} style={{
          width: 26, height: 26, borderRadius: 6, border: "0.5px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          transform: open ? "none" : "rotate(180deg)", transition: "transform 0.22s",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, padding: "10px 8px", overflowY: "auto", overflowX: "hidden" }}>
        <NavSection label="Nghiệp vụ" open={open} items={nghiepVu} active={active} onNavigate={onNavigate} />
        <div style={{ marginTop: 8 }}>
          <NavSection label="Hệ thống" open={open} items={heThong} active={active} onNavigate={onNavigate} />
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "10px 8px", borderTop: "0.5px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#7c3aed,#4f46e5)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}>
            {user.username[0].toUpperCase()}
          </div>
          {open && (
            <div style={{ overflow: "hidden", flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap" }}>{user.username}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>{user.role}</div>
            </div>
          )}
          {open && (
            <button onClick={onLogout} title="Đăng xuất" style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.35)", display: "flex", padding: 4 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function NavSection({ label, open, items, active, onNavigate }: {
  label: string; open: boolean; items: NavItem[]; active: RouteId; onNavigate: (id: RouteId) => void;
}) {
  return (
    <>
      {open && (
        <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0 8px", marginBottom: 6 }}>
          {label}
        </div>
      )}
      {items.map(item => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            title={!open ? item.label : undefined}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              width: "100%", padding: "9px 10px", borderRadius: 8,
              border: "none", background: isActive ? "rgba(249,115,22,0.18)" : "transparent",
              cursor: "pointer", marginBottom: 2, textAlign: "left",
              position: "relative",
            }}
          >
            {isActive && (
              <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 3, height: 18, background: "#f97316", borderRadius: "0 3px 3px 0" }} />
            )}
            <div style={{
              width: 32, height: 32, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              background: isActive ? "rgba(249,115,22,0.22)" : "transparent",
              color: isActive ? "#f97316" : "rgba(255,255,255,0.45)",
            }}>
              <span style={{ width: 15, height: 15, display: "flex" }}>{item.icon}</span>
            </div>
            {open && (
              <>
                <span style={{ fontSize: 13, fontWeight: 500, color: isActive ? "#fcd9b5" : "rgba(255,255,255,0.6)", whiteSpace: "nowrap", flex: 1 }}>
                  {item.label}
                </span>
                {item.badge && (
                  <span style={{ background: "#f97316", color: "#fff", fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 10 }}>
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </button>
        );
      })}
    </>
  );
}
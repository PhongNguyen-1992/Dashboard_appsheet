import React from "react";
import type { User } from "../App";
import type { RouteId } from "../layouts/DashboardLayout";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DevicesOtherRoundedIcon from '@mui/icons-material/DevicesOtherRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';

interface NavItem {
  id: RouteId;
  label: string;
  badge?: number;
  icon: React.ReactElement;
  section: "nghiep-vu" | "he-thong";
}

const NAV_ITEMS: NavItem[] = [
  { id: "dashboard",  label: "HR Manager",        section: "nghiep-vu", icon: <DashboardRoundedIcon /> },
  { id: "capthietbi", label: "Đề Xuất Thiết Bị",  section: "nghiep-vu", icon: <DevicesOtherRoundedIcon /> },
  { id: "capdo",      label: "Cấp Đổi CCDC",      section: "nghiep-vu", icon: <SwapHorizRoundedIcon /> },
  { id: "recare",     label: "Recare TK-BT",       section: "nghiep-vu", icon: <MonitorHeartRoundedIcon /> },
  { id: "khongxuly",  label: "Không Xử Lý",        section: "nghiep-vu", icon: <BlockRoundedIcon /> },
  { id: "xacminh",   label: "Xác minh",            section: "nghiep-vu", icon: <FactCheckRoundedIcon /> },
  { id: "activenet",    label: "Tra Cứu AU",       section: "he-thong",  icon: <Inventory2RoundedIcon /> },
  { id: "thongke",   label: "Thống kê",            section: "he-thong",  icon: <BarChartRoundedIcon /> },
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
  const heThong  = NAV_ITEMS.filter(n => n.section === "he-thong");

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
      <div style={{
        padding: "14px 12px", display: "flex", alignItems: "center",
        justifyContent: "space-between", borderBottom: "0.5px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, overflow: "hidden" }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: "linear-gradient(135deg,#f97316,#ea580c)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          {open && (
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>
              Team Phong
            </span>
          )}
        </div>
        <button
          onClick={onToggle}
          style={{
            width: 26, height: 26, borderRadius: 6,
            border: "0.5px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            transform: open ? "none" : "rotate(180deg)", transition: "transform 0.22s",
            flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
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
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "8px 10px", borderRadius: 8, overflow: "hidden",
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
            flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 700, color: "#fff",
          }}>
            {user.username[0].toUpperCase()}
          </div>
          {open && (
            <div style={{ overflow: "hidden", flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap" }}>
                {user.username}
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>
                {user.role}
              </div>
            </div>
          )}
          {open && (
            <button
              onClick={onLogout}
              title="Đăng xuất"
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.35)", display: "flex", padding: 4, borderRadius: 4,
                transition: "color 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f97316")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function NavSection({ label, open, items, active, onNavigate }: {
  label: string;
  open: boolean;
  items: NavItem[];
  active: RouteId;
  onNavigate: (id: RouteId) => void;
}) {
  return (
    <>
      {open && (
        <div style={{
          fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.08em", textTransform: "uppercase",
          padding: "0 8px", marginBottom: 6,
        }}>
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
            onMouseEnter={e => {
              if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={e => {
              if (!isActive) e.currentTarget.style.background = "transparent";
            }}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              width: "100%", padding: "7px 10px", borderRadius: 8,
              border: "none", background: isActive ? "rgba(249,115,22,0.18)" : "transparent",
              cursor: "pointer", marginBottom: 2, textAlign: "left",
              position: "relative", transition: "background 0.15s",
            }}
          >
            {isActive && (
              <div style={{
                position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
                width: 3, height: 18, background: "#f97316", borderRadius: "0 3px 3px 0",
              }} />
            )}
            <div style={{
              width: 32, height: 32, borderRadius: 7,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              background: isActive ? "rgba(249,115,22,0.22)" : "transparent",
              color: isActive ? "#f97316" : "rgba(255,255,255,0.45)",
              transition: "background 0.15s, color 0.15s",
            }}>
            {item.icon}
            </div>
            {open && (
              <>
                <span style={{
                  fontSize: 13, fontWeight: 500,
                  color: isActive ? "#fcd9b5" : "rgba(255,255,255,0.6)",
                  whiteSpace: "nowrap", flex: 1,
                }}>
                  {item.label}
                </span>
                {item.badge && (
                  <span style={{
                    background: "#f97316", color: "#fff",
                    fontSize: 10, fontWeight: 700,
                    padding: "1px 6px", borderRadius: 10,
                  }}>
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
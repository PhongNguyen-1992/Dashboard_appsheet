import React from "react";

import type { RouteId } from "../layouts/DashboardLayout";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DevicesOtherRoundedIcon from '@mui/icons-material/DevicesOtherRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import TimelineIcon from '@mui/icons-material/Timeline';
import VerifiedIcon from '@mui/icons-material/Verified';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { DynamicFormRounded } from "@mui/icons-material";
import type { User } from "../App";

interface NavItem {
  id: RouteId;
  label: string;
  badge?: number;
  icon: React.ReactElement;
  section: "nghiep-vu" | "he-thong" | "phan-tich";
}

const ALL_NAV_ITEMS: NavItem[] = [
  { id: "dashboard",  label: "Kiểm Tra CCDC",             section: "nghiep-vu",  icon: <DashboardRoundedIcon /> },
  { id: "capthietbi", label: "Đề Xuất Thiết Bị",       section: "nghiep-vu",  icon: <DevicesOtherRoundedIcon /> },
  { id: "capdo",      label: "Cấp Đổi CCDC",           section: "nghiep-vu",  icon: <SwapHorizRoundedIcon /> },
  { id: "recare",     label: "Recare TK-BT",            section: "nghiep-vu",  icon: <MonitorHeartRoundedIcon /> },
  { id: "khongxuly",  label: "Không Xử Lý",             section: "nghiep-vu",  icon: <BlockRoundedIcon /> },
  { id: "swapwf6",    label: "Swap WIFI6",               section: "nghiep-vu",  icon: <SwapHorizRoundedIcon /> },
  { id: "xacminh",    label: "Xác minh",                section: "nghiep-vu",  icon: <FactCheckRoundedIcon /> },
  { id: "activenet",  label: "Tra Cứu AU",              section: "he-thong",   icon: <ManageSearchIcon /> },
  { id: "thongke",    label: "Thống kê",                section: "he-thong",   icon: <BarChartRoundedIcon /> },
  { id: "data",       label: "Import/Xuất Data",        section: "phan-tich",  icon: <DynamicFormRounded /> },
  { id: "hr",         label: "Hr Manager",              section: "phan-tich",  icon: <PeopleAltIcon /> },
  { id: "overview",   label: "KPI Overview",            section: "phan-tich",  icon: <AnalyticsRoundedIcon /> },
  { id: "sknv",        label: "Sức Khỏe Nhân Viên", section: "phan-tich",  icon: <BarChartRoundedIcon /> },
  { id: "ton",        label: "Tồn Triển Khai Bảo Trì", section: "phan-tich",  icon: <BarChartRoundedIcon /> },
  { id: "thuhoi",     label: "Thu Hồi Thiết Bị",        section: "phan-tich",  icon: <AssignmentReturnIcon /> },
  { id: "tiendo",     label: "Ranking Tiến Độ",         section: "phan-tich",  icon: <TimelineIcon /> },
  { id: "chatluong",  label: "Ranking Chất Lượng",      section: "phan-tich",  icon: <VerifiedIcon /> },
  { id: "csat",       label: "Ranking CSAT & HIFPT",    section: "phan-tich",  icon: <RateReviewIcon /> },
];

// Route doitruong được thấy (phải khớp với ANALYTICS_ROUTES trong DashboardLayout)
const ANALYTICS_ROUTES: RouteId[] = [
  "data", "ton", "thuhoi", "tiendo", "chatluong", "csat", "overview", "hr",
];
const NHANVIEN_ROUTES: RouteId[] = [
  "tiendo", "chatluong", "overview","csat","sknv",
];
interface Props {
  active: RouteId;
  open: boolean;
  user: User;
  onNavigate: (id: RouteId) => void;
  onToggle: () => void;
  onLogout: () => void;
}

// Bảng màu "confetti" xoay vòng cho các điểm trang trí
const CONFETTI = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

export default function Sidebar({ active, open, user, onNavigate, onToggle, onLogout }: Props) {
  // Lọc nav theo quyền
  const navItems =
  user.access === "all"       ? ALL_NAV_ITEMS :
  user.access === "analytics" ? ALL_NAV_ITEMS.filter(n => ANALYTICS_ROUTES.includes(n.id)) :
  ALL_NAV_ITEMS.filter(n => NHANVIEN_ROUTES.includes(n.id));
  const nghiepVu = navItems.filter(n => n.section === "nghiep-vu");
  const heThong  = navItems.filter(n => n.section === "he-thong");
  const phanTich = navItems.filter(n => n.section === "phan-tich");

  return (
    <div style={{
      width: open ? 232 : 60,
      background: "#1E293B",
      display: "flex",
      flexDirection: "column",
      transition: "width 0.28s cubic-bezier(.34,1.56,.64,1)",
      flexShrink: 0,
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        @keyframes sb-blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes sb-pop   { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }

        .sb-navbtn {
          transition: background .16s ease, transform .16s cubic-bezier(.34,1.56,.64,1);
        }
        .sb-navbtn:hover:not(.active) { background: rgba(255,255,255,0.07) !important; }
        .sb-navbtn.active { transform: translate(-1px,-1px); }

        .sb-toggle:hover { background: #fff !important; transform: translate(-1px,-1px); box-shadow: 3px 3px 0px 0px #FBBF24 !important; }
        .sb-toggle:active { transform: translate(1px,1px); box-shadow: 1px 1px 0px 0px #FBBF24 !important; }

        .sb-logout:hover { color: #F472B6 !important; transform: scale(1.12) rotate(-6deg); }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: .001ms !important; transition-duration: .001ms !important; }
        }
      `}</style>

      {/* Confetti spine — vertical decorative divider on the right edge */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: 4,
        display: "flex", flexDirection: "column",
      }}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} style={{ flex: 1, background: CONFETTI[i % CONFETTI.length], opacity: 0.9 }} />
        ))}
      </div>

      {/* Header */}
      <div style={{
        padding: "14px 12px", display: "flex", alignItems: "center",
        justifyContent: "space-between", borderBottom: "2px dashed rgba(255,255,255,0.12)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, overflow: "hidden" }}>
          <div style={{
            width: 32, height: 32, borderRadius: 10,
            background: "#8B5CF6", border: "2px solid #0F172A",
            boxShadow: "2px 2px 0px 0px #FBBF24",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <svg viewBox="0 0 24 24" fill="white" width="15" height="15">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          {open && (
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13.5, fontWeight: 800, color: "#fff", whiteSpace: "nowrap" }}>
              Chi Nhánh Sài Gòn 1
            </span>
          )}
        </div>
        <button
          className="sb-toggle"
          onClick={onToggle}
          style={{
            width: 26, height: 26, borderRadius: "50%",
            border: "2px solid #0F172A",
            background: "rgba(255,255,255,0.9)", color: "#1E293B",
            boxShadow: "2px 2px 0px 0px rgba(0,0,0,.35)",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            transform: open ? "none" : "rotate(180deg)",
            transition: "transform 0.22s cubic-bezier(.34,1.56,.64,1), background .15s, box-shadow .15s",
            flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, padding: "12px 8px", overflowY: "auto", overflowX: "hidden" }}>
        {nghiepVu.length > 0 && (
          <NavSection label="Nghiệp vụ" open={open} items={nghiepVu} active={active} onNavigate={onNavigate} />
        )}
        {heThong.length > 0 && (
          <div style={{ marginTop: 10 }}>
            <NavSection label="Hệ thống" open={open} items={heThong} active={active} onNavigate={onNavigate} />
          </div>
        )}
        {phanTich.length > 0 && (
          <div style={{ marginTop: 10 }}>
            <NavSection label="Phân tích" open={open} items={phanTich} active={active} onNavigate={onNavigate} />
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: "10px 8px", borderTop: "2px dashed rgba(255,255,255,0.12)" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "8px 10px", borderRadius: 12, overflow: "hidden",
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: "50%",
            background: "#34D399", border: "2px solid #0F172A",
            flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 800, color: "#0F172A",
          }}>
            {user.username[0].toUpperCase()}
          </div>
          {open && (
            <div style={{ overflow: "hidden", flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,0.92)", whiteSpace: "nowrap" }}>
                {user.username}
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap", fontWeight: 500 }}>
                {user.role}
              </div>
            </div>
          )}
          {open && (
            <button
              className="sb-logout"
              onClick={onLogout}
              title="Đăng xuất"
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.4)", display: "flex", padding: 4, borderRadius: 6,
                transition: "color 0.15s, transform 0.2s cubic-bezier(.34,1.56,.64,1)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
          fontFamily: "'Outfit',sans-serif",
          fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.32)",
          letterSpacing: "0.1em", textTransform: "uppercase",
          padding: "0 8px", marginBottom: 7,
        }}>
          {label}
        </div>
      )}
      {items.map(item => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            className={`sb-navbtn${isActive ? " active" : ""}`}
            onClick={() => onNavigate(item.id)}
            title={!open ? item.label : undefined}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              width: "100%", padding: "7px 9px", borderRadius: 14,
              border: isActive ? "2px solid #0F172A" : "2px solid transparent",
              background: isActive ? "#8B5CF6" : "transparent",
              boxShadow: isActive ? "2px 2px 0px 0px rgba(0,0,0,.4)" : "none",
              cursor: "pointer", marginBottom: 3, textAlign: "left",
              position: "relative",
            }}
          >
            <div style={{
              width: 30, height: 30, borderRadius: 9,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              background: isActive ? "rgba(255,255,255,0.22)" : "transparent",
              color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
              transition: "background 0.15s, color 0.15s",
              fontSize: 18,
            }}>
              {item.icon}
            </div>
            {open && (
              <>
                <span style={{
                  fontSize: 13, fontWeight: isActive ? 700 : 600,
                  color: isActive ? "#fff" : "rgba(255,255,255,0.62)",
                  whiteSpace: "nowrap", flex: 1,
                }}>
                  {item.label}
                </span>
                {item.badge && (
                  <span style={{
                    background: "#FBBF24", color: "#1E293B",
                    fontSize: 10, fontWeight: 800,
                    padding: "1px 7px", borderRadius: 9999,
                    border: "1.5px solid #0F172A",
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
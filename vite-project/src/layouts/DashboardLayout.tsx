import { useState } from "react";
import type { User } from "../App";

import DashboardPage from "../pages/DashboardPage";
import CapDoPage from "../pages/CapDoPage";
import RecarePage from "../pages/RecarePage";
import XacMinhPage from "../pages/XacMinhPage";
import ThongKePage from "../pages/ThongKePage";
import DeXuatMoHinh from "../pages/DeXuatMoHinh";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Khongxuly from "../pages/KhongxulyPage";
import ActivePage from "../pages/ActivePage";
import SwapPage from "../pages/SwapPage";
import TonTKBTPage from "../pages/TonTKBTPage.tsx";
import DataPage from "../pages/DataPage.tsx";
import ThuHoiPage from "../pages/ThuhoiPage.tsx";
import ProgressPage from "../pages/ProgressPage.tsx";
import VerifiedPage from "../pages/VerifiedPage.tsx";
import CsatPage from "../pages/CsatPage.tsx";
import KPIOverview from "../pages/KPIOverview.tsx";
import HRPage from "../pages/HRPage.tsx";
import KPIOverviewNV from "../pages/KpisOverviewNhanVien.tsx";
import SKNV from "../pages/SKNVPage.tsx";

export type RouteId =
  | "dashboard"
  | "capthietbi"
  | "khongxuly"
  | "ton"
  | "data"
  | "capdo"
  | "recare"
  | "xacminh"
  | "thongke"
  | "swapwf6"
  | "thuhoi"
  | "tiendo"
  | "chatluong"
  | "csat" | "overview" | "hr"| "overviewnv"| "sknv"|
  "activenet";

interface Props {
  user: User;
  onLogout: () => void;
}

const PAGE_MAP = {
  dashboard:  <DashboardPage />,
  capthietbi: <DeXuatMoHinh />,
  capdo:      <CapDoPage />,
  recare:     <RecarePage />,
  xacminh:    <XacMinhPage />,
  ton:        <TonTKBTPage />,
  data:       <DataPage />,
  thongke:    <ThongKePage />,
  khongxuly:  <Khongxuly />,
  activenet:  <ActivePage />,
  swapwf6:    <SwapPage />,
  thuhoi:     <ThuHoiPage />,
  tiendo:     <ProgressPage />,
  chatluong:  <VerifiedPage />,
  overview:   <KPIOverview />,
  overviewnv:   <KPIOverviewNV/>,
  csat:       <CsatPage />,
  hr:         <HRPage />,
  sknv:        <SKNV />,
} satisfies Record<RouteId, React.ReactNode>;

export const ROUTE_LABELS: Record<RouteId, string> = {
  dashboard:  "Tổng Quan Nhân Sự",
  capthietbi: "Đề Xuất Thiết Bị",
  khongxuly:  "Không Xử Lý",
  capdo:      "Đề Nghị Cấp Đồ",
  recare:     "Recare",
  xacminh:    "Xác minh",
  ton:        "Tồn Triển Khai/Bảo Trì",
  thongke:    "Thống kê",
  activenet:  "Active Net",
  swapwf6:    "SWAP WF6",
  thuhoi:     "Thu Hồi Thiết Bị",
  tiendo:     "KPIs Tiến Độ Ranking",
  chatluong:  "KPIs Chất Lượng Ranking",
  csat:       "KPIs CSAT & HiFPT Ranking",
  data:       "Import/Xuất Data",
  overview:   "Tổng Quan KPIs",
  overviewnv:   "Tổng Quan KPIs Nhân Viên",
  hr:         "Tổng Hợp Nhân Sự",
  sknv:        "Sức Khoẻ Nhân Viên",
};

const ROUTE_SECTION: Record<RouteId, string> = {
  dashboard:  "Nghiệp vụ",
  capthietbi: "Nghiệp vụ",
  capdo:      "Nghiệp vụ",
  recare:     "Nghiệp vụ",
  khongxuly:  "Nghiệp vụ",
  swapwf6:    "Nghiệp vụ",
  xacminh:    "Nghiệp vụ",
  activenet:  "Hệ thống",
  thongke:    "Hệ thống",
  data:       "Phân tích",
  ton:        "Phân tích",
  thuhoi:     "Phân tích",
  tiendo:     "Phân tích",
  chatluong:  "Phân tích",
  csat:       "Phân tích",
  overview:   "Phân tích",
  overviewnv:   "Phân tích",
  hr:         "Phân tích",
  sknv:        "Phân tích",
};

// ── Phân quyền: route nào doitruong được phép vào ──────────────
const ANALYTICS_ROUTES: RouteId[] = [
  "data", "ton", "thuhoi", "tiendo", "chatluong", "csat", "overview", "hr","sknv",
];
// ── Phân quyền: route nào nhanvien được phép vào ──────────────
const NHANVIEN_ROUTES: RouteId[] = [
   "tiendo", "chatluong", "csat", "overviewnv",
];

function getAllowedDefaultRoute(access: User["access"]): RouteId {
  if (access === "all")       return "overview";
  if (access === "analytics") return "overview";
  return "overviewnv"; // nhanvien
}

export default function DashboardLayout({ user, onLogout }: Props) {
  const [route, setRoute]           = useState<RouteId>(getAllowedDefaultRoute(user.access));
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Guard: nếu doitruong cố navigate tới route không được phép → không làm gì
  const handleNavigate = (id: RouteId) => {
  if (user.access === "analytics" && !ANALYTICS_ROUTES.includes(id)) return;
  if (user.access === "nhanvien"  && !NHANVIEN_ROUTES.includes(id))  return;
  setRoute(id);
};
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      fontFamily: "'Be Vietnam Pro', sans-serif",
      background: "#f5f4f1",
    }}>
      <Sidebar
        active={route}
        open={sidebarOpen}
        user={user}
        onNavigate={handleNavigate}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onLogout={onLogout}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Topbar
          label={ROUTE_LABELS[route]}
          section={ROUTE_SECTION[route]}
          user={user}
          onLogout={onLogout}
        />
        <main style={{ flex: 1, overflow: "auto" }}>
          {PAGE_MAP[route]}
        </main>
      </div>
    </div>
  );
}
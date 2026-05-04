import { useState } from "react";
import type { User } from "../App";

import DashboardPage from "../pages/DashboardPage";
import CapDoPage from "../pages/CapDoPage";
import RecarePage from "../pages/RecarePage";
import XacMinhPage from "../pages/XacMinhPage";
import TonKhoPage from "../pages/TonKhoPage";
import ThongKePage from "../pages/ThongKePage";
import DeXuatMoHinh from "../pages/DeXuatMoHinh";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Khongxuly from "../pages/KhongxulyPage";
import ActivePage from "../pages/ActivePage";
import SwapPage from "../pages/SwapPage";
// ✅ FIX: thêm capthietbi
export type RouteId =
  | "dashboard"
  | "capthietbi"
  | "khongxuly"
  | "capdo"
  | "recare"
  | "xacminh"
  | "tonkho"
  | "thongke"
  | "swapwf6"
  | "activenet";


interface Props {
  user: User;
  onLogout: () => void;
}

// ✅ FIX: map đầy đủ + đúng key
const PAGE_MAP = {
  dashboard: <DashboardPage />,
  capthietbi: <DeXuatMoHinh />,
  capdo: <CapDoPage />,
  recare: <RecarePage />,
  xacminh: <XacMinhPage />,
  tonkho: <TonKhoPage />,
  thongke: <ThongKePage />,
  khongxuly: <Khongxuly/>,
  activenet: <ActivePage />,
  swapwf6: <SwapPage />, // tạm dùng lại capdo cho swapwf6
} satisfies Record<RouteId, React.ReactNode>;

// ✅ label chuẩn
export const ROUTE_LABELS: Record<RouteId, string> = {
  dashboard: "Tổng Quan Nhân Sự",
  capthietbi: "Đề Xuất Thiết Bị",
  khongxuly: "Không Xử Lý",
  capdo: "Đề Nghị Cấp Đồ",
  recare: "Recare",
  xacminh: "Xác minh",
  tonkho: "Tồn kho",
  thongke: "Thống kê",
  activenet: "Active Net",
  swapwf6: "SWAP WF6",
};

export default function DashboardLayout({ user, onLogout }: Props) {
  const [route, setRoute] = useState<RouteId>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        background: "#f5f4f1",
      }}
    >
      <Sidebar
        active={route}
        open={sidebarOpen}
        user={user}
        onNavigate={setRoute}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onLogout={onLogout}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Topbar
          label={ROUTE_LABELS[route]}
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
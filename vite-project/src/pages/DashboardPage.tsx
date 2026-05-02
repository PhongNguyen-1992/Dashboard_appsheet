const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwxVeniECDg1dAdsKiXn-8M9YViEQ96NMsm_TGTRKUJaQJbEmeo-b3fRjjVS4bZhDIEWA/exec";

export default function DashboardPage() {
  return (
    <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh", // full màn hình luôn
        border: "none",
        display: "block",
      }}
      title="Danh Sach Nhan Su"
    />
  );
}
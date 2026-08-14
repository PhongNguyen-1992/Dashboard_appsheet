const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwHNeepQOuNLAzWwnkh2hoinOvxF_9FwD_mvgcNvkg-3eH11EEmLOwH-ItinUBmyESM/exec";

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
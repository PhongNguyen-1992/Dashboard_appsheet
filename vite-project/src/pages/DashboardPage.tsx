const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxyL3lHAu8dyLsyUHmG70-R-gMLtOkpBm5KJxTbHtovESGoT09XKlZQX1dim0U6rppnWQ/exec";

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
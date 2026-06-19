const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyOyLUCmQDMaRMGGmHWiViXa2xLT7lvvkO7reKDEIsXEy2XLxZ0ZBqJFXcxymZ8Q1ti/exec"
export default function TonTKBTPage() {
  return (
    <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="Tồn Triển Khai Và Bảo Trì và Nhắc Mail"
    />
  );
}
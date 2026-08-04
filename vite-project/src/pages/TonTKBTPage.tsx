const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxWRnDqsMmTzpkQA6cMW9JBoP-kJRmuUZeeYw2dV8q6tNXU5PuRyLtfLp0hcbnZaMik/exec"
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
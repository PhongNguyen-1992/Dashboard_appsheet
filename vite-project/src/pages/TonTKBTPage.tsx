const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxia6mUy3UC19BEf5aR-eJ2FYw1JBMtOY5NsebjOzU3ZBhEFGvvI4IfkFTsGxsR9kil/exec"
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
      title="Tồn Triển Khai Và Bảo Trì"
    />
  );
}
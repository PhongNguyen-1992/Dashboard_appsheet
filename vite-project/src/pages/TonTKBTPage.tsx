const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwrftHFlMXzigtSVwZPE3JW9tKvVd0ofC9gqfNZriaB_xW0Krz5qKmnphWHbfgzqgod/exec"
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
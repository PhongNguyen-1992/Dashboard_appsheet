const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwuu4ovNhWGGJGeVGq6qCzx7qhYxv08ct017PLj9vlbt8kydktCEa_pk5LK5Rd8dpY/exec"
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
      title="Form đề nghị cấp đồ"
    />
  );
}
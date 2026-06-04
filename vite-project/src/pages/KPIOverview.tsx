const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwsWlufuo32UfXP1PYScKaZ5UuFWoP1mEr7uTa7vt9zGw5K2aLOqlQcvx_xK79EyHgXZw/exec";

export default function KPIOverview() {
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
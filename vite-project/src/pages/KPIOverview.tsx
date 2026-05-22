const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzwv5zdrvXIQWcNbo7yKNoDBVKtNTgGgfHbPSZxblNr44LptadM5kq0sRKMxda1FpRB/exec";

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
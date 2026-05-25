const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyozDsRYkLUXBEu3xPWHsTJ4TvIT6GWlKNeswxdaCk-LaC9rSMZyovdoalbXUZzIHaGiA/exec";

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
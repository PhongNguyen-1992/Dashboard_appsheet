const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyBTiHFNiJZV8y-_yCCXcB1L0L0FzQSUiEh2TspCIKuqtrPxC5oY-P2milcfnjjRihB/exec";

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
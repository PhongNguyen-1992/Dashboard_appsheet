const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxCYGzRoTrCVrWQWROg0SWrGVD8xJ-NRthv3AKzZSSMiL9CGBKVrfBAj7GatoHfAEO8QA/exec";

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
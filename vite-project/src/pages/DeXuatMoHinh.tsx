const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwdreXiPiEq0BHtFK0XXsp6wN7C_idUuIgeCGH11piHbfDUq5ntewqHK3XjAPd9Ce0R/exec";

export default function DeXuatMoHinh() {
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
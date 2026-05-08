const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzmpWgDkfCpMJBowZpHU1dtRr3EykSchJAgleaYBaO0X_PQCU05rulBh2hR3yKDFmrs/exec"
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
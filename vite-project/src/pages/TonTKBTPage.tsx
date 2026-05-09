const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzZTUPErLXjs3Bw6SwiWF0S7H6Y_vAwuS83Ew7fRbqjrk6icYcpjmAzH4JsroGxpply/exec"
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
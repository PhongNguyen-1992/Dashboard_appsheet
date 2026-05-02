const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzUVLeFeF61V2brisJmoUcsCHsqtPx_YPPXCe3BCZakdGdQVQHlzoZHXYzrfInaSbmVBw/exec";

export default function Khongxuly() {
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
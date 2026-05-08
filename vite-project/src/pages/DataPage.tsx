const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxBHpavs6s-jZ9I6wD_uVeY-3Ak7Dx8gvbb1CfNDJjakKux8n9k1XHs5ST5-s12MMci/exec";

export default function DataPage() {
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
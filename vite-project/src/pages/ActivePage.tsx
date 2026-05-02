const FORM_URL =
  "https://script.google.com/macros/s/AKfycbztGxLOimHH8siPo4NPhlYNVOs_8rtFOknlNyJPw5uumWpbNDxcMeB0146oeulnJ2W1/exec";

export default function ActivePage() {
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
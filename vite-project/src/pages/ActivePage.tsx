const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxvw5Fo-UEQ4Dnrfapv2WpJsxVSeYPsqywA8S7Ae9NVW2OwDw21vPeKD9mCVsO6OOY8/exec";

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
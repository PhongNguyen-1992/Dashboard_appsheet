const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyM1nlKk62ccpJCcAud8kOJz_-yReDUqlRYfrH_5Q70xRLRGlQQVZyrmenPUfptgQRE/exec";

export default function HRPage() {
  return (
     <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="Tổng Hợp Nhân Sự"
    />
  );
}
const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyWUjZfbooOOMwkOEIIbVLT_omda3GKYWJdtFrhDzy-uMj78IVXvZLg-4YOVSVYEatC/exec";

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
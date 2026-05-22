const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzF1afSP79iOy6DRHUjgxEmK3z5HjUYBQQAahGkXGes3hjh00ShIb6K5P-vgy90vNsQ/exec";

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
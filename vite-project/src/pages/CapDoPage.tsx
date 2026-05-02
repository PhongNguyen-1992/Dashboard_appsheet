const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxknyS8_ahaTOKE10xZ-P7gjVWhB1IbUAPe11nXnJi5iB9IQ1WyKsL2lUgJALeZxrxG/exec";

export default function CapDoPage() {
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
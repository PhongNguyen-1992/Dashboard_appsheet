const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyKPjs4_JKC4aM0dcNARUvrjrnGwNsok0qGeN7Kcn2DiErSjabKRsUCP7fcTGQyqey9/exec";

export default function CsatPage() {
  return (
     <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="CSAT & HIFPT"
    />
  );
}
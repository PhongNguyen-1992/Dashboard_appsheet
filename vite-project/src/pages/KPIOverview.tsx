const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyonucSgOR1xaNv4sdyQ-7LZGqF-xR1Vj6QboTQV4Q1tfi7Y99kZh13Fkg1LrSm3wS6/exec";

export default function KPIOverview() {
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
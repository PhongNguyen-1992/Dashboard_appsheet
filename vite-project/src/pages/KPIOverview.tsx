const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwg61h6Ooj0tZBnHHP13k7EBqj7kE1jdQhBGpgVi3u57NluG_db3tU_sX205piRyHA7bg/exec";

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
const FORM_URL =
  "https://script.google.com/macros/s/AKfycbywf6p165oE7H2PX4Ayce1SuJmKJy8htqfdUNcIRDFrycLEEi7gUPdUZc6FH71OW7HcZg/exec";

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
const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzj4KvzU9IBAchvMaNY2-fViZyWZIVF8pTFKOrYWZWct-pLsL5z4dBq0nu3z6lFMAk_rQ/exec";

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
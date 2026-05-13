const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyu9g56F8eNGiDayUbRapYplXRa6yBL_lp2Y7CzeQLIVBMoZoMyEZq9YvHAWmdLzLQG/exec";

export default function DeXuatMoHinh() {
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
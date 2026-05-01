const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwOmMj3Hoe4rsV8MEyMf1F2ILdSSvj0PM9oeaPhiOEJXqptbjYHPSLCCcHvSzbUJ_TI/exec";

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
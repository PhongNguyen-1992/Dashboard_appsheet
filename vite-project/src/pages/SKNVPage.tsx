const FORM_URL =
  "https://script.google.com/macros/s/AKfycbw8zPV3HIyaLmGDeabPDRk-ZGlaJKO9PyqSW4nrjGIFPrEpMKMQc01F3IHbeqEYFJI/exec";

export default function SKNV() {
  return (
    <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="Sức Khỏe Nhân Viên"
    />
  );
}
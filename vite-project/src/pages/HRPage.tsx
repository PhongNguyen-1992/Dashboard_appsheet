const FORM_URL =
  "https://script.google.com/macros/s/AKfycbz_duQPJVi_u7ANuqgHtA6on-YvFv-WDRNT4sEst1Y4eGaR9PRRSyRC5_yNhkz79H3S/exec";

export default function HRPage() {
  return (
     <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="Tổng Hợp Nhân Sự"
    />
  );
}
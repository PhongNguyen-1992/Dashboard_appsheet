const FORM_URL =
  "https://script.google.com/macros/s/AKfycby81SYLUbGehJvVOtvdKR2pZilAfuY48WCoZLA5pdA7KXVt1L24meqHUn1aLRnswDFQ/exec";

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
const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyhp8VSzBgUBl2ENMiLiFhIQHsjF4TlOA61nGkXft9aGeM9A9aIg9GnPa7oJBqntJQ/exec";

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
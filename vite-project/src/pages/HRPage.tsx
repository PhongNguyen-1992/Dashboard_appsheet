const FORM_URL =
  "https://script.google.com/macros/s/AKfycbz3-DqLH_Bf9K1cNWnZxEYrpif72qwOYxwAdfsa5kK0FqQuariJ-nA3xcN1oGsWhpci/exec";

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
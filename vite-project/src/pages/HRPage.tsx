const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzZzFTyhqsDt4DpTTgdRox46gjnv5Bz6owmHJgbEMqtGexuc9z8VmINgyMZOXywC4ab/exec";

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
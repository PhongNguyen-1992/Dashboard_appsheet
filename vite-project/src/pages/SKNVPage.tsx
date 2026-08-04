const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxep62RHGG5jXmxrv6uizJZOMZfVxH1Z3spMGgaS8SQ1MHZgKVkrDPbR4IWtg1Yw4M9/exec";

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
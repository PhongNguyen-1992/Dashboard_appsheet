const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzfgpuoG4akHwVal59Wr0VKyroVt2u7SLLyY-viaoveC-iipjoQyOrH7oYTcum1XAh2/exec";

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
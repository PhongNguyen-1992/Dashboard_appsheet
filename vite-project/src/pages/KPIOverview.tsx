const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwsJ9wm_Xte7nQDPUr1yf4ALLgjYKYoIfouN_-laaDt69p3oTsBi1YYUPgt7u8QoGMj/exec";

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
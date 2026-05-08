const FORM_URL =
  "https://script.google.com/macros/s/AKfycbw_9pb3NhEDzVpGuDEP4SAKK0wjlx74lnn6AK3vNb_8LxjZjSz1hgH_q9Isd0l5RUoZ/exec";

export default function ActivePage() {
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
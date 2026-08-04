const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxetrfy2NkNCPWJZNhUsuhj5B0-gIEpPt_mn5df4B0y7S7oVH3WrG_0AfJeD-PYnDUR/exec";

export default function DataPage() {
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
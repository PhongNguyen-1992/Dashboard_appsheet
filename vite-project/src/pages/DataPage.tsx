const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzt-1nuwEzm8r2P1KHBzw0N-f_hGCmvPZtKpEHzCZsvusul8-0-cYgFOa4SI3exKzop/exec";

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
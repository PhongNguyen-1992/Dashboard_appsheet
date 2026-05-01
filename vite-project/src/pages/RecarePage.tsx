import PageShell from "../components/PageShell";

const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxhl0g6_B_WYuOK3YqJ_MFfS0vGgbKPl2LsRKhLS5VOzdIwBAGQyJ2go2nQJnKCgzqB/exec";

export default function CapDoPage() {
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
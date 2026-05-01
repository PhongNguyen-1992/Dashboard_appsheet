import PageShell from "../components/PageShell";

const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxJfqf_ZKT71EYaNFw7UIHzd0DItW7sUoaKkimFpdefbZjCMVTvj0RXLCTqv2Bc8qW5/exec";

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
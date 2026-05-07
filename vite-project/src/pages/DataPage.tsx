const FORM_URL =
  "https://script.google.com/macros/s/AKfycbw291MjKMMKZs8UTy31RCJECDvFEWsFzGbkD6WSZim65RGv-1TM51UNQhMFxnpLDh2u/exec";

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
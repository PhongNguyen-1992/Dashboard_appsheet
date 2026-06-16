const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxJ7kcX69L-GITflOT2fKkrwmzCNK9gi0Gm2c_XxfMnDY8e9zQObHalhiutbl0pZW7B/exec";

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
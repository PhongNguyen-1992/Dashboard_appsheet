const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxTX5-rCwk0101U5HzZ7eU6CpGVO9r5G25E-Ppn6C_BuLLosTUJSpvgFIMZ2kILFYPI/exec";

export default function ThuHoiPage() {
  return (
     <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="Thu hồi thiết bị"
    />
  );
}
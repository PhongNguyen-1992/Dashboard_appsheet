const FORM_URL =
  "https://script.google.com/macros/s/AKfycbw0RfWtmokiB_6LzPniM9yJe3pEIsHwuW-fmSx6kRInu1dtVWmIY0sSUqC1I-GCOqWe/exec"
export default function TonTKBTPage() {
  return (
    <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="Tồn Triển Khai Và Bảo Trì và Nhắc Mail"
    />
  );
}
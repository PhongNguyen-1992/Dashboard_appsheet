const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwYdvPVlV3EwGG3SY2-VxxIjVxG-CAniUjDS44TWRnWBIRLsanFnvXFYFu9G5tUN14V/exec";

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
const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzCAyoroC95DD0QRzNvOlMLove0s5PlJvU8lsLSVX8jQ8waJW5olAS91l1ncg9dbYTMmQ/exec";

export default function KPIOverview() {
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
const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwUsBnV4tCXqh2lDf3uE8NTveWLCSY3oBEiyeApeh2rrbIPD1XVkfkAeP1X0J-PlDC7/exec"
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
      title="Form đề nghị cấp đồ"
    />
  );
}
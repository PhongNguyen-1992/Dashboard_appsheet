const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzLgQWskw6Nicph9S0LTrVb_mTCus_Ih5PtJ4VxEZKvtuX84HKpFogRKY2y0lvbFNTY/exec"
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
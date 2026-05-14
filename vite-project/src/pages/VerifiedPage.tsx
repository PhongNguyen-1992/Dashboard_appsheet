const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxHwBCuNfjI_oT34fEfCNikEHJJXlugwDA8PbPUDhFWT8BtjNk_fCcyVe64f5q3zdYs/exec";

export default function VerifiedPage() {
  return (
     <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="KPis Ranking"
    />
  );
}
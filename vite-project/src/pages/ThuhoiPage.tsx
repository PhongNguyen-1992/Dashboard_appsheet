const FORM_URL =
  "https://script.google.com/macros/s/AKfycbw1A-wD4JBpLSjqEPapkZFSPXDMx_u2Rj7dRkMJPh5bTY-plfkR_kY1eXAVpHuhsxErsw/exec";

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
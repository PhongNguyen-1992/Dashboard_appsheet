const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxp4WXcxNs4bcSdQtJwcslKlS943eQ4mBpxgNgM4HFItju6uQF7O_B38xfy1rplRAKnrA/exec";

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
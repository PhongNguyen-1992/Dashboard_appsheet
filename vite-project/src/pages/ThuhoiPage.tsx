const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzAk5mlYNcAHLdHJQvJ3bH35Tur6scS5oWJu-IJPbYhiVSXMrb4UGuML3Fero5wuhvFMw/exec";

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
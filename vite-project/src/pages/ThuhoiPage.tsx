const FORM_URL =
  "https://script.google.com/macros/s/AKfycbybgv_-dC31gNnag-SJzRKVo35qrvcdCnEAjFJm8wD8zJEpHuMUAAkjYqk2N7C8t2FX7A/exec";

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
const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzg5xOyR70lKPXCpQ0P9GRgypqn8bmpKua18uMx-PMR-LqDS8J4WrubfMQDXn4bXxentQ/exec";

export default function DeXuatMoHinh() {
  return (
    <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh", // full màn hình luôn
        border: "none",
        display: "block",
      }}
      title="Danh Sach Nhan Su"
    />
  );
}
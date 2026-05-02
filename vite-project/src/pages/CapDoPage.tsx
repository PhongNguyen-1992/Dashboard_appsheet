const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzayONKio3otda6A7nSnvK-skJzVR0wtUrVvsQ-o73XLaeoqC0uil4LcK0Ns0m_VVCu/exec";

export default function CapDoPage() {
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
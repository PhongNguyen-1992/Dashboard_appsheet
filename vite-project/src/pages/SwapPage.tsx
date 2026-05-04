const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxvFkghIJdvGkSX4cM0kicAVbhHKSPpk4QSNTfRR_zEiTC_raEwqBAhIGPv6276ykU7sw/exec";

export default function SwapPage() {
  return (
    <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="SWAP WF6"
    />
  );
}
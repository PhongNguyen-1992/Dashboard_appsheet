const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwNQTPkTbN7YnZmgQ-uuOAHosCAJX7XadG0CI1IfLXARsCK5izNZcF_15RX4M_WTlM/exec";

export default function ProgressPage() {
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
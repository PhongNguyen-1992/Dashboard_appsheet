const FORM_URL =
  "https://script.google.com/macros/s/AKfycbz0ZWpgN2gsVxvKGNfXU7jHTG-agWMsZu-nmfEmtft9vimJ6q0VStWceBFu4On4Pc4HMA/exec";

export default function KPIOverview() {
  return (
     <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="KPIs Overview"
    />
  );
}
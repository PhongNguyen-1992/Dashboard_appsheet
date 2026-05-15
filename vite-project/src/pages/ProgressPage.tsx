const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyY-bCSMs7VIjD63bAAEFxw8HDuIMS-MgYsaUMl1WzLAVAbvEG9bLTUFWXOI-thxUg/exec";

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
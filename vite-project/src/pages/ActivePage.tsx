const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzfJqhpTHLaCI7NdkZxDgmZ7aJ4nwDZcqcA5PgxvgKE_0Nb0nW6PtyzXVg26uqrq5osKg/exec";

export default function ActivePage() {
  return (
     <iframe
      src={FORM_URL}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      title="Tra Cứu AU"
    />
  );
}
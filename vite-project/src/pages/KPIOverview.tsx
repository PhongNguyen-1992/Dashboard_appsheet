const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwzXmiG8WqgytTKDdzvrS-omMoAWigdLonXYn-oB9TKpJe6CLCJEhNwotEaQD-O9fUKXw/exec";

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
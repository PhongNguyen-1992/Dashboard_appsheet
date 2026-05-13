const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxaAzruz6QfEXR5nYoD6BPTFkDDQY-eY0zhFu0WD97ImsRjnwR2hJBDO4Mgiwg64b4/exec";

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
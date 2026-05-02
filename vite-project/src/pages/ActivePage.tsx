const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxHpj8fkfXfHgpmRhbxEvsYYMRm-X_RcyNrTUI1PS1koWKu00cIEVfUAlyegZb-t11N/exec";

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
      title="Form đề nghị cấp đồ"
    />
  );
}
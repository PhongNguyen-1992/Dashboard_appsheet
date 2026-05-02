const FORM_URL =
  "https://script.google.com/macros/s/AKfycbyosD848VI902D_UfXpp613VbWUmhhaltjTN9297BPwr9Uu7iKPSntm4-U8jF6-SckN/exec";

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
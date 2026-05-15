const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxopPhh1y8LhpF_o38yQjlxqxQDJ0pp4z9SshDarKW0ftoV6ZjrdP4rc16W-FUyKfC8ng/exec";

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
      title="Form đề nghị cấp đồ"
    />
  );
}
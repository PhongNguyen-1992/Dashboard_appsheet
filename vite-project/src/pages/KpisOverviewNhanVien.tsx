const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxutKwnN9E17McMH5rFFuZXDMptcY6ik08_4Cn3W-RqRzmu6-WhV8ZtCHBLHhSmUDVXtg/exec";

export default function KPIOverviewNV() {
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
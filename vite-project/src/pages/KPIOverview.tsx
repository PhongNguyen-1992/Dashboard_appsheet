const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxbH7wJlRXcDuBz7uyn5atIa0N_qIFAbO7PLJO-bKGDyudohhyEaBnWeORSHGI-PiukMQ/exec";

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
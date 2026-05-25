const FORM_URL =
  "https://script.google.com/macros/s/AKfycbw2vVHouuC35sz_yCOCYj5UXZwVN9IidWJxUyL_Sr2PwPkIvVWROhzQmRj8o1ufOost/exec";

export default function DataPage() {
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
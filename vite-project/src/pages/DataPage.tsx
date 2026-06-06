const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzFS4r--nlLwe6hUUZ9LkcIquPS9Wb-PXnXV4V3LE1wbNT_zgi7c9fNYsIscs_ENU2l/exec";

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
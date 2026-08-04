const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzW0VZ8FkCr_axPD7BmYz1DyYiHGT1B493qUmZWTAeHOg1dojBwbF8hsV3ZcSdS-8G9/exec";

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
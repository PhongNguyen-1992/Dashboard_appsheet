const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzNXjSQH-ljlMOEh-YHc5PBTOzl_8NaF4yzUB8dkcwzIYpOZlPfNGxnYE5gL0xANhmS/exec";

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
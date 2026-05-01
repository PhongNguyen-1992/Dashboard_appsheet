import PageShell from "../components/PageShell";

const FORM_URL =
  "https://script.google.com/macros/s/AKfycbwOmMj3Hoe4rsV8MEyMf1F2ILdSSvj0PM9oeaPhiOEJXqptbjYHPSLCCcHvSzbUJ_TI/exec";

export default function DeXuatMoHinh() {
  return (
    <PageShell
      title="Đề Xuất Thiết Bị"
      description="Hỗ trợ cung cấp thiết bị nâng cao CLDV"
      accentColor="#f97316"     
      icon={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        </svg>
      }
    >
      <iframe
        src={FORM_URL}
        style={{
          width: "100%",
          height: "calc(100vh - 120px)", // 🔥 chỉnh theo header thực tế
          border: "none",
          display: "block",
        }}
        title="Form đề nghị cấp đồ"
      />
    </PageShell>
  );
}
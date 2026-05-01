import PageShell from "../components/PageShell";

const FORM_URL =
  "https://script.google.com/macros/s/AKfycbxhl0g6_B_WYuOK3YqJ_MFfS0vGgbKPl2LsRKhLS5VOzdIwBAGQyJ2go2nQJnKCgzqB/exec";

export default function CapDoPage() {
  return (
    <PageShell
      title="Recare"
      description="Chăm sóc sau Triển Khai/ Bảo Trì"
      accentColor="#f97316"
      icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>}
    >
      <div style={{
        background: "#fff", border: "0.5px solid #e4e2dc", borderRadius: 14,
        overflow: "hidden", height: "calc(100vh - 200px)", minHeight: 480,
      }}>
        <iframe
          src={FORM_URL}
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Form đề nghị cấp đồ"
        />
      </div>
    </PageShell>
  );
}
interface Props {
  icon: React.ReactNode;
  title: string;
  description?: string;
  accentColor?: string;
  children?: React.ReactNode;
}

export default function PageShell({ icon, title, description, accentColor = "#f97316", children }: Props) {
  return (
    <div style={{ padding: 28, height: "100%", boxSizing: "border-box" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <div style={{
          width: 42, height: 42, borderRadius: 12,
          background: `${accentColor}18`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: accentColor,
        }}>
          {icon}
        </div>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: 0 }}>{title}</h2>
          {description && <p style={{ fontSize: 13, color: "#888", margin: "2px 0 0" }}>{description}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

export function ComingSoon({ title }: { title: string }) {
  return (
    <PageShell
      title={title}
      icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
    >
      <div style={{
        background: "#fff", border: "0.5px solid #e4e2dc", borderRadius: 14,
        padding: 48, textAlign: "center",
      }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
        <p style={{ fontSize: 15, fontWeight: 600, color: "#444", margin: "0 0 6px" }}>Đang phát triển</p>
        <p style={{ fontSize: 13, color: "#aaa", margin: 0 }}>Tính năng <strong>{title}</strong> sẽ sớm ra mắt.</p>
      </div>
    </PageShell>
  );
}
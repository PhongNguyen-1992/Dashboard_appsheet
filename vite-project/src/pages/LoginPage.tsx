import { useState } from "react";
import type { User } from "../App.tsx";

// ── Danh sách tài khoản ──────────────────────────────────────────
const USERS: (User & { password: string })[] = [
  { username: "admin",     password: "admin",     role: "Quản trị viên", access: "all"       },
  { username: "doitruong", password: "doitruong", role: "Đội trưởng",    access: "analytics" },
  { username: "nv", password: "nv", role: "nhanvien",    access: "nhanvien" },
];

interface Props {
  onLogin: (user: User) => void;
}

export default function LoginPage({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [focused, setFocused]   = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      const found = USERS.find(u => u.username === username && u.password === password);
      if (found) {
        onLogin({ username: found.username, role: found.role, access: found.access });
      } else {
        setError("Tài khoản hoặc mật khẩu không đúng.");
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      background: "#FFFDF5",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #FFFDF5;
          --fg: #1E293B;
          --muted: #F1F5F9;
          --muted-fg: #64748B;
          --accent: #8B5CF6;
          --accent-fg: #FFFFFF;
          --secondary: #F472B6;
          --tertiary: #FBBF24;
          --quaternary: #34D399;
          --border: #E2E8F0;
        }

        @keyframes popIn    { 0%{opacity:0;transform:scale(.85) translateY(14px)} 70%{transform:scale(1.02) translateY(-2px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes drift1   { 0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(14px,-16px) rotate(8deg)} }
        @keyframes drift2   { 0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(-12px,14px) rotate(-10deg)} }
        @keyframes spinCW   { to{transform:rotate(360deg)} }
        @keyframes wiggle   { 0%,100%{transform:rotate(0deg)} 25%{transform:rotate(3deg)} 75%{transform:rotate(-3deg)} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:.35} }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: .001ms !important; animation-iteration-count: 1 !important; }
        }

        .pg-label {
          display:block; font-family:'Outfit',sans-serif; font-weight:700; font-size:11px;
          letter-spacing:.08em; text-transform:uppercase; color:var(--fg); margin-bottom:8px;
        }

        .pg-input {
          width:100%;
          padding:13px 16px;
          background:#fff;
          border:2px solid #CBD5E1;
          border-radius:14px;
          color:var(--fg);
          font-size:14.5px;
          font-family:'Plus Jakarta Sans',sans-serif;
          font-weight:500;
          outline:none;
          box-shadow:4px 4px 0px 0px transparent;
          transition: border-color .2s, box-shadow .18s cubic-bezier(.34,1.56,.64,1), transform .18s cubic-bezier(.34,1.56,.64,1);
        }
        .pg-input::placeholder { color:#B8C2D6; font-weight:400; }
        .pg-input.has-icon { padding-left:44px; }
        .pg-input.has-right { padding-right:46px; }
        .pg-input:focus {
          border-color: var(--accent);
          box-shadow: 4px 4px 0px 0px var(--accent);
          transform: translate(-2px,-2px);
        }
        .pg-input.err {
          border-color: #DC2626;
        }
        .pg-input.err:focus {
          box-shadow: 4px 4px 0px 0px #DC2626;
        }

        .pg-eye {
          position:absolute; right:12px; top:50%; transform:translateY(-50%);
          background:none; border:none; cursor:pointer; color:var(--muted-fg);
          padding:4px; line-height:0; border-radius:8px; transition: color .15s;
        }
        .pg-eye:hover { color: var(--fg); }

        .pg-btn {
          width:100%;
          padding:15px;
          border:2px solid var(--fg);
          border-radius:9999px;
          font-family:'Outfit',sans-serif;
          font-weight:700;
          font-size:15px;
          letter-spacing:.01em;
          cursor:pointer;
          display:flex; align-items:center; justify-content:center; gap:9px;
          background:var(--accent);
          color:var(--accent-fg);
          box-shadow:4px 4px 0px 0px var(--fg);
          transition: transform .22s cubic-bezier(.34,1.56,.64,1), box-shadow .22s cubic-bezier(.34,1.56,.64,1), background .2s;
        }
        .pg-btn:hover:not(:disabled) {
          transform: translate(-2px,-2px);
          box-shadow: 6px 6px 0px 0px var(--fg);
        }
        .pg-btn:active:not(:disabled) {
          transform: translate(2px,2px);
          box-shadow: 2px 2px 0px 0px var(--fg);
        }
        .pg-btn:disabled {
          background:#E8EDF7;
          color:#94A3B8;
          border-color:#CBD5E1;
          box-shadow:4px 4px 0px 0px #CBD5E1;
          cursor:not-allowed;
        }
        .pg-btn .icon-dot {
          width:26px; height:26px; border-radius:50%;
          background:rgba(255,255,255,.22);
          display:flex; align-items:center; justify-content:center;
          flex-shrink:0;
        }

        .pg-card {
          animation: popIn .55s cubic-bezier(.34,1.56,.64,1) both;
        }

        .dot-grid {
          background-image: radial-gradient(rgba(30,41,59,.16) 1.6px, transparent 1.6px);
          background-size: 18px 18px;
        }

        .left-panel { display:none; }
        @media (min-width: 900px) { .left-panel { display:flex !important; } }
      `}</style>

      {/* ── LEFT PANEL: decorative / brand ── */}
      <div
        className="left-panel"
        style={{
          width: "45%",
          flexDirection: "column",
          background: "#EDE9FE",
          padding: "44px 40px",
          position: "relative",
          overflow: "hidden",
          borderRight: "2px solid #1E293B",
        }}
      >
        {/* Dot grid backdrop */}
        <div className="dot-grid" style={{ position:"absolute", inset:0, opacity:.5, pointerEvents:"none" }} />

        {/* Giant tertiary circle behind copy */}
        <div style={{
          position:"absolute", top:"20%", left:"50%", transform:"translateX(-50%)",
          width:380, height:380, borderRadius:"50%",
          background:"var(--tertiary)", opacity:.9,
          animation:"drift1 10s ease-in-out infinite",
          pointerEvents:"none",
        }} />

        {/* Confetti shapes */}
        <div style={{ position:"absolute", top:70, right:56, width:0, height:0,
          borderLeft:"16px solid transparent", borderRight:"16px solid transparent", borderBottom:"28px solid var(--secondary)",
          animation:"drift2 8s ease-in-out infinite", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:120, left:46, width:34, height:34, borderRadius:8,
          border:"3px solid var(--fg)", background:"var(--quaternary)", transform:"rotate(12deg)",
          animation:"wiggle 6s ease-in-out infinite", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:210, right:90, width:20, height:20, borderRadius:"50%",
          border:"3px solid var(--fg)", background:"#fff",
          animation:"drift1 7s ease-in-out infinite 1s", pointerEvents:"none" }} />

        {/* Brand mark */}
        <div style={{ display:"flex", alignItems:"center", gap:12, position:"relative", zIndex:2 }}>
          <div style={{
            width:46, height:46, borderRadius:14,
            background:"#fff", border:"2px solid var(--fg)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"3px 3px 0px 0px var(--fg)", flexShrink:0,
          }}>
            <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:12, fontWeight:800, color:"#E8271A" }}>FPT</span>
          </div>
          <div>
            <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:14.5, fontWeight:800, color:"var(--fg)", lineHeight:1.15 }}>Chi Nhánh Sài Gòn 01</div>
            <div style={{ fontSize:10.5, color:"var(--muted-fg)", letterSpacing:".14em", textTransform:"uppercase", marginTop:2, fontWeight:600 }}>FPT Telecom</div>
          </div>
        </div>

        {/* Centre copy */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", position:"relative", zIndex:2 }}>
          <div style={{
            display:"inline-flex", alignSelf:"flex-start", alignItems:"center", gap:7,
            background:"#fff", border:"2px solid var(--fg)", borderRadius:9999,
            padding:"6px 14px 6px 10px", marginBottom:18,
            boxShadow:"3px 3px 0px 0px var(--fg)",
          }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"var(--quaternary)", border:"1.5px solid var(--fg)", animation:"blink 2.2s ease-in-out infinite" }} />
            <span style={{ fontSize:11, fontWeight:700, color:"var(--fg)", fontFamily:"'Outfit',sans-serif" }}>Hệ thống nội bộ</span>
          </div>

          <h1 style={{ fontFamily:"'Outfit',sans-serif", fontSize:36, fontWeight:800, color:"var(--fg)", lineHeight:1.15, marginBottom:16 }}>
            Quản lý<br />
            <span style={{
              position:"relative", display:"inline-block",
              background:"var(--secondary)", padding:"2px 12px", borderRadius:"12px 12px 12px 0",
              border:"2px solid var(--fg)", boxShadow:"3px 3px 0px 0px var(--fg)", color:"#fff",
            }}>
              Sài Gòn 01
            </span>
          </h1>

          <p style={{ fontSize:13.5, color:"#334155", lineHeight:1.85, maxWidth:280, fontWeight:500 }}>
            Nền tảng quản lý nghiệp vụ tập trung — cấp phát thiết bị, kiểm soát tồn kho và xác minh dữ liệu theo thời gian thực.
          </p>

          <div style={{ display:"flex", flexDirection:"column", gap:10, marginTop:26 }}>
            {[
              { t:"Cấp phát & thu hồi thiết bị", c:"var(--quaternary)" },
              { t:"Kiểm soát tồn kho theo thời gian", c:"var(--tertiary)" },
              { t:"Báo cáo & phân tích chi nhánh", c:"var(--secondary)" },
            ].map((row, i) => (
              <div key={i} style={{
                display:"flex", alignItems:"center", gap:10,
                background:"#fff", border:"2px solid var(--fg)",
                borderRadius:12, padding:"9px 14px",
                boxShadow:"2px 2px 0px 0px var(--fg)",
              }}>
                <div style={{ width:9, height:9, borderRadius:"50%", background:row.c, border:"1.5px solid var(--fg)", flexShrink:0 }} />
                <span style={{ fontSize:12.5, color:"var(--fg)", fontWeight:600 }}>{row.t}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position:"relative", zIndex:2, borderTop:"2px dashed rgba(30,41,59,.25)", paddingTop:14 }}>
          <span style={{ fontSize:10.5, color:"var(--muted-fg)", fontWeight:600 }}>
            © 2025 FPT Telecom — Internal Tools v2.1
          </span>
        </div>
      </div>

      {/* ── RIGHT PANEL: the login card ── */}
      <div style={{
        flex:1, display:"flex", alignItems:"center", justifyContent:"center",
        padding:"32px 24px", position:"relative", overflow:"hidden",
      }}>
        {/* faint decoration on the light side */}
        <div className="dot-grid" style={{ position:"absolute", inset:0, opacity:.35, pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:-50, right:-50, width:170, height:170, borderRadius:"50%",
          background:"var(--quaternary)", opacity:.22, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-40, left:-30, width:150, height:150, borderRadius:24,
          border:"3px solid var(--fg)", opacity:.08, transform:"rotate(12deg)", pointerEvents:"none" }} />

        <div className="pg-card" style={{
          width:"100%", maxWidth:400,
          background:"#fff",
          border:"2px solid var(--fg)",
          borderRadius:24,
          padding:"44px 34px 34px",
          boxShadow:"8px 8px 0px 0px var(--secondary)",
          position:"relative", zIndex:1,
        }}>
          {/* floating icon badge, half-in/half-out of the top border */}
          <div style={{
            position:"absolute", top:-28, left:34,
            width:56, height:56, borderRadius:16,
            background:"var(--accent)", border:"2px solid var(--fg)",
            boxShadow:"3px 3px 0px 0px var(--fg)",
            display:"flex", alignItems:"center", justifyContent:"center",
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>

          <div style={{ marginTop:14, marginBottom:26 }}>
            <h1 style={{ fontFamily:"'Outfit',sans-serif", fontSize:26, fontWeight:800, color:"var(--fg)", marginBottom:6 }}>
              Đăng nhập
            </h1>
            <p style={{ fontSize:13.5, color:"var(--muted-fg)", fontWeight:500 }}>
              Vui lòng nhập thông tin tài khoản của bạn
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:19 }}>
            {/* Username */}
            <div>
              <label className="pg-label">Tài khoản</label>
              <div style={{ position:"relative" }}>
                <svg style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", width:17, height:17, pointerEvents:"none", color: focused==="user" ? "var(--accent)" : "#94A3B8", transition:"color .18s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <input
                  className="pg-input has-icon"
                  type="text"
                  placeholder="Nhập tài khoản..."
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  onFocus={() => setFocused("user")}
                  onBlur={() => setFocused(null)}
                  autoFocus
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="pg-label">Mật khẩu</label>
              <div style={{ position:"relative" }}>
                <svg style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", width:17, height:17, pointerEvents:"none", color: focused==="pass" ? "var(--accent)" : "#94A3B8", transition:"color .18s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  className={`pg-input has-icon has-right${error ? " err" : ""}`}
                  type={showPass ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onFocus={() => setFocused("pass")}
                  onBlur={() => setFocused(null)}
                />
                <button type="button" className="pg-eye" onClick={() => setShowPass(!showPass)}>
                  {showPass
                    ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={{
                display:"flex", alignItems:"center", gap:10,
                background:"#FEF2F2", border:"2px solid #DC2626",
                borderRadius:12, padding:"11px 14px",
                boxShadow:"3px 3px 0px 0px #DC2626",
                color:"#B91C1C", fontSize:13, fontWeight:600,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {error}
              </div>
            )}

            {/* Submit */}
            <button type="submit" className="pg-btn" disabled={loading}>
              {loading
                ? <div style={{ width:18, height:18, borderRadius:"50%", border:"2.5px solid rgba(255,255,255,.4)", borderTopColor:"#fff", animation:"spinCW .75s linear infinite" }} />
                : <>
                    Đăng nhập
                    <span className="icon-dot">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </>
              }
            </button>
          </form>

          {/* Footer hint */}
          <div style={{
            marginTop:22, padding:"12px 14px",
            background:"var(--muted)",
            border:"2px solid var(--border)", borderRadius:14,
            display:"flex", alignItems:"flex-start", gap:10,
          }}>
            <div style={{
              width:30, height:30, borderRadius:9, flexShrink:0,
              background:"var(--tertiary)", border:"2px solid var(--fg)",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--fg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <p style={{ fontSize:12, color:"#475569", fontWeight:500, lineHeight:1.65, margin:0 }}>
              Quên mật khẩu? Liên hệ <strong style={{ color:"var(--fg)" }}>IT Support PhongNH5</strong> hoặc gọi ext. <strong style={{ color:"var(--fg)" }}>033.999.0014</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
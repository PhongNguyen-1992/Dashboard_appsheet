import { useState } from "react";
import type { User } from "../App.tsx";


// ── Danh sách tài khoản ──────────────────────────────────────────
const USERS: (User & { password: string })[] = [
  { username: "admin",     password: "admin",     role: "Quản trị viên", access: "all"       },
  { username: "doitruong", password: "doitruong", role: "Đội trưởng",    access: "analytics" },
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
      fontFamily: "'Sora', sans-serif",
      background: "#f0f3fa",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spin     { to{transform:rotate(360deg)} }
        @keyframes orb1     { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(30px,-20px) scale(1.06)} 70%{transform:translate(-15px,25px) scale(0.96)} }
        @keyframes orb2     { 0%,100%{transform:translate(0,0)} 35%{transform:translate(-25px,15px)} 70%{transform:translate(20px,-20px)} }
        @keyframes scanline { 0%{top:-60px} 100%{top:110%} }
        @keyframes shimmer  { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.15)} }
        @keyframes checkIn  { from{stroke-dashoffset:30} to{stroke-dashoffset:0} }

        .lp-input {
          width: 100%;
          padding: 13px 16px 13px 44px;
          background: #f8fafc;
          border: 1.5px solid #e2eaf8;
          border-radius: 12px;
          color: #0f172a;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color .2s, box-shadow .2s, background .2s;
        }
        .lp-input::placeholder { color: #c0cce4; }
        .lp-input:hover  { border-color: #c5d4f0; background: #f4f7fd; }
        .lp-input:focus  {
          border-color: #e8271a;
          background: #fff;
          box-shadow: 0 0 0 3.5px rgba(232,39,26,.09);
        }
        .lp-input.has-right { padding-right: 46px; }
        .lp-input.err { border-color: #fca5a5; }

        .lp-btn {
          width: 100%;
          padding: 14.5px;
          border: none;
          border-radius: 13px;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          letter-spacing: .03em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          position: relative;
          overflow: hidden;
          transition: transform .2s, box-shadow .2s, background-position .4s;
          background: linear-gradient(130deg, #0a2158 0%, #1e40af 45%, #c8201a 100%);
          background-size: 200% 100%;
          background-position: 0% 0%;
          color: #fff;
          box-shadow: 0 6px 24px rgba(10,33,88,.26), 0 2px 8px rgba(200,32,26,.16);
          margin-top: 4px;
        }
        .lp-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,.13) 0%, transparent 55%);
          pointer-events: none;
        }
        .lp-btn .shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,.14) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 2.2s linear infinite;
          pointer-events: none;
        }
        .lp-btn:hover:not(:disabled) {
          background-position: 100% 0%;
          transform: translateY(-1.5px);
          box-shadow: 0 10px 32px rgba(10,33,88,.3), 0 4px 12px rgba(200,32,26,.24);
        }
        .lp-btn:active:not(:disabled) { transform: translateY(0); box-shadow: 0 4px 16px rgba(10,33,88,.22); }
        .lp-btn:disabled {
          background: #e8edf7;
          color: #94a3b8;
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }
        .lp-btn.success {
          background: linear-gradient(130deg, #15803d, #16a34a) !important;
          box-shadow: 0 6px 24px rgba(21,128,61,.32) !important;
          background-size: 100% 100% !important;
        }

        .eye-btn {
          position: absolute; right: 13px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: #94a3b8; padding: 4px; line-height: 0; border-radius: 6px;
          transition: color .18s;
        }
        .eye-btn:hover { color: #475569; }

        .left-panel { display: none; }
        @media (min-width: 860px) { .left-panel { display: flex !important; } }
      `}</style>

      {/* ── LEFT PANEL ── */}
      <div
        className="left-panel"
        style={{
          width: "44%",
          flexDirection: "column",
          background: "linear-gradient(150deg, #06102e 0%, #0a1e4e 40%, #0d2460 65%, #1a0608 100%)",
          padding: "40px 38px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orbs */}
        {[
          { w:360, h:360, top:-90, right:-110, bg:"radial-gradient(circle,rgba(232,39,26,.32) 0%,transparent 70%)", anim:"orb1 9s ease-in-out infinite" },
          { w:220, h:220, bottom:-60, left:-70, bg:"radial-gradient(circle,rgba(26,58,143,.55) 0%,transparent 70%)", anim:"orb2 12s ease-in-out infinite" },
          { w:140, h:140, top:"42%", left:"38%", bg:"radial-gradient(circle,rgba(232,39,26,.12) 0%,transparent 70%)", anim:"orb1 7s ease-in-out infinite 1.5s" },
        ].map((o, i) => (
          <div key={i} style={{
            position:"absolute", borderRadius:"50%",
            width:o.w, height:o.h,
            top:(o as any).top, bottom:(o as any).bottom,
            left:(o as any).left, right:(o as any).right,
            background:o.bg, animation:o.anim, pointerEvents:"none",
          }} />
        ))}

        {/* Grid */}
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:"linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px)",
          backgroundSize:"44px 44px",
        }} />

        {/* Scanline */}
        <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
          <div style={{
            position:"absolute", left:0, right:0, height:50,
            background:"linear-gradient(to bottom,transparent,rgba(232,39,26,.045),transparent)",
            animation:"scanline 7s linear infinite",
          }} />
        </div>

        {/* Brand */}
        <div style={{ display:"flex", alignItems:"center", gap:13, position:"relative", zIndex:2 }}>
          <div style={{
            width:44, height:44, borderRadius:12, overflow:"hidden",
            background:"#fff", display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 0 0 1px rgba(232,39,26,.25), 0 6px 22px rgba(232,39,26,.28)",
            flexShrink:0, position:"relative",
          }}>
            <div style={{
              position:"absolute", inset:-5, borderRadius:17,
              border:"1.5px solid rgba(232,39,26,.35)",
              animation:"pulse 3s ease-in-out infinite",
            }} />
            {/* FPT Logo text fallback */}
            <span style={{ fontSize:11, fontWeight:800, color:"#e8271a", position:"relative", zIndex:1 }}>FPT</span>
          </div>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:"#fff", lineHeight:1.15 }}>Chi Nhánh Sài Gòn 01</div>
            <div style={{ fontSize:10, color:"rgba(255,255,255,.35)", letterSpacing:".16em", textTransform:"uppercase", marginTop:2 }}>FPT Telecom</div>
          </div>
        </div>

        {/* Center copy */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", position:"relative", zIndex:2 }}>
          <div style={{ fontSize:10, fontWeight:600, color:"#ff6b5b", letterSpacing:".2em", textTransform:"uppercase", marginBottom:14, opacity:.85 }}>
            Hệ thống nội bộ
          </div>
          <div style={{ fontSize:33, fontWeight:800, color:"#fff", lineHeight:1.18, marginBottom:16 }}>
            Quản lý<br />
            <span style={{
              background:"linear-gradient(90deg,#ff6b5b,#ffb347)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>Sài Gòn 01</span>
          </div>
          <p style={{ fontSize:13, color:"rgba(255,255,255,.42)", lineHeight:1.9, maxWidth:270, fontFamily:"'DM Sans',sans-serif" }}>
            Nền tảng quản lý nghiệp vụ tập trung — cấp phát thiết bị, kiểm soát tồn kho và xác minh dữ liệu theo thời gian thực.
          </p>

          {/* Feature pills */}
          <div style={{ display:"flex", flexDirection:"column", gap:9, marginTop:26 }}>
            {[
              "Cấp phát & thu hồi thiết bị",
              "Kiểm soát tồn kho theo thời gian",
              "Báo cáo & phân tích chi nhánh",
            ].map((t, i) => (
              <div key={i} style={{
                display:"flex", alignItems:"center", gap:10,
                background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)",
                borderRadius:10, padding:"9px 14px",
                fontSize:12, color:"rgba(255,255,255,.6)",
                fontFamily:"'DM Sans',sans-serif", backdropFilter:"blur(4px)",
              }}>
                <div style={{ width:6, height:6, borderRadius:"50%", background:"#ff6b5b", flexShrink:0, boxShadow:"0 0 8px #ff6b5b" }} />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop:"1px solid rgba(255,255,255,.07)", paddingTop:14, position:"relative", zIndex:2 }}>
          <span style={{ fontSize:10.5, color:"rgba(255,255,255,.22)", fontFamily:"'DM Sans',sans-serif" }}>
            © 2025 FPT Telecom — Internal Tools v2.1
          </span>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{
        flex:1, display:"flex", alignItems:"center", justifyContent:"center",
        padding:"32px 24px", position:"relative", overflow:"hidden",
        background:"linear-gradient(160deg,#ffffff 0%,#f7f9ff 100%)",
      }}>
        {/* Background blobs */}
        <div style={{ position:"absolute", top:-60, right:-60, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle,rgba(232,39,26,.055) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-40, left:-40, width:180, height:180, borderRadius:"50%", background:"radial-gradient(circle,rgba(10,33,88,.05) 0%,transparent 70%)", pointerEvents:"none" }} />

        <div style={{
          width:"100%", maxWidth:390,
          background:"#fff",
          border:"1px solid rgba(10,33,88,.08)",
          borderRadius:20,
          padding:"40px 36px",
          boxShadow:"0 8px 48px rgba(10,33,88,.10), 0 1px 3px rgba(10,33,88,.06)",
          animation:"fadeUp .5s cubic-bezier(.22,.68,0,1.2) both",
          position:"relative", zIndex:1,
        }}>
          {/* Card header brand */}
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:28 }}>
            <div style={{
              width:37, height:37, borderRadius:10, overflow:"hidden",
              background:"#fff", border:"1.5px solid #e8edf7",
              display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
            }}>
              <span style={{ fontSize:10, fontWeight:800, color:"#e8271a" }}>FPT</span>
            </div>
            <div>
              <div style={{ fontSize:13.5, fontWeight:700, color:"#0a2158" }}>Chi Nhánh Sài Gòn 01</div>
              <div style={{ fontSize:10, color:"#94a3b8", letterSpacing:".07em", fontFamily:"'DM Sans',sans-serif" }}>FPT TELECOM</div>
            </div>
          </div>

          {/* Status badge */}
          <div style={{
            display:"inline-flex", alignItems:"center", gap:7,
            background:"rgba(232,39,26,.07)", border:"1px solid rgba(232,39,26,.14)",
            borderRadius:20, padding:"5px 12px 5px 8px", marginBottom:18,
          }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:"#e8271a", boxShadow:"0 0 8px rgba(232,39,26,.5)", animation:"pulse 2.5s ease-in-out infinite" }} />
            <span style={{ fontSize:11, fontWeight:600, color:"#e8271a", letterSpacing:".04em", fontFamily:"'DM Sans',sans-serif" }}>Hệ thống đang hoạt động</span>
          </div>

          <h1 style={{ fontSize:25, fontWeight:800, color:"#0a2158", marginBottom:5 }}>Đăng nhập</h1>
          <p style={{ fontSize:13, color:"#94a3b8", marginBottom:26, fontFamily:"'DM Sans',sans-serif" }}>Vui lòng nhập thông tin tài khoản của bạn</p>

          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:18 }}>
            {/* Username */}
            <div>
              <label style={{ display:"block", fontSize:11.5, fontWeight:600, color:"#475569", letterSpacing:".05em", textTransform:"uppercase", marginBottom:8 }}>
                Tài khoản
              </label>
              <div style={{ position:"relative" }}>
                <svg style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", width:16, height:16, pointerEvents:"none", color: focused==="user" ? "#e8271a" : "#94a3b8", transition:"color .2s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <input
                  className={`lp-input`}
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
              <label style={{ display:"block", fontSize:11.5, fontWeight:600, color:"#475569", letterSpacing:".05em", textTransform:"uppercase", marginBottom:8 }}>
                Mật khẩu
              </label>
              <div style={{ position:"relative" }}>
                <svg style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", width:16, height:16, pointerEvents:"none", color: focused==="pass" ? "#e8271a" : "#94a3b8", transition:"color .2s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  className={`lp-input has-right${error ? " err" : ""}`}
                  type={showPass ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onFocus={() => setFocused("pass")}
                  onBlur={() => setFocused(null)}
                />
                <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)}>
                  {showPass
                    ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={{
                display:"flex", alignItems:"center", gap:10,
                background:"#fff5f5", border:"1px solid #fecaca",
                borderRadius:10, padding:"11px 14px",
                color:"#dc2626", fontSize:13, fontFamily:"'DM Sans',sans-serif",
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {error}
              </div>
            )}

            {/* Submit */}
            <button type="submit" className="lp-btn" disabled={loading}>
              <div className="shimmer" />
              {loading
                ? <div style={{ width:18, height:18, borderRadius:"50%", border:"2.5px solid rgba(148,163,184,.4)", borderTopColor:"#e2e8f0", animation:"spin .75s linear infinite" }} />
                : <>
                    Đăng nhập
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                      <polyline points="10 17 15 12 10 7"/>
                      <line x1="15" y1="12" x2="3" y2="12"/>
                    </svg>
                  </>
              }
            </button>
          </form>

          {/* Footer hint */}
          <div style={{
            marginTop:22, padding:"12px 14px",
            background:"linear-gradient(135deg,#f0f4ff,#f7f9ff)",
            border:"1px solid #e0e7ff", borderRadius:11,
            display:"flex", alignItems:"flex-start", gap:10,
          }}>
            <div style={{
              width:28, height:28, borderRadius:8, flexShrink:0,
              background:"linear-gradient(135deg,#0a2158,#1e40af)",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <p style={{ fontSize:12, color:"#475569", fontFamily:"'DM Sans',sans-serif", lineHeight:1.65, margin:0 }}>
              Quên mật khẩu? Liên hệ <strong style={{ color:"#0a2158" }}>IT Support PhongNH5</strong> hoặc gọi ext. <strong style={{ color:"#0a2158" }}>033.999.0014</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
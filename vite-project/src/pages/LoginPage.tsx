import { useState } from "react";
import type { User } from "../App";

const USERS = [
  { username: "admin", password: "admin", role: "Quản trị viên" },
];

interface Props {
  onLogin: (user: User) => void;
}

export default function LoginPage({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      const found = USERS.find(
        (u) => u.username === username && u.password === password
      );
      if (found) {
        onLogin({ username: found.username, role: found.role });
      } else {
        setError("Tài khoản hoặc mật khẩu không đúng.");
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="login-root">
      <div className="login-left">
        <div className="login-brand">
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="brand-name">Team Phong</span>
        </div>
        <div className="login-illustration">
          <div className="ill-circle c1" />
          <div className="ill-circle c2" />
          <div className="ill-circle c3" />
          <div className="ill-text">
            <p className="ill-heading">Hệ thống quản lý nội bộ</p>
            <p className="ill-sub">Quản lý cấp phát thiết bị, tồn kho và xác minh nghiệp vụ tập trung.</p>
          </div>
          <div className="feature-pills">
            <span className="pill">📦 Cấp đồ</span>
            <span className="pill">🔍 Xác minh</span>
            <span className="pill">📊 Báo cáo</span>
            <span className="pill">🏥 Recare</span>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <div className="login-header">
            <h1>Đăng nhập</h1>
            <p>Vui lòng nhập thông tin tài khoản của bạn</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="field-group">
              <label>Tài khoản</label>
              <div className="input-wrap">
                <span className="input-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Nhập tài khoản..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
              </div>
            </div>

            <div className="field-group">
              <label>Mật khẩu</label>
              <div className="input-wrap">
                <span className="input-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </span>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)}>
                  {showPass ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="error-msg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {error}
              </div>
            )}

            <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
              {loading ? (
                <span className="spinner" />
              ) : (
                <>Đăng nhập</>
              )}
            </button>
          </form>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap');
        .login-root {
          display: flex; min-height: 100vh; font-family: 'Be Vietnam Pro', sans-serif;
        }
        .login-left {
          width: 44%; background: #1a1a2e; display: flex; flex-direction: column;
          padding: 32px; position: relative; overflow: hidden;
        }
        .login-brand { display: flex; align-items: center; gap: 10px; }
        .brand-icon { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg,#f97316,#ea580c); display:flex;align-items:center;justify-content:center; }
        .brand-name { font-size: 16px; font-weight: 700; color: #fff; }
        .login-illustration { flex: 1; display: flex; flex-direction: column; justify-content: center; position: relative; }
        .ill-circle { position: absolute; border-radius: 50%; opacity: 0.08; }
        .c1 { width: 320px; height: 320px; background: #f97316; top: -60px; right: -100px; }
        .c2 { width: 200px; height: 200px; background: #7c3aed; bottom: 40px; left: -60px; }
        .c3 { width: 120px; height: 120px; background: #06b6d4; top: 40%; right: 20px; }
        .ill-text { position: relative; z-index: 1; }
        .ill-heading { font-size: 26px; font-weight: 700; color: #fff; line-height: 1.3; margin-bottom: 12px; }
        .ill-sub { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.7; max-width: 300px; }
        .feature-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; position: relative; z-index: 1; }
        .pill { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); font-size: 12px; padding: 6px 14px; border-radius: 20px; }
        .login-right {
          flex: 1; background: #f5f4f1; display: flex; align-items: center; justify-content: center; padding: 40px;
        }
        .login-card { width: 100%; max-width: 380px; }
        .login-header { margin-bottom: 32px; }
        .login-header h1 { font-size: 26px; font-weight: 700; color: #1a1a2e; margin-bottom: 6px; }
        .login-header p { font-size: 14px; color: #888; }
        .login-form { display: flex; flex-direction: column; gap: 20px; }
        .field-group { display: flex; flex-direction: column; gap: 7px; }
        .field-group label { font-size: 13px; font-weight: 600; color: #444; }
        .input-wrap { display: flex; align-items: center; background: #fff; border: 1px solid #e4e2dc; border-radius: 10px; padding: 0 14px; gap: 10px; transition: border-color 0.15s, box-shadow 0.15s; }
        .input-wrap:focus-within { border-color: #f97316; box-shadow: 0 0 0 3px rgba(249,115,22,0.12); }
        .input-icon { color: #aaa; display:flex;align-items:center; flex-shrink:0; }
        .input-wrap input { flex: 1; border: none; outline: none; padding: 12px 0; font-size: 14px; font-family: inherit; background: transparent; color: #1a1a2e; }
        .input-wrap input::placeholder { color: #bbb; }
        .eye-btn { background: none; border: none; cursor: pointer; color: #aaa; display:flex;align-items:center; padding: 0; }
        .eye-btn:hover { color: #666; }
        .error-msg { display:flex;align-items:center;gap:6px; font-size:13px; color:#dc2626; background:#fef2f2; border:1px solid #fecaca; padding:10px 14px; border-radius:8px; }
        .submit-btn { background: linear-gradient(135deg,#f97316,#ea580c); color:#fff; border:none; border-radius:10px; padding:13px; font-size:15px; font-weight:600; cursor:pointer; font-family:inherit; transition:opacity 0.15s,transform 0.1s; display:flex;align-items:center;justify-content:center; min-height:46px; }
        .submit-btn:hover:not(:disabled) { opacity:0.9; }
        .submit-btn:active:not(:disabled) { transform:scale(0.98); }
        .submit-btn:disabled { opacity:0.7; cursor:not-allowed; }
        .spinner { width:18px;height:18px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin 0.7s linear infinite; }
        @keyframes spin { to { transform:rotate(360deg); } }
        .login-hint { margin-top:20px; text-align:center; font-size:12px; color:#aaa; }
        .login-hint code { background:#e8e6e0; padding:2px 6px; border-radius:4px; color:#555; font-size:12px; }
        @media(max-width:680px){.login-left{display:none;}.login-right{padding:24px;}}
      `}</style>
    </div>
  );
}
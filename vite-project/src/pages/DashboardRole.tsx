import { useState } from 'react';

import Analytics from './Analytics';
import type { User } from '../types.ts';

interface Props {
  user: User;
  onLogout: () => void;
}

type Tab = 'capPhat' | 'xacMinh' | 'thongKe' | 'analytics' | 'recare';

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'capPhat',  label: 'Cấp phát thiết bị', icon: '📦' },
  { id: 'xacMinh',  label: 'Xác minh nghiệp vụ', icon: '🔍' },
  { id: 'thongKe',  label: 'Thống kê báo cáo',  icon: '📊' },
  { id: 'analytics',label: 'Phân Tích',          icon: '📈' },
  { id: 'recare',   label: 'Recare TK-BT',       icon: '💓' },
];

export default function DashboardRole({ user, onLogout }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('capPhat');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{ display:'flex', minHeight:'100vh', fontFamily:"'Barlow',sans-serif", background:'#f0f2f5' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Barlow+Condensed:wght@800;900&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        .nav-item {
          display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:10px;
          cursor:pointer; font-size:13.5px; font-weight:500; color:rgba(255,255,255,0.65);
          transition:all .18s; border:none; background:none; width:100%; text-align:left;
        }
        .nav-item:hover  { background:rgba(255,255,255,0.09); color:#fff; }
        .nav-item.active { background:rgba(244,120,28,0.22); color:#fff; }
        .nav-item.active .nav-dot { background:#f4781c; }
        .nav-dot { width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,0.2); flex-shrink:0; transition:background .18s; }
      `}</style>

      {/* Sidebar */}
      <div style={{ width: sidebarOpen ? 240 : 64, background:'linear-gradient(180deg,#0a2158 0%,#0d1a3a 100%)', display:'flex', flexDirection:'column', transition:'width .25s', overflow:'hidden', flexShrink:0 }}>

        {/* Brand */}
        <div style={{ padding:'24px 16px 20px', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#f4781c,#e8271a)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, boxShadow:'0 4px 12px rgba(244,120,28,0.4)' }}>
              <span style={{ color:'#fff', fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:14 }}>FPT</span>
            </div>
            {sidebarOpen && (
              <div style={{ overflow:'hidden', whiteSpace:'nowrap' }}>
                <div style={{ color:'#fff', fontWeight:700, fontSize:14 }}>FPT Telecom</div>
                <div style={{ color:'rgba(255,255,255,0.38)', fontSize:10, letterSpacing:'.08em', marginTop:1 }}>Sài Gòn 1</div>
              </div>
            )}
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex:1, padding:'12px 8px', display:'flex', flexDirection:'column', gap:2 }}>
          {TABS.map(t => (
            <button key={t.id} className={`nav-item${activeTab === t.id ? ' active' : ''}`} onClick={() => setActiveTab(t.id)}>
              <span style={{ fontSize:16, flexShrink:0 }}>{t.icon}</span>
              {sidebarOpen && <span style={{ overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis' }}>{t.label}</span>}
              {sidebarOpen && <span className="nav-dot" style={{ marginLeft:'auto' }} />}
            </button>
          ))}
        </nav>

        {/* User + logout */}
        <div style={{ padding:'12px 8px', borderTop:'1px solid rgba(255,255,255,0.07)' }}>
          {sidebarOpen && (
            <div style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 10px', marginBottom:8 }}>
              <div style={{ width:30, height:30, borderRadius:'50%', background:'linear-gradient(135deg,#f4781c,#e8271a)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700, color:'#fff', flexShrink:0 }}>
                {user.username[0].toUpperCase()}
              </div>
              <div style={{ overflow:'hidden' }}>
                <div style={{ color:'#fff', fontSize:13, fontWeight:600, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{user.username}</div>
                <div style={{ color:'rgba(255,255,255,0.4)', fontSize:11, whiteSpace:'nowrap' }}>{user.role}</div>
              </div>
            </div>
          )}
          <button className="nav-item" onClick={onLogout} style={{ color:'rgba(255,120,120,0.8)' }}>
            <span style={{ fontSize:16 }}>🚪</span>
            {sidebarOpen && <span>Đăng xuất</span>}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden' }}>

        {/* Topbar */}
        <div style={{ background:'#fff', borderBottom:'1px solid #e8ecf0', padding:'0 24px', height:56, display:'flex', alignItems:'center', gap:14 }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:20, color:'#64748b', padding:'4px 6px', borderRadius:8 }}>☰</button>
          <div>
            <span style={{ fontSize:16, fontWeight:700, color:'#0a2158' }}>
              {TABS.find(t => t.id === activeTab)?.icon} {TABS.find(t => t.id === activeTab)?.label}
            </span>
          </div>
          <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ background:'rgba(244,120,28,0.1)', border:'1px solid rgba(244,120,28,0.25)', color:'#c2570a', fontSize:11.5, fontWeight:700, padding:'3px 10px', borderRadius:100 }}>
              {user.role}
            </div>
          </div>
        </div>

        {/* Page body */}
        <div style={{ flex:1, overflow:'auto', padding:24 }}>
          {activeTab === 'analytics'
            ? <Analytics user={user} onLogout={onLogout} embedded />
            : <PlaceholderPage tab={TABS.find(t => t.id === activeTab)!} />
          }
        </div>
      </div>
    </div>
  );
}

function PlaceholderPage({ tab }: { tab: { icon: string; label: string } }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:400, gap:12 }}>
      <div style={{ fontSize:56 }}>{tab.icon}</div>
      <div style={{ fontSize:22, fontWeight:700, color:'#0a2158' }}>{tab.label}</div>
      <div style={{ color:'#94a3b8', fontSize:14 }}>Nội dung trang đang được phát triển</div>
    </div>
  );
}
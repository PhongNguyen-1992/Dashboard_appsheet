import type { User } from "../types.ts";


interface Props {
  user: User;
  onLogout: () => void;
  embedded?: boolean; // true khi render bên trong Dashboard
}

const MOCK_DATA = [
  { label: 'Thiết bị đã cấp', value: '1,284', change: '+12%', up: true,  icon: '📦' },
  { label: 'Đang sử dụng',    value: '1,107', change: '+8%',  up: true,  icon: '✅' },
  { label: 'Hỏng / Bảo hành', value: '43',    change: '-3%',  up: false, icon: '🔧' },
  { label: 'Chờ thu hồi',     value: '134',   change: '+5%',  up: false, icon: '⏳' },
];

const RECENT = [
  { id: 'TB001', name: 'Router WiFi 6',   user: 'Nguyễn Văn A', date: '15/05/2025', status: 'Đang dùng' },
  { id: 'TB002', name: 'ONT GPON',        user: 'Trần Thị B',   date: '14/05/2025', status: 'Đang dùng' },
  { id: 'TB003', name: 'Switch 8 port',   user: 'Lê Minh C',    date: '13/05/2025', status: 'Hỏng'      },
  { id: 'TB004', name: 'Cáp quang 50m',   user: 'Phạm Thị D',   date: '12/05/2025', status: 'Chờ thu'   },
  { id: 'TB005', name: 'Router WiFi 6',   user: 'Hoàng Văn E',  date: '11/05/2025', status: 'Đang dùng' },
];

const STATUS_COLOR: Record<string, { bg: string; color: string }> = {
  'Đang dùng': { bg:'rgba(34,197,94,0.12)',  color:'#16a34a' },
  'Hỏng':      { bg:'rgba(239,68,68,0.12)',  color:'#dc2626' },
  'Chờ thu':   { bg:'rgba(251,191,36,0.12)', color:'#b45309' },
};

export default function Analytics({ user, onLogout, embedded = false }: Props) {
  const content = (
    <div style={{ fontFamily:"'Barlow',sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap'); *{box-sizing:border-box;margin:0;padding:0}`}</style>

      {/* Header chỉ hiện khi standalone (doitruong vào thẳng) */}
      {!embedded && (
        <div style={{ background:'linear-gradient(135deg,#0a2158,#1a3a8f)', padding:'20px 28px', display:'flex', alignItems:'center', gap:14, marginBottom:24, borderRadius:16 }}>
          <div style={{ width:42, height:42, borderRadius:12, background:'linear-gradient(135deg,#f4781c,#e8271a)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <span style={{ color:'#fff', fontWeight:900, fontSize:15, fontFamily:"'Barlow Condensed',sans-serif" }}>FPT</span>
          </div>
          <div style={{ flex:1 }}>
            <div style={{ color:'#fff', fontWeight:700, fontSize:15 }}>FPT Telecom — Sài Gòn 1</div>
            <div style={{ color:'rgba(255,255,255,0.45)', fontSize:12 }}>Xin chào, {user.username} · {user.role}</div>
          </div>
          <button onClick={onLogout} style={{ background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', color:'rgba(255,255,255,0.7)', padding:'7px 16px', borderRadius:10, cursor:'pointer', fontSize:13, fontFamily:'inherit' }}>
            🚪 Đăng xuất
          </button>
        </div>
      )}

      {/* Title */}
      <div style={{ marginBottom:20 }}>
        <div style={{ fontSize:20, fontWeight:800, color:'#0a2158', marginBottom:4 }}>📈 Phân Tích</div>
        <div style={{ color:'#94a3b8', fontSize:13.5 }}>Tổng quan hiệu suất cấp phát & sử dụng thiết bị — Chi Nhánh Sài Gòn 1</div>
      </div>

      {/* Metric cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:14, marginBottom:24 }}>
        {MOCK_DATA.map(d => (
          <div key={d.label} style={{ background:'#fff', border:'1px solid #e8ecf0', borderRadius:14, padding:'18px 20px', boxShadow:'0 2px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
              <span style={{ fontSize:13, color:'#64748b', fontWeight:500 }}>{d.label}</span>
              <span style={{ fontSize:20 }}>{d.icon}</span>
            </div>
            <div style={{ fontSize:28, fontWeight:800, color:'#0a2158', letterSpacing:'-.02em', marginBottom:6 }}>{d.value}</div>
            <div style={{ display:'flex', alignItems:'center', gap:4 }}>
              <span style={{ fontSize:12, fontWeight:600, color: d.up ? '#16a34a' : '#dc2626' }}>{d.change}</span>
              <span style={{ fontSize:11, color:'#94a3b8' }}>so tháng trước</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent table */}
      <div style={{ background:'#fff', border:'1px solid #e8ecf0', borderRadius:14, overflow:'hidden', boxShadow:'0 2px 12px rgba(0,0,0,0.05)' }}>
        <div style={{ padding:'16px 20px', borderBottom:'1px solid #f1f5f9', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ fontWeight:700, fontSize:15, color:'#0a2158' }}>Cấp phát gần đây</div>
          <div style={{ fontSize:12, color:'#94a3b8' }}>5 bản ghi mới nhất</div>
        </div>
        <div style={{ overflowX:'auto' }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead>
              <tr style={{ background:'#f8fafc' }}>
                {['Mã TB','Tên thiết bị','Người dùng','Ngày cấp','Trạng thái'].map(h => (
                  <th key={h} style={{ padding:'10px 16px', textAlign:'left', fontWeight:600, color:'#64748b', fontSize:12, letterSpacing:'.04em', borderBottom:'1px solid #f1f5f9', whiteSpace:'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RECENT.map((r, i) => (
                <tr key={r.id} style={{ borderBottom: i < RECENT.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                  <td style={{ padding:'12px 16px', fontFamily:'monospace', color:'#475569', fontSize:12.5 }}>{r.id}</td>
                  <td style={{ padding:'12px 16px', fontWeight:600, color:'#0a2158' }}>{r.name}</td>
                  <td style={{ padding:'12px 16px', color:'#475569' }}>{r.user}</td>
                  <td style={{ padding:'12px 16px', color:'#94a3b8' }}>{r.date}</td>
                  <td style={{ padding:'12px 16px' }}>
                    <span style={{ ...STATUS_COLOR[r.status], fontSize:12, fontWeight:600, padding:'3px 10px', borderRadius:100 }}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Standalone: bọc thêm layout ngoài
  if (!embedded) {
    return (
      <div style={{ minHeight:'100vh', background:'#f0f2f5', padding:24 }}>
        {content}
      </div>
    );
  }

  return content;
}
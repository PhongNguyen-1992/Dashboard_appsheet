import { useState } from "react";
import type { User } from "../App";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Alert,
  Paper,
  Fade,
  Grow,
} from "@mui/material";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import MonitorHeartRoundedIcon from "@mui/icons-material/MonitorHeartRounded";

const USERS = [{ username: "admin", password: "admin", role: "Quản trị viên" }];

const FEATURES = [
  {
    icon: <InventoryRoundedIcon sx={{ fontSize: 16 }} />,
    label: "Cấp phát thiết bị",
  },
  {
    icon: <SearchRoundedIcon sx={{ fontSize: 16 }} />,
    label: "Xác minh nghiệp vụ",
  },
  {
    icon: <BarChartRoundedIcon sx={{ fontSize: 16 }} />,
    label: "Thống kê báo cáo",
  },
  {
    icon: <MonitorHeartRoundedIcon sx={{ fontSize: 16 }} />,
    label: "Recare TK-BT",
  },
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
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      const found = USERS.find(
        (u) => u.username === username && u.password === password,
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
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        background: "#f0f2f5",
      }}
    >
      {/* ── LEFT PANEL ── */}
      <Box
        sx={{
          width: { xs: 0, md: "46%" },
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          background:
            "linear-gradient(160deg, #0a2158 0%, #1a3a8f 55%, #e8271a 100%)",
          p: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative blobs */}
        {[
          { w: 380, h: 380, top: -80, right: -120, bg: "rgba(232,39,26,0.25)" },
          {
            w: 240,
            h: 240,
            bottom: 60,
            left: -80,
            bg: "rgba(255,255,255,0.06)",
          },
          {
            w: 140,
            h: 140,
            top: "42%",
            right: 30,
            bg: "rgba(255,255,255,0.04)",
          },
        ].map((b, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              borderRadius: "50%",
              width: b.w,
              height: b.h,
              top: b.top,
              bottom: (b as any).bottom,
              left: (b as any).left,
              right: (b as any).right,
              background: b.bg,
              filter: "blur(2px)",
            }}
          />
        ))}

        {/* Brand */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "10px",
              background: "linear-gradient(135deg,#e8271a,#ff6b5b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 14px rgba(232,39,26,0.45)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1,
              }}
            >
              Team Phong
            </Typography>
            <Typography
              sx={{
                fontSize: 10,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              FPT Telecom
            </Typography>
          </Box>
        </Box>

        {/* Main copy */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* FPT logo text style */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 700,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Hệ thống quản lý
            </Typography>
            <Typography
              sx={{
                fontSize: 34,
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Team Phong
              <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg,#ff6b5b,#ffa07a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                FPT Telecom
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: 13.5,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                maxWidth: 300,
              }}
            >
              Quản lý cấp phát thiết bị, tồn kho và xác minh nghiệp vụ tập trung
              — nhanh, chính xác, hiệu quả.
            </Typography>
          </Box>

          {/* Feature pills */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {FEATURES.map((f, i) => (
              <Grow in timeout={400 + i * 120} key={i}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    background: "rgba(255,255,255,0.09)",
                    border: "1px solid rgba(255,255,255,0.13)",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 12,
                    fontWeight: 500,
                    px: 1.5,
                    py: 0.8,
                    borderRadius: "20px",
                    backdropFilter: "blur(6px)",
                    transition: "all 0.2s",
                    "&:hover": {
                      background: "rgba(255,255,255,0.16)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  {f.icon}
                  {f.label}
                </Box>
              </Grow>
            ))}
          </Box>
        </Box>

        {/* Bottom strip */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            pt: 2,
          }}
        >
          <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            © 2025 FPT Telecom — Internal Tools
          </Typography>
        </Box>
      </Box>

      {/* ── RIGHT PANEL ── */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 3, md: 5 },
          background: "linear-gradient(135deg, #f0f2f5 0%, #e8ecf3 100%)",
        }}
      >
        <Fade in timeout={500}>
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: 400,
              p: { xs: 3.5, md: 4.5 },
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 8px 40px rgba(10,33,88,0.10)",
              background: "#fff",
            }}
          >
            {/* Card header */}
            <Box sx={{ mb: 4 }}>
              {/* Mobile brand */}
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  gap: 1.2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "9px",
                    background: "linear-gradient(135deg,#e8271a,#ff6b5b)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </Box>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 700, color: "#0a2158" }}
                >
                  Team Phong
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#0a2158",
                  mb: 0.5,
                }}
              >
                Đăng nhập
              </Typography>
              <Typography sx={{ fontSize: 13.5, color: "#94a3b8" }}>
                Vui lòng nhập thông tin tài khoản của bạn
              </Typography>
            </Box>

            {/* Form */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "#475569",
                    mb: 0.8,
                  }}
                >
                  Tài khoản
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Nhập tài khoản..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                  onFocus={() => setFocused("user")}
                  onBlur={() => setFocused(null)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineRoundedIcon
                            sx={{
                              fontSize: 18,
                              color: focused === "user" ? "#e8271a" : "#94a3b8",
                              transition: "color 0.2s",
                            }}
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={inputSx}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "#475569",
                    mb: 0.8,
                  }}
                >
                  Mật khẩu
                </Typography>
                <TextField
                  fullWidth
                  type={showPass ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("pass")}
                  onBlur={() => setFocused(null)}
                slotProps={{
  input: {
    startAdornment: (
      <InputAdornment position="start">
        <LockOutlinedIcon sx={{
          fontSize: 18,
          color: focused === "pass" ? "#e8271a" : "#94a3b8",
          transition: "color 0.2s",
        }} />
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={() => setShowPass(!showPass)} edge="end" size="small">
          {showPass
            ? <VisibilityOffRoundedIcon sx={{ fontSize: 17, color: "#94a3b8" }} />
            : <VisibilityRoundedIcon   sx={{ fontSize: 17, color: "#94a3b8" }} />}
        </IconButton>
      </InputAdornment>
    ),
  }
}}
                  sx={inputSx}
                />
              </Box>

              {error && (
                <Fade in>
                  <Alert
                    severity="error"
                    sx={{
                      fontSize: 13,
                      borderRadius: "10px",
                      background: "#fff5f5",
                      border: "1px solid #fecaca",
                      color: "#dc2626",
                      py: 0.5,
                      "& .MuiAlert-icon": { color: "#dc2626" },
                    }}
                  >
                    {error}
                  </Alert>
                </Fade>
              )}

              <Button
                type="submit"
                fullWidth
                disabled={loading}
                endIcon={
                  !loading && (
                    <LoginRoundedIcon sx={{ fontSize: "18px !important" }} />
                  )
                }
                sx={{
                  mt: 0.5,
                  py: 1.5,
                  borderRadius: "12px",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "none",
                  fontFamily: "inherit",
                  background: loading
                    ? "#e2e8f0"
                    : "linear-gradient(135deg, #0a2158 0%, #1a3a8f 50%, #e8271a 100%)",
                  color: loading ? "#94a3b8" : "#fff",
                  boxShadow: loading
                    ? "none"
                    : "0 4px 18px rgba(10,33,88,0.28)",
                  transition: "all 0.2s",
                  "&:hover:not(:disabled)": {
                    boxShadow: "0 6px 24px rgba(10,33,88,0.38)",
                    transform: "translateY(-1px)",
                  },
                  "&:active:not(:disabled)": { transform: "scale(0.98)" },
                }}
              >
                {loading ? (
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: "2px solid #cbd5e1",
                      borderTopColor: "#64748b",
                      animation: "spin 0.7s linear infinite",
                      "@keyframes spin": {
                        to: { transform: "rotate(360deg)" },
                      },
                    }}
                  />
                ) : (
                  "Đăng nhập"
                )}
              </Button>
            </Box>
            
          </Paper>
        </Fade>
      </Box>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap');`}</style>
    </Box>
  );
}

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    fontSize: 14,
    fontFamily: "'Be Vietnam Pro', sans-serif",
    background: "#f8fafc",
    "& fieldset": { borderColor: "#e2e8f0", borderWidth: "1.5px" },
    "&:hover fieldset": { borderColor: "#cbd5e1" },
    "&.Mui-focused fieldset": { borderColor: "#e8271a", borderWidth: "1.5px" },
  },
  "& .MuiOutlinedInput-input": {
    py: 1.5,
    "&::placeholder": { color: "#cbd5e1", opacity: 1 },
  },
};

import { Box, Typography, Button, Divider, Breadcrumbs } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import type { User } from "../App";

interface Props {
  label: string;
  user: User;
  onLogout: () => void;
}

export default function Topbar({ label, user, onLogout }: Props) {
  return (
    <Box sx={{
      height: 50, bgcolor: "#fff", borderBottom: "0.5px solid #e4e2dc",
      display: "flex", alignItems: "center", px: 2.5, gap: 1, flexShrink: 0,
    }}>
      <Breadcrumbs separator={<NavigateNextRoundedIcon sx={{ fontSize: 14, color: "#ccc" }} />}>
        <Typography sx={{ fontSize: 13, color: "#aaa" }}>Nghiệp vụ</Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e" }}>{label}</Typography>
      </Breadcrumbs>

      <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography sx={{ fontSize: 13, color: "#666", fontWeight: 500 }}>
          Xin chào, <Box component="strong" sx={{ color: "#1a1a2e" }}>{user.username}</Box>
        </Typography>

        <Divider orientation="vertical" flexItem sx={{ borderColor: "#e4e2dc" }} />

        <Button
          onClick={onLogout}
          size="small"
          startIcon={<LogoutRoundedIcon sx={{ fontSize: "14px !important" }} />}
          sx={{
            fontSize: 12, color: "#888", textTransform: "none", fontWeight: 500,
            px: 1, borderRadius: 1.5,
            "&:hover": { bgcolor: "#fef3ee", color: "#f97316" },
          }}
        >
          Đăng xuất
        </Button>
      </Box>
    </Box>
  );
}
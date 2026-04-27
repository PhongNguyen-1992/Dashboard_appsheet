import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";

export type User = { username: string; role: string };

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  return <DashboardLayout user={user} onLogout={() => setUser(null)} />;
}
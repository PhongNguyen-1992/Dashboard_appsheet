import type { User } from "../types.ts";


interface Props {
  user:     User;
  requires: User['access'][];
  children: React.ReactNode;
}

export default function ProtectedSection({ user, requires, children }: Props) {
  if (!requires.includes(user.access)) return null;
  return <>{children}</>;
}
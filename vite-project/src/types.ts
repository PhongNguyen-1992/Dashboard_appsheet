export type role = 'admin' | 'doitruong';

export interface User {
  username: string;
  role:     role;
  access:   'all' | 'analytics';
}

// Danh sách tài khoản — production nên dùng API
export const USERS: (User & { password: string })[] = [
  { username: 'admin',     password: 'admin',     role: 'admin',     access: 'all'       },
  { username: 'doitruong', password: 'doitruong', role: 'doitruong', access: 'analytics' },
];
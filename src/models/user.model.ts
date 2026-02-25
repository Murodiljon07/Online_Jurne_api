export type UserRole = "SUPER_ADMIN" | "TEACHER" | "STUDENT";

export interface User {
  id: string;
  fullName: string;
  phone: string;
  password: string;
  role: UserRole;
}

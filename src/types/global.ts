import { JwtPayload } from "jsonwebtoken"

export interface MyJwtPayload extends JwtPayload {
  id: number,
  email: string,
  email_is_verified: boolean;
}

export interface IUser {
  id?: number,
  name: string,
  phone: string,
  password: string,
  role?: 'user' | 'agent' | 'admin',
  avatar: string
}
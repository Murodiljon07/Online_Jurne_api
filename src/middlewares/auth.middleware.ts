import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserRole } from "../models/user.model";

const JWT_SECRET = "mysecretkey";

// Extend Request tipiga user qo‘shamiz
export interface AuthRequest extends Request {
  user?: { id: string; role: UserRole };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token topilmadi" });
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "Token topilmadi" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      role: UserRole;
    };
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token noto‘g‘ri" });
  }
};

// Role tekshirish middleware
export const allowRoles = (roles: UserRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "User topilmadi" });

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Sizda ruxsat yo‘q" });
    }

    next();
  };
};

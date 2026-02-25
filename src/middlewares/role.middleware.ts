import { Request, Response, NextFunction } from "express";
import { UserRole } from "../models/user.model";

// Hozircha test uchun headerdan role olamiz
export const allowRoles = (roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.headers.role as UserRole;

    if (!userRole) {
      return res.status(401).json({ message: "Role topilmadi" });
    }

    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Sizda ruxsat yo‘q" });
    }

    next();
  };
};

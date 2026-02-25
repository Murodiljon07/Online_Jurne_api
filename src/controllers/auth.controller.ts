import { Request, Response } from "express";
import { users } from "../models/user.storage";
import jwt from "jsonwebtoken";

const JWT_SECRET = "mysecretkey";

export const login = (req: Request, res: Response) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ message: "Phone va password kerak" });
  }

  const user = users.find((u) => u.phone === phone && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Noto‘g‘ri ma'lumot" });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
};

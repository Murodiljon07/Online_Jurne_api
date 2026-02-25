import { Request, Response } from "express";
import { users } from "../models/user.storage";
import { User } from "../models/user.model";
import { randomUUID } from "crypto";

export const createUser = (req: Request, res: Response) => {
  const { fullName, phone, password, role } = req.body;

  if (!fullName || !phone || !password || !role) {
    return res
      .status(400)
      .json({ message: "Barcha maydonlar to‘ldirilishi shart" });
  }

  const newUser: User = {
    id: randomUUID(),
    fullName,
    phone,
    password,
    role,
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

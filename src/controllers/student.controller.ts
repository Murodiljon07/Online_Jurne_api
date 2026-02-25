import { Request, Response } from "express";
import { students } from "../models/db";
import { Student } from "../models/student.model";
import { randomUUID } from "crypto";

export const createStudent = (req: Request, res: Response) => {
  const { fullName, phone, groupId } = req.body;

  if (!fullName || !phone || !groupId) {
    return res
      .status(400)
      .json({ message: "Barcha maydonlar to‘ldirilishi shart" });
  }

  const newStudent: Student = {
    id: randomUUID(),
    fullName,
    phone,
    groupId,
    monthlyPaymentPaid: false,
    coins: 0,
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
};

export const getStudents = (req: Request, res: Response) => {
  res.json(students);
};

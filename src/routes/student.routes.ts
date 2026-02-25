import { Router } from "express";
import { createStudent, getStudents } from "../controllers/student.controller";
import { authenticate, allowRoles } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  "/",
  authenticate,
  allowRoles(["SUPER_ADMIN", "TEACHER"]),
  createStudent,
);
router.get(
  "/",
  authenticate,
  allowRoles(["SUPER_ADMIN", "TEACHER"]),
  getStudents,
);

export default router;

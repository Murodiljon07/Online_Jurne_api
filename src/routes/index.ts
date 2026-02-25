import { Router } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import studentRoutes from "./student.routes";

const router = Router();

router.get("/", (req, res) => {
  res.send("Online Journal API ishlayapti 🚀");
});

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/students", studentRoutes);

export default router;

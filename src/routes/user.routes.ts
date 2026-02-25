import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller";
import { authenticate, allowRoles } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  "/",
  authenticate, // avval login token tekshiriladi
  allowRoles(["SUPER_ADMIN"]), // keyin role tekshiriladi
  createUser,
);

router.get("/", getUsers);

export default router;

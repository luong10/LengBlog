import express from "express";
import { singUp, logIn, logout } from "../controllers/auth.js";
const router = express.Router();

router.post("/sign-up", singUp);
router.post("/login", logIn);
router.post("/logout", logout);

export default router;

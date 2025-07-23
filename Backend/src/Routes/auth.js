import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../Controllers/AuthController.js";
import { protectRoute } from "../Middleware/authmiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", protectRoute, logout);
router.get("/check", protectRoute, checkAuth);
router.put("/update-profile", protectRoute, updateProfile);

export default router;

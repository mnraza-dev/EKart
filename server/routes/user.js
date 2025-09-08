import express from "express";
import { loginOrRegister } from "../controllers/user.js";
const router = express.Router();

router.get("/get-data", (req, res) => {
    res.status(200).json({ message: "Get user data route is working" });
});
router.post("/login", loginOrRegister);

export default router;

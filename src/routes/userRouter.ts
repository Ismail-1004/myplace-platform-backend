import { Router } from "express";
import userController from "../controllers/userController";

const router = Router()

router.get('/login', userController.login)

export default router; 
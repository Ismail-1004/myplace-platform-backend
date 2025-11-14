import { Router } from "express";
import userController from "../controllers/userController";
import { createUploadMiddleware } from "../middlewares/upload-middleware";
import authMiddleware from "../dtos/auth-middleware";

const router = Router()

const uploadAvatar = createUploadMiddleware("avatars");

router.post('/register', uploadAvatar.single('avatar'), userController.register)
router.post('/login', userController.login)
router.get('/', authMiddleware, userController.getAllUsers)

export default router; 
import { Router } from "express";
import userController from "../controllers/userController";
import { createUploadMiddleware } from "../middlewares/upload-middleware";

const router = Router()

const uploadAvatar = createUploadMiddleware("avatars");

router.post('/register', uploadAvatar.single('avatar'), userController.register)
router.get('/login', userController.login)

export default router; 
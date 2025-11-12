import { Router } from "express";
import UserRouter from './userRouter'

const router = Router()

router.use('/user', UserRouter)

export default router
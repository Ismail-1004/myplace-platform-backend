import { Router } from "express";
import UserRouter from './userRouter'
import ListingRouter from './listingsRouter' 

const router = Router()

router.use('/user', UserRouter)
router.use('/listings', ListingRouter)

export default router
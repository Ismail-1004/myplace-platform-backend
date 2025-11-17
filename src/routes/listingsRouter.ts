import { Router } from "express";
import listingsController from "../controllers/listingsController";
import authMiddleware from "../middlewares/auth-middleware";

const router = Router()

router.get('/', listingsController.getListings)
router.post('/create-draft', authMiddleware, listingsController.createDraft)

export default router
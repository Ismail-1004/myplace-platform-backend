import { Router } from "express";
import listingsController from "../controllers/listingsController";
import authMiddleware from "../middlewares/auth-middleware";
import { createUploadMiddleware } from "../middlewares/upload-middleware";

const router = Router()

const uploadMedia = createUploadMiddleware({ folder: 'temp' });

router.get('/', listingsController.getListings)
router.post('/create-draft', authMiddleware, listingsController.createDraft)
router.post('/:listingId/location', listingsController.addLocation)
router.post('/:listingId/apartment', listingsController.addApartment)
router.post('/:listingId/media', uploadMedia.array('files'), listingsController.addMedia)
router.post('/:listingId/features', listingsController.addFeatures)
router.post('/:listingId/amenities', listingsController.addAmenities)
router.post('/:listingId/details', listingsController.addDetails);
router.post('/:listingId/rules', listingsController.addOrUpdateRules);

export default router
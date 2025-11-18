import { Request, Response } from "express"
import listingsService from "../services/listingsService"

class ListingsController {
    async getListings(req: Request, res: Response) {
        try {
            const listings = await listingsService.getListings()
            res.json(listings)
        } catch (e) {
            throw e
        }
    }

    async createDraft(req: Request, res: Response) {
        try {
            const { isAgent, propertyType, dealType, rentPeriod } = req.body
            const userId = req.user.id;

            const draft = await listingsService.createDraft(userId, {
                isAgent,
                propertyType,
                dealType,
                rentPeriod
            })

            res.json(draft)
        } catch (e) {
            throw e
        }
    }

    async addLocation(req: Request, res: Response) {
        try {
            const { listingId } = req.params;
            const { address, lat, lng, metro } = req.body
            const location = await listingsService.addLocation(Number(listingId), { address, lat, lng, metro })
            res.json(location)
        } catch (e) {
            console.log(e);

            throw e
        }
    }

    async addApartment(req: Request, res: Response) {
        try {
            const { listingId } = req.params;
            const { rooms, totalArea, livingArea, kitchenArea, floor, totalFloors } = req.body

            const apartment = await listingsService.addApartment(Number(listingId), { rooms, totalArea, livingArea, kitchenArea, floor, totalFloors })

            res.json(apartment)
        } catch (e) {
            throw e
        }
    }

    async addMedia(req: Request, res: Response) {
        try {
            const { listingId } = req.params;
            const files = req.files as Express.Multer.File[]

            const media = await listingsService.addMedia(Number(listingId), files)

            res.json(media)
        } catch (e) {
            throw e
        }
    }

    async addFeatures(req: Request, res: Response) {
        try {
            const { listingId } = req.params;
            const { balcony, windowView, bathroomType, renovation, elevator, parking } = req.body;

            const features = await listingsService.addFeatures(Number(listingId), {
                balcony,
                windowView,
                bathroomType,
                renovation,
                elevator,
                parking
            })

            res.json(features)
        } catch (e) {
            throw e
        }
    }

    async addAmenities(req: Request, res: Response) {
        try {
            const { listingId } = req.params;
            const amenitiesData = req.body;

            const amenities = await listingsService.addAmenities(Number(listingId), amenitiesData);
            res.json(amenities);
        } catch (e) {
            throw e
        }
    }

    async addDetails(req: Request, res: Response) {
        try {
            const { listingId } = req.params;
            const { title, description } = req.body;

            const details = await listingsService.addDetails(Number(listingId), { title, description });
            res.json(details);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async addOrUpdateRules(req: Request, res: Response) {
        try {
            const { listingId } = req.params;
            const rulesData = req.body;

            const rules = await listingsService.addRules(Number(listingId), rulesData);
            res.json(rules);
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }
}

export default new ListingsController()
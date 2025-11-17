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

    async createDraft (req: Request, res: Response) {
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
}

export default new ListingsController()
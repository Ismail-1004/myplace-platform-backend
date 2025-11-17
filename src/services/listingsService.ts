import { Listing } from "../db/models"
import { IDraft } from '../types/real-estate'

class ListingsService {
    async getListings () {
        const listings = await Listing.findAll({ where: { status: 'published' } })
        return listings
    }

    async createDraft (userId: string, data: IDraft) {
        const listg = await Listing.create({ userId, ...data })
        return listg
    }
}

export default new ListingsService()
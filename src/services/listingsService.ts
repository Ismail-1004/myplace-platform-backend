import path from "path"
import fs from 'fs'
import { Amenities, Apartment, Features, Listing, Location, Media, Rules } from "../db/models/real-estate"
import ApiError from "../exceptions/api-error"
import { IAmenities, IApartment, IDetails, IDraft, IFeatures, ILocation, IRulesData } from '../types/real-estate'
import Details from "../db/models/real-estate/Details"

class ListingsService {
    async getListings() {
        const listings = await Listing.findAll({
            include: [Apartment, Features, Location, Media]
        })
        return listings
    }

    async createDraft(userId: string, data: IDraft) {
        const listing = await Listing.create({ userId, ...data })
        return listing
    }

    async addLocation(listingId: number, data: ILocation) {
        if (data.metro && !Array.isArray(data.metro)) {
            throw ApiError.BadRequest("Передайте метро в виде массива!");
        }

        const [location, created] = await Location.findOrCreate({
            where: { listingId },
            defaults: { ...data, listingId }
        })

        if (!created) {
            await location.update(data)
        }

        return location
    }

    async addApartment(listingId: number, data: IApartment) {
        const [apartment, created] = await Apartment.findOrCreate({
            where: { listingId },
            defaults: { ...data, listingId }
        });

        if (!created) {
            await apartment.update(data);
        }

        return apartment;
    }

    async addMedia(listingId: number, files: Express.Multer.File[]) {
        if (!files || files.length === 0) {
            throw ApiError.BadRequest('Файлы не загружены');
        }

        const imagesCount = files.filter(f => (f as any).mediaType === 'image').length;
        if (imagesCount < 5) {
            throw ApiError.BadRequest('Минимум 5 фото обязательно');
        }

        const listingFolder = path.join(__dirname, "../uploads/listings", String(listingId));
        if (!fs.existsSync(listingFolder)) {
            fs.mkdirSync(listingFolder, { recursive: true });
        }

        // === 1. Удаляем старые медиа ===
        const oldMedia = await Media.findAll({ where: { listingId } });
        for (const m of oldMedia) {
            const url = m.get('url') as string
            const filePath = path.join(__dirname, "..", url); // путь на диске
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        }

        await Media.destroy({ where: { listingId } });

        // === 2. Добавляем новые файлы ===
        const mediaData: any[] = [];
        files.forEach((file, index) => {
            const ext = path.extname(file.originalname);
            const newFileName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
            const newPath = path.join(listingFolder, newFileName);

            fs.renameSync(file.path, newPath);

            mediaData.push({
                listingId,
                type: (file as any).mediaType,
                url: `/uploads/listings/${listingId}/${newFileName}`,
                order: index + 1
            });
        });

        const created = await Media.bulkCreate(mediaData);
        return created;
    }

    async addFeatures(listingId: number, data: IFeatures) {
        const listing = await Listing.findByPk(listingId);
        if (!listing) throw ApiError.BadRequest("Объявление не найдено");

        const [features, created] = await Features.findOrCreate({
            where: { listingId },
            defaults: { ...data, listingId }
        });

        if (!created) {
            await features.update(data);
        }

        return features;
    }

    async addAmenities(listingId: number, data: IAmenities) {
        const listing = await Listing.findByPk(listingId);
        if (!listing) throw ApiError.BadRequest("Объявление не найдено");

        const [amenities, created] = await Amenities.findOrCreate({
            where: { listingId },
            defaults: { ...data, listingId },
        });

        if (!created) {
            await amenities.update(data);
        }

        return amenities;
    }

    async addDetails(listingId: number, data: IDetails) {
        const listing = await Listing.findByPk(listingId);
        if (!listing) throw ApiError.BadRequest("Объявление не найдено");

        if (!data.title) {
            throw ApiError.BadRequest("Title обязателен!");
        }

        const [details, created] = await Details.findOrCreate({
            where: { listingId },
            defaults: { ...data, listingId }
        });

        if (!created) {
            await details.update(data);
        }

        return details;
    }

    async addRules (listingId: number, data: IRulesData) {
        const listing = await Listing.findByPk(listingId);
        if (!listing) throw ApiError.BadRequest("Объявление не найдено");

        const [rules, created] = await Rules.findOrCreate({
            where: { listingId },
            defaults: { ...data, listingId }
        });

        if (!created) {
            await rules.update(data);
        }

        return rules;
    }
}

export default new ListingsService()
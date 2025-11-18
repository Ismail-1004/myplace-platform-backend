import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';
import { Request } from 'express';

interface Options {
    folder: string;
    dynamicListing?: boolean; // включаем динамические папки для listings
}

export const createUploadMiddleware = ({ folder, dynamicListing = false }: Options) => {
    
    const storage = multer.diskStorage({
        destination: (req: Request, file: Express.Multer.File, cb) => {

            let uploadDir = path.join(__dirname, '../uploads', folder);

            // 📌 Если dynamicListing включен → создаём /uploads/listings/{listingId}
            if (dynamicListing) {
                const listingId = req.params.listingId;

                if (!listingId) {
                    return cb(new Error("listingId обязателен для загрузки медиа"), '');
                }

                uploadDir = path.join(__dirname, '../uploads/listings', listingId);
            }

            // Создаём папку, если её нет
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            cb(null, uploadDir);
        },

        filename: (req: Request, file: Express.Multer.File, cb) => {
            const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
            cb(null, unique + path.extname(file.originalname));
        }
    });

    const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
        const imageTypes = /jpeg|jpg|png/;
        const videoTypes = /mp4|mov|avi|mkv/;

        const ext = path.extname(file.originalname).toLowerCase();
        const mime = file.mimetype;

        if (imageTypes.test(ext) && imageTypes.test(mime)) {
            (file as any).mediaType = "image";
            return cb(null, true);
        }

        if (videoTypes.test(ext) && videoTypes.test(mime)) {
            (file as any).mediaType = "video";
            return cb(null, true);
        }

        return cb(new Error("Разрешены только изображения (jpg,jpeg,png) и видео (mp4,mov,avi,mkv)"));
    };

    return multer({
        storage,
        limits: { fileSize: 30 * 1024 * 1024 }, // 30MB
        fileFilter
    });
};

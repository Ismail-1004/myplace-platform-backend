import multer, { StorageEngine } from "multer";
import path from "path";
import fs from "fs";
import { Request } from "express";

// Создание папок
const ensureDir = (dir: string): void => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Типы папок — можем ограничить
export type UploadFolder = "avatars" | "listings" | string;

// Возвращаем типизированный Multer uploader
export const createUploader = (folder: UploadFolder): multer.Multer => {
    const storagePath = path.join("uploads", folder);
    ensureDir(storagePath);

    const storage: StorageEngine = multer.diskStorage({
        destination(req: Request, file: Express.Multer.File, cb) {
            cb(null, storagePath);
        },
        filename(req: Request, file: Express.Multer.File, cb) {
            const ext = path.extname(file.originalname);
            const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
            cb(null, unique + ext);
        }
    });

    return multer({ storage });
};

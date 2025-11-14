import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { User } from "../db/models";
import UserDto from "../dtos/user-dto";
import tokenService from "../services/tokenService";

class UserController {
    async register(req: Request, res: Response) {
        try {
            const { name, phone, password } = req.body;

            if (!name || !phone || !password) {
                return res.status(400).json({ message: 'Все поля обязательны!' })
            }

            const candidate = await User.findOne({ where: { phone } })

            if (candidate) {
                return res.status(400).json({ message: "Пользователь уже существует" });
            }

            const hashPassword = await bcrypt.hash(password, 10)

            const avatar = req.file ? `/uploads/avatars/${req.file.filename}` : null;

            const user = await User.create({
                name,
                phone,
                password: hashPassword,
                avatar
            })

            const userDto = new UserDto(user)
            const tokens = tokenService.generateTokens({ ...userDto })

            await tokenService.saveToken(userDto.id, tokens.refreshToken)

            return res.json({
                user: userDto,
                ...tokens
            })
        } catch (e) {
            throw e
        }
    }

    async login(req: Request, res: Response) {
        try {
            res.json({ message: 'Hello World!' })
        } catch (e) {
            throw e
        }
    }

    async getUser(req: Request, res: Response) {
        try {

        } catch (e) {
            throw e
        }
    }
}

export default new UserController()
import bcrypt from 'bcrypt'
import { User } from "../db/models";
import UserDto from "../dtos/user-dto";
import tokenService from "../services/tokenService";
import ApiError from '../exceptions/api-error';

class UserService {
    async register(name: string, phone: string, password: string, file?: Express.Multer.File) {
        if (!name || !phone || !password) {
            throw ApiError.BadRequest('Все поля обязательны!')
        }

        const candidate = await User.findOne({ where: { phone } })

        if (candidate) {
            throw ApiError.BadRequest("Пользователь уже существует");
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const avatar = file ? `/uploads/avatars/${file.filename}` : null;

        const user = await User.create({
            name,
            phone,
            password: hashPassword,
            avatar
        })

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })

        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            user: userDto,
            ...tokens
        }
    }

    async login (phone: string, password: string) {
        const candidate = await User.findOne({ where: { phone } })

        if (!candidate) {
            throw ApiError.BadRequest('Пользователь не найден!')
        }

        const isPathEquals = await bcrypt.compare(password, candidate.password)

        if (!isPathEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }

        const userDto = new UserDto(candidate)
        const tokens = tokenService.generateTokens({ ...userDto })

        return {
            user: userDto,
            ...tokens
        }
    }

    async getAllUsers () {
        const users = await User.findAll()
        const usersDto = users.map(user => new UserDto(user))
        return usersDto
    }
}

export default new UserService;
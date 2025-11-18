import { Request, Response } from "express";
import userService from "../services/userService";

class UserController {
    async register(req: Request, res: Response) {
        try {
            const { name, phone, password } = req.body;
            const userData = await userService.register(name, phone, password, req.file)

            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                httpOnly: true,
            });

            res.json(userData)
        } catch (e) {
            throw e
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { phone, password } = req.body
            const userData = await userService.login(phone, password)

            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });

            res.json(userData)
        } catch (e) {            
            throw e
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await userService.getAllUsers()
            res.json(users)
        } catch (e) {
            throw e
        }
    }
}

export default new UserController()
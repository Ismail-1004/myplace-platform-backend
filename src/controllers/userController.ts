import { Request, Response } from "express";

class UserController {
    async register(req: Request, res: Response) {
        try {
            
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
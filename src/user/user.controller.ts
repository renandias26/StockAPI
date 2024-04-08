import {Request, Response} from 'express'
import userService from './user.service'

class UserController {

    public async create(req: Request, res: Response){
        const user = await userService.createuser(req.body)
        return res.status(200).json(user)
    }

    async list(req: Request, res: Response) {
        const users = await userService.list()

        return res.status(200).json(users)
    }

    async find(req: Request, res: Response) {
        const user = await userService.find(req.params.id)

        return res.status(200).json(user)
    }

    async update(req: Request, res: Response) {
        const user = await userService.update(req.params.id, req.body)

        return res.status(200).json(user)
    }

    async delete(req: Request, res: Response) {
        await userService.delete(req.params.id)

        return res.status(200).json("Successfully deleted user!")
    }

}


export default new UserController()
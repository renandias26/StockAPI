import {Request, Response} from 'express'
import StockService from './stock.service'

class StockController {

    public async create(req: Request, res: Response){
        const Stock = await StockService.createStock(req.body)
        return res.status(200).json(Stock)
    }

    async list(req: Request, res: Response) {
        const Stocks = await StockService.list()

        return res.status(200).json(Stocks)
    }

    async find(req: Request, res: Response) {
        const Stock = await StockService.find(req.params.id)

        return res.status(200).json(Stock)
    }

    async update(req: Request, res: Response) {
        const Stock = await StockService.update(req.params.id, req.body)

        return res.status(200).json(Stock)
    }

    async delete(req: Request, res: Response) {
        await StockService.delete(req.params.id)

        return res.status(200).json("Successfully deleted Stock!")
    }

    public async stock(req: Request, res: Response) {
        const stock = await StockService.CreateStock()

        return res.status(200).json(stock)
    }

    async totalvalue(req: Request, res: Response) {
        const stock = await StockService.valortotal()

        return res.status(200).json(stock)
    }
    

}


export default new StockController()
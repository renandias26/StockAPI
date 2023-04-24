import {Request, Response} from 'express'
import ProductService from './product.service'

class ProductController {

    public async create(req: Request, res: Response){
        const Product = await ProductService.createProduct(req.body)
        return res.status(200).json(Product)
    }

    async list(req: Request, res: Response) {
        const Products = await ProductService.list()

        return res.status(200).json(Products)
    }

    async find(req: Request, res: Response) {
        const Product = await ProductService.find(req.params.id)

        return res.status(200).json(Product)
    }

    async update(req: Request, res: Response) {
        const Product = await ProductService.update(req.params.id, req.body)

        return res.status(200).json(Product)
    }

    async delete(req: Request, res: Response) {
        await ProductService.delete(req.params.id)

        return res.status(200).json("Successfully deleted Product!")
    }

    async random (req: Request, res: Response) {
        const randomobj = await ProductService.random(await ProductService.list())

        return res.status(200).json(randomobj)
    }

    async ProductreadFile(req: Request, res: Response) {

        const data = await ProductService.readProductsFile()

        res.status(200).json(data)

    }

    async ProductWriteFile(req: Request, res: Response) {
        const data = await ProductService.writefile()

        res.status(200).json(data)
    }
    

}


export default new ProductController()
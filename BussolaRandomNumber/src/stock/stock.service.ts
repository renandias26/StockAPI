import Stock from "./productStock";
import { StockTypes } from './Types/StockTypes'



class StockService {

    async createStock(data: StockTypes) {
        const result = await Stock.create(data)
        console.log("Estoque criado")
        return result
    }

    async list() {
        const listedStocks = await Stock.find()

        return listedStocks
    }

    async find(id) {
        const findedStock = await Stock.findById(id)

        return findedStock
    }

    async update(id, dataToUpdate: StockTypes) {
        const updatedStock = await Stock.findOneAndUpdate({_id: id}, {
            nome: dataToUpdate.nome,
            qtde: dataToUpdate.qtde,
            preco: dataToUpdate.preco,
            productStock: dataToUpdate.productStock

        }, {new: true})

        return updatedStock
    }

    async delete(id) {
        await Stock.findOneAndDelete({_id: id})
        return
    }

    async CreateStock() {

        const StockList = await this.list()

        const stockStocks = StockList.map(item => {
            let stock = {            
            nome: item.nome,
            qtde: item.qtde,
            preco: item.preco,
            productStock: item.qtde * item.preco
            }
            return stock
        })

        
        const result = await Stock.create(stockStocks)
        console.log("Stock created.")

        return result

    }

    async valortotal() {

        const StockList = await this.list()

        let stock = StockList.reduce((aux, product) => {
            const stock_value = product.qtde * product.preco
            return aux + stock_value
        }, 0)

        return ({ValorTotalEstoque: stock})

    }


}

export default new StockService()
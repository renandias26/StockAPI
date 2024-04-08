import Product from "./Product";
import { ProductType } from "./Types/ProductTypes";
import fs from 'fs'

class ProductService {

    async createProduct(data: ProductType) {
        const result = await Product.create(data)
        console.log("Produto criado")
        return result
    }

    async list() {
        const listedProducts = await Product.find()

        return listedProducts
    }

    async find(id) {
        const findedProduct = await Product.findById(id)

        return findedProduct
    }

    async update(id, dataToUpdate: ProductType) {
        const updatedProduct = await Product.findOneAndUpdate({ _id: id }, {
            nome: dataToUpdate.nome,
            qtde: dataToUpdate.qtde,
            preco: dataToUpdate.preco

        }, { new: true })

        return updatedProduct
    }

    async delete(id) {
        await Product.findOneAndDelete({ _id: id })
        return
    }
    async random(lista) {


        const randomList: Array<ProductType> = []

        while (randomList.length < 4) {
            const rand = Math.floor(Math.random() * lista.length)
            if (!randomList.includes(lista[rand])) {
                randomList.push(lista[rand])
            }

        }

        console.log(randomList)

        return randomList

    }


    async writefile() {

        const lista = await this.list()

        const data = JSON.stringify(lista)

        fs.writeFile('products.json', data, (err) => {
            if (err) {
                throw err;
            }
            else {
                console.log("Dados gravados com sucesso")
            }
        })
    }

    async readProductsFile() {


        try {
            const data = fs.readFileSync('products.json', { encoding: "utf-8" })
            console.log("Lendo dados!")
            return JSON.parse(data)

        } catch (err) {
            console.log("Erro na hora de ler produtos:", err)

        }



    }



}

export default new ProductService()
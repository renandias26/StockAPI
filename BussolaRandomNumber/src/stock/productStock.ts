import {Schema, model} from 'mongoose'


const ProductStockSchema = new Schema({
    nome: {
        required: true,
        type: String
    },
    qtde: {
        required: true,
        type: Number
    },
    preco: {
        required: true,
        type: Number
    },
    productStock: {
        required: true,
        type: Number
    }

}, {
    timestamps: true
})


export default model('ProductStock', ProductStockSchema)

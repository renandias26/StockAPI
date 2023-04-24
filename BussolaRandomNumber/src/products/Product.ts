import {Schema, model} from 'mongoose'


const ProductSchema = new Schema({
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
    }

}, {
    timestamps: true
})


export default model('Product', ProductSchema)

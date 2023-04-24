import {Schema, model} from 'mongoose'


const UserSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    firstName: {
        required: true,
        type: String
    },
    lastName: String
}, {
    timestamps: true
})


export default model('User', UserSchema)

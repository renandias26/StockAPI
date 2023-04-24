import User from "./User";
import { UserType} from "./Types/UserTypes";

class UserService {

    async createuser(data: UserType) {
        const result = await User.create(data)
        console.log("Usuário criado")
        return result
    }

    async list() {
        const listedUsers = await User.find()

        return listedUsers
    }

    async find(id) {
        const findedUser = await User.findById(id)

        return findedUser
    }

    async update(id, dataToUpdate: UserType) {
        const updatedUser = await User.findOneAndUpdate({_id: id}, {
            email: dataToUpdate.email,
            firstName: dataToUpdate.firstName,
            lastName: dataToUpdate.lastName

        }, {new: true})

        return updatedUser
    }

    async delete(id) {
        await User.findOneAndDelete({_id: id})
        return
    }

}

export default new UserService()
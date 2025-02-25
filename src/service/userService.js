import { User } from '../models/user.js'

class UserServive {
    findAll() {
        return new Promise((resolve) => {
            const users = User.findAll()
            
            return resolve(users)
        })
    }

    findById(id) {
        return new Promise((resolve) => {
            const user = User.findOne({ where: { id } })

            return resolve(user)
        })
    }

    create(first_name, last_name) {
        return new Promise((resolve) => {
            const newUser = User.create({ first_name, last_name })

            return resolve(newUser)
        })
    }
}

export default new UserServive()
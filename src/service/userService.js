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
            const user = User.findOne({ where: { Id: id } })

            return resolve(user)
        })
    }

    create(first_name, last_name) {
        return new Promise((resolve) => {
            const newUser = User.create({ first_name, last_name })

            return resolve(newUser)
        })
    }

    update(id, first_name, last_name) {
        return new Promise((resolve) => {
            const updated = User.update({ first_name, last_name }, { where: { Id: id } })

            return resolve(updated)
        })
    }

    delete(id) {
        return new Promise((resolve) => {
            const deletedUser = User.destroy({ where: { Id: id } })
            return resolve(deletedUser)
        })
    }
}

export default new UserServive()
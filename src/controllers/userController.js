import { User } from "../models/user.js";
import userService from '../service/userService.js'

class UserController {
    async getAllUsers(_, response) {
        try {
            const users = await userService.findAll()

            if (!users) {
                response.status(404).json({ error: 'Users not found' })
            }

            response.status(200).json(users)
        } catch (e) {
            response.status(500).json({ error: e.message })
        }
    }

    async createUser(request, response) {
        try {
            const { first_name, last_name } = request.body

            if (!first_name || !last_name) {
                response.status(400).json({ error: 'First and Last Name is required' })
            }
            
            const newUser = await userService.create(first_name, last_name)

            response.status(201).json(newUser)
        } catch (e) {
            response.status(500).json({ error: e.message })
        }
    }

    async getUserById(request, response) {
        try {
            const { id } = request.params
            const verifyUser = await userService.findById(id)

            if (!verifyUser) {
                response.status(404).json({ error: 'User not found' })
            }

            response.status(200).json(verifyUser)
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }
}

export default new UserController()
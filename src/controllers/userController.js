import { User } from "../models/user.js";

class UserController {
    async getAllUsers(_, response) {
        try {
            const users = await User.findAll()

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
            
            const newUser = await User.create({ first_name, last_name })

            response.status(201).json(newUser)
        } catch (e) {
            response.status(500).json({ error: e.message })
        }
    }
}

export const userController = new UserController()
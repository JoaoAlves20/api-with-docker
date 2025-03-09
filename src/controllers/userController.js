import UserService from '../service/userService.js'

class UserController {
    async getAllUsers(_, response) {
        try {
            const users = await UserService.findAll()

            if (!users) {
                response.status(404).json({ error: 'Users not found' })
            }

            response.status(200).json(users)
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }

    async getUserById(request, response) {
        try {
            const { id } = request.params
            const verifyUser = await UserService.findById(id)

            if (!verifyUser) {
                response.status(404).json({ error: 'User not found' })
            }

            response.status(200).json(verifyUser)
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }

    async createUser(request, response) {
        try {
            const { first_name, last_name } = request.body

            if (!first_name || !last_name) {
                response.status(400).json({ error: 'First and Last Name is required' })
            }
            
            const newUser = await UserService.create(first_name, last_name)

            response.status(201).json(newUser)
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }

    async updateUser(request, response) {
        try {
            const { id } = request.params
            const verifyId = await UserService.findById(id)

            if (!verifyId) {
                response.status(404).json({ error: "User not found" })
            }
            
            const { first_name, last_name } = request.body

            if (!first_name || !last_name) {
                response.status(400).json({ error: "First and Last Name is required" })
            }

            await UserService.update(id, first_name, last_name)
            response.status(200).json(verifyId)
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }

    async deletedUser(request, response) {
        try {
            const { id } = request.params
            const verifyId = await UserService.findById(id)

            if (!verifyId) {
                response.status(404).json({ error: "User not found" })
            }

            await UserService.delete(id)
            response.status(200).json({ sucessful: "User deleted" })
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }
}

export default new UserController()
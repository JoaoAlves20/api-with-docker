import { ContextStrategy } from '../strategy/base/contextStrategy.js'
import { PostgresAdmin } from '../strategy/postgresAdmin.js'

const context = new ContextStrategy(new PostgresAdmin())

class UserController {
    constructor() {
        context.connect()
    }

    async getAllUsers(_, response) {
        try {
            const users = await context.findAll()

            const dataValues = users.map(user => user.dataValues)

            if (!dataValues) {
                response.status(404).json({ error: 'Users not found' })
            }

            response.status(200).json(dataValues)
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }

    async getUserById(request, response) {
        try {
            const { id } = request.params
            const { dataValues } = await context.findById(id)

            if (!dataValues) {
                response.status(404).json({ error: 'User not found' })
            }

            response.status(200).json(dataValues)
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
            
            const { dataValues } = await context.create({ first_name, last_name })

            response.status(201).json(dataValues)
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }

    async updateUser(request, response) {
        try {
            const { id } = request.params
            const { dataValues } = await context.findById(id)

            if (!dataValues) {
                response.status(404).json({ error: "User not found" })
            }
            
            const { first_name, last_name } = request.body

            if (!first_name || !last_name) {
                response.status(400).json({ error: "First and Last Name is required" })
            }

            await context.update(id, { first_name, last_name })
            response.status(200).json({ message: "User updated" })
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }

    async deletedUser(request, response) {
        try {
            const { id } = request.params
            const { dataValues } = await context.findById(id)

            if (!dataValues) {
                response.status(404).json({ error: "User not found" })
            }

            await context.delete(id)
            response.status(200).json({ sucessful: "User deleted" })
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    }
}

export default new UserController()
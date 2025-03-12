import express from 'express'
import helmet from 'helmet'

import config from './config/serverConfig.js'
import { router } from './routes/routes.js'

const server = express()

server.use(express.json())
server.use(helmet())

server.use('/users', router)

const PORT = config.port || 3000
server.listen(PORT, () => console.log(`Server runner in http://localhost:${PORT}`))
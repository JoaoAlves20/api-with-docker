import express from 'express'
import helmet from 'helmet'

import config from './config/serverConfig.js'
import { router } from './routes/routes.js'
import { sequelize } from './config/database.js'

const server = express()

server.use(express.json())
server.use(helmet())

server.use(router)

sequelize.sync()
    .then(() => console.log('Tabelas sincronizadas'))
    .catch((err) => console.log('Erro ao sincronizar', err))

const PORT = config.port || 3000
server.listen(PORT, () => console.log(`Server runner in http://localhost:${PORT}`))
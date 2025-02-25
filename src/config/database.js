import { Sequelize } from 'sequelize'

import config from '../config/serverConfig.js'

const { name, user, password, host } = config.db

export const sequelize = new Sequelize(name, user, password, {
    host,
    dialect: 'postgres',
    logging: false
})

sequelize.authenticate()
    .then(() => console.log('Conectado ao Postgres'))
    .catch((err) => console.log('Erro ao conectar', err))
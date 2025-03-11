import { DataTypes, Sequelize } from 'sequelize'

import { Funcionality } from './interface/InterfaceFuncionality.js'
import config from '../config/serverConfig.js'

const {name, user, password, host } = config.db

export class PostgresAdmin extends Funcionality {
    constructor() {
        super()
        this._driver = null
        this._users = null
    }

    async isConnect() {
        try {
            await this._driver.authenticate()
            return true
        } catch (err) {
            console.log('fail!', err)
            return false
        }
    }

    async connect() {
        this._driver = new Sequelize(name, user, password, {
            host,
            dialect: 'postgres',
            quoteIdentifiers: false,
            operatorsAliases: false
        })

        await this.defineModel()
    }

    async defineModel() {
        this._users = this._driver.define('User', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName: 'users',
            freezeTableName: false,
            timestamps: false
        })

        await this._users.sync()
    }

    findAll() {
        return new Promise((resolve) => {
            const users = this._users.findAll({ limit: 4 })
            
            return resolve(users)
        })
    }

    findById(id) {
        return new Promise((resolve) => {
            const user = this._users.findOne({ where: { id } })

            return resolve(user)
        })
    }

    create({ first_name, last_name }) {
        return new Promise((resolve) => {
            const userCreated = this._users.create({ first_name, last_name })

            return resolve(userCreated)
        })
    }

    update(id, { first_name, last_name }) {
        return new Promise((resolve) => {
            const updatedUser = this._users.update({ first_name, last_name }, { where: { id } })

            return resolve(updatedUser)
        })
    }
}
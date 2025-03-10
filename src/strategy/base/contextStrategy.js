import { Funcionality } from '../interface/InterfaceFuncionality.js'

export class ContextStrategy extends Funcionality {
    constructor(strategy) {
        super()
        this._database = strategy
    }

    connect() {
        return this._database.connect()
    }

    isConnect() {
        return this._database.isConnect()
    }

    findAll() {
        return this._database.findAll()
    }

    findById(id) {
        return this._database.findById(id)
    }

    create(first_name, last_name) {
        return this._database.create(first_name, last_name)
    }

    update(id, first_name, last_name) {
        return this._database.update(id, first_name, last_name)
    }

    delete(id) {
        return this._database.delete(id)
    }
}
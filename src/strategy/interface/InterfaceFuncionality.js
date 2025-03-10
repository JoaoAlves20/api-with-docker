class NotImplementedException extends Error {
    constructor() {
        super('Not implemented exception')
    }
}

export class Funcionality {
    connect() {
        return new NotImplementedException()
    }

    isConnect() {
        return new NotImplementedException()
    }

    findAll() {
        return new NotImplementedException()
    }

    findById(id) {
        return new NotImplementedException()
    }

    create(first_name, last_name) {
        return new NotImplementedException()
    }

    update(id, first_name, last_name) {
        return new NotImplementedException()
    }

    delete(id) {
        return new NotImplementedException()
    }
}
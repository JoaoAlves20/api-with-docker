import assert from 'assert'

import { ContextStrategy } from '../src/strategy/base/contextStrategy.js'
import { PostgresAdmin } from '../src/strategy/postgresAdmin.js'

const context = new ContextStrategy(new PostgresAdmin())

const users = [
    {
        id: 1,
        first_name: 'João',
        last_name: 'Alves'
    },
    {
        id: 2,
        first_name: 'Luiz',
        last_name: 'Alves'
    },
    {
        id: 3,
        first_name: 'Erika',
        last_name: 'Alves'
    },
    {
        id: 4,
        first_name: 'Vander',
        last_name: 'Alves'
    },
]

const userTest = {
    first_name: "Test",
    last_name: "Testing"
}

describe('Postgres Test', function () {    
    this.beforeAll(async () => {
        await context.connect()
    })

    it('Connecting to postgres', async () => {
        const result = await context.isConnect()
        assert.deepEqual(result, true)
    })

    it('Testing FindAll', async () => {
        const result = await context.findAll()

        const newUsers = result.map(user => user.dataValues)
        
        assert.deepEqual(newUsers, users)
    })

    it('Testing FindById', async () => {
        const { dataValues } = await context.findById(1)
        const find = users.find(user => user.id === 1)

        assert.deepEqual(dataValues, find)
    })

    it('Testing Create', async () => {
        const { dataValues } = await context.create(userTest)
        delete dataValues.id

        assert.deepEqual(dataValues, userTest)
    })
})
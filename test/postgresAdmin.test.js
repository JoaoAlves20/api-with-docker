import assert from 'assert'

import { ContextStrategy } from '../src/strategy/base/contextStrategy.js'
import { PostgresAdmin } from '../src/strategy/postgresAdmin.js'

const context = new ContextStrategy(new PostgresAdmin())

describe('testando postgres', function () {    
    this.beforeAll(async function () {
        await context.connect()
    })

    it('conectando postgres', async function () {
        const result = await context.isConnect()
        assert.deepEqual(result, true)
    })
})
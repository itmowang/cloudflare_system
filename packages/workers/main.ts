import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { Hono } from 'hono'

import user from './src/user'

const app = new Hono().basePath('/api')

app.get('/', (c) => c.text('GET /'))
app.post('/', (c) => c.text('POST /'))
app.put('/', (c) => c.text('PUT /'))
app.delete('/', (c) => c.text('DELETE /'))

// user routes
user(app,'/user')

app.notFound((c) => {
    return c.text('Custom 404 Message', 404)
})

app.onError((err, c) => {
    console.error(`${err}`)
    return c.text('Custom Error Message', 500)
})

export default app 
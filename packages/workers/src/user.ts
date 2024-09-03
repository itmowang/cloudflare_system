import { jwt, sign } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'
import { Hono } from 'hono/dist/types/hono';
import { Context } from 'hono/dist/types/context';
import Prisma from '../prisma/prisma'

export default (app: Hono, path: string) => {

    // app.use(`${path}/*`,jwt({ secret: 'it-is-very-secret'}))

    // /api/user/register
    app.post(`${path}/register`, async (c: Context) => {
        const prisma = Prisma(c)
        const { email, password } = await c.req.json()
        const res = await prisma.user.create({
            data: {
                email,
                password
            }
        });

        console.log(res,66);
        

        return c.json({
            message: 'register success',
        })
    })

    app.get(`${path}/test`, async (c: any) => {
        const payload = { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
        const secret = 'your-secret-key'
        // 生成 JWT token
        const token = await sign(payload, secret)
        // const payload = c.get('jwtPayload')
        return c.json(token) // eg: { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
    })

}
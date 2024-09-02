import { jwt } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'

export default (app: any, path: string) => {

    app.use(`${path}/*`,jwt({ secret: 'it-is-very-secret'}))

    // /api/user/register
    app.post(`${path}/register`, (c: any) => {
        const payload = c.get('jwtPayload')
        return c.json(payload)
    })

    app.get(`${path}/test`, (c: any) => {
        const payload = c.get('jwtPayload')
        return c.json(payload) // eg: { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
      })

}
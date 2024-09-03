
import { Hono } from 'hono'
import user from './src/user'



const app = new Hono().basePath('/api')

// app.get('/userss', async (c) => {
//     const env = c.env as Env; // 确保正确类型
//     const adapter = new PrismaD1(env.DB);
//     const prisma = new PrismaClient({ adapter });
  
//     try {
//       const users = await prisma.user.findMany(); // 获取所有用户
//       return c.json(users);
//     } catch (error) {
//       return c.json({ error: 'Failed to fetch users' }, 500);
//     }
// });

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
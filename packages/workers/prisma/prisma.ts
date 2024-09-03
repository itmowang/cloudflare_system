import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { Context } from "hono";

export default (c: Context) => {
    const env = c.env as Env; // 确保正确类型
    const adapter = new PrismaD1(env.DB);
    return new PrismaClient({ adapter });
}
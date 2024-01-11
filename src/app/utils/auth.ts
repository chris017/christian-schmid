import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from './db'
import GithubProvider from "next-auth/providers/github"
import type { Adapter } from "next-auth/adapters"
import  EmailProvider from "next-auth/providers/email"

function getPrismaAdapter(): Adapter {
  return PrismaAdapter(prisma) as Adapter
}

export const authOptions = {
    adapter: getPrismaAdapter(),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
        })
    ],
}
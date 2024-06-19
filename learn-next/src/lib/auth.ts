import {NextAuthOptions,} from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authConfig: NextAuthOptions = {
    providers: [
        // CredentialsProvider({
        //     name: "Sign in",
        //     credentials: {
        //         username: {
        //             label: "Email",
        //             type: "email",
        //             placeholder: "example@example.com",
        //         },
        //         password: {label: "Password", type: "password"},
        //     },
        //     async authorize(credentials) {
        //         if (!credentials || !credentials.email || !credentials.password) 
        //             return null
                
        //         const dbUser = await prisma.user.findFirst({
        //             where: {
        //                 email: credentials.email
        //             }
        //         })

        //         if (dbUser && dbUser.password === credentials.password) {
        //             const {password,createdAt,id,...dbUserWithoutPassword} = dbUser

        //             return dbUserWithoutPassword
        //         }

        //         return null;
        //     },
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        // }),
    ],
}

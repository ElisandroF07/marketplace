import NextAuth from "next-auth/next";

declare module 'next-auth' {
    interface Session {
        user: {
            _id: string,
            email: string,
            name: [string],
            roles: {
                consumer: boolean,
                seller: boolean
            }
        }
    }
}
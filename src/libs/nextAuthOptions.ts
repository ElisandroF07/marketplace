import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: {label: 'email', type: 'email'},
                password: {label: 'password', type: 'password'}
            },
            async authorize(credentials) {
                const response = await fetch('http://localhost:3004/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'Application/json'
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                })
                const user = await response.json()
                if (user && response.ok) {
                    return user
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/auth/sing-in'
    },
    callbacks: {
        async jwt({ token, user}) {
            user && (token.user = user)
            return token;
        },
        async session({ session, token }) {
            session = token.user as any
            return session
        }
    }
    
}

export default nextAuthOptions
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = { id: "1", email: "jsmith@example.com" }

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }

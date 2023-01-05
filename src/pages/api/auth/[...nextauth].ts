import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions } from 'next-auth';

type UserInfo = { id: string; name: string; email: string };
const mockAuthApi = ({ username, password }: { username: string; password: string }) =>
  new Promise<UserInfo | null>((resolve) => {
    const name = username.replaceAll(' ', '_').toLowerCase();
    setTimeout(() => {
      resolve({
        id: '1',
        name: username,
        email: `${name}@gmail.com`,
      });
    }, 500);
  });

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as any;

        const user = await mockAuthApi({ username, password });

        return user;
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/auth/login',
  },

  callbacks: {
    signIn({ user, account, profile, email }) {
      console.log('cb/signIn(): ', { user, account, profile, email });
      return !!user;
    },
    session({ session, user, token }) {
      console.log('cb/session(): ', { session, user, token });
      return session;
    },
    jwt({ token, user, account, profile, isNewUser }) {
      console.log('cb/jwt(): ', { token, user, account, profile, isNewUser });

      return token;
    },
  },
};

export default NextAuth(authOptions);

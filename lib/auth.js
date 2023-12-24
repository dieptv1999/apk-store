import GoogleProvider from "next-auth/providers/google";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: '904414349783-m2o9sohj88vubam6hb952iq4o3kabb06.apps.googleusercontent.com',
      clientSecret: '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',

    }),
  ],
  callbacks: {
    session: ({session, token}) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({token, user}) => {
      if (user) {
        const u = user;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
  secret: 'apk_store_321'
};
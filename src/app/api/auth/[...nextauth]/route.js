import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Enter email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        } else {
          return true;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };

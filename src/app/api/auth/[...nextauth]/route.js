const { default: NextAuth } = require("next-auth");

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [],
});

export { handler as Get, handler as POST };

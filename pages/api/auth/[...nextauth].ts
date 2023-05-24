import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { TbPlaceholder } from "react-icons/tb";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        documentNumber: { label: "DNI", type: "text", placeholder: "75061974" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "************",
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // const res = await fetch("http://localhost:3000/api/auth/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     username: credentials?.documentNumber,
        //     password: credentials?.password,
        //   }),
        // });
        console.log({credentials});
        // const user = await res.json();
        // const { documentNumber,password} = credentials;
        // if (documentNumber) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return documentNumber;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
          return null;

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

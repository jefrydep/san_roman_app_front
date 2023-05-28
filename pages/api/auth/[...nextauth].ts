import { LoginResponse } from "@/interfaces/loginResponse";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { TbPlaceholder } from "react-icons/tb";
export default NextAuth({
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        documentNumber: {
          label: "DoCumentNumber",
          type: "text",
          placeholder: "45784578@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "************",
        },
      },
      async authorize(credentials, req)  {
        // Add logic here to look up the user from the credentials supplied
        const { documentNumber, password } = credentials as any;
        const res = await fetch ("http://localhost:3000/api/auth/login",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            documentNumber,
            password,
          }),
        });
        console.log({ credentials });
        const user:LoginResponse = await res.json();
        console.log(user);
        if (res.ok && user){
        // if (user) {
          return user;
        } else return null;

        // return {name:'Jefry',correo:'jefrydep@gmail.com',role:'admin'}

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],

  callbacks: {
    // async jwt({ token, account }) {
    //   // Persist the OAuth access_token to the token right after signin
    //   if (account) {
    //     token.accessToken = account.access_token
    //   }
    //   return token
    // },
    async jwt({ token,account, user,trigger,session }) {
      if( trigger === 'update' ){
        return{...token, ...session.user};
      }
      return { ...token,  ...user };
    },
    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token from a provider.
    //   session.accessToken = token.accessToken
    //   return session
    // }

    async session ({ session, token, user }) {
      // console.log({session,token,user})
      session.user = token as any;
      // session.user=token.user as any;

      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});

// function GithubProvider(arg0: { clientId: string | undefined; clientSecret: string | undefined; }): import("next-auth/providers").Provider {
//   throw new Error("Function not implemented.");
// }
// export { handler as GET, handler as POST };

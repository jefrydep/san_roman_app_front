import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { TbPlaceholder } from "react-icons/tb";
 export default   NextAuth({
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
        email: { label: "Correo", type: "text", placeholder: "jefrydep@gmail.com" },
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
    async jwt({ token,account, user }) {
      if( account ){
        token.accessToken = account.access_token;
        switch(account.type){


          case 'oauth':
            // Todo:crear usuario o verificar si existe en mi db
            break;
          case 'credentials':
            token.user = user;
            break;
        }
      }
      return { ...token,account, ...user };
    },
    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token from a provider.
    //   session.accessToken = token.accessToken
    //   return session
    // }

    // async session ({ session, token, user }) {
    //   // console.log({session,token,user})
    //   session.accessToken = token.accessToken;
    //   session.user=token.user as any;
      
    //   return session;
    // },
  },
});


// function GithubProvider(arg0: { clientId: string | undefined; clientSecret: string | undefined; }): import("next-auth/providers").Provider {
//   throw new Error("Function not implemented.");
// }
// export { handler as GET, handler as POST };

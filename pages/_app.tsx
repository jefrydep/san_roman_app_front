import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoginPage from "./login";
import { useContext, useState } from "react";
import { SessionProvider } from "next-auth/react";
// import { AuthProvider } from "@/context/auth/AuthProvider";

interface Iprops{
}
export default function App({ Component, pageProps:{session,...pageProps},  }: AppProps) {
  // const { isLoggedIn, user } = useContext(AuthContext)
  // const [isLogged, seTisLogged] = useState(true)

  //   if(!isLogged){
  //     return <LoginPage />
  //   }

  return (
    <SessionProvider session={session}>
      {/* <AuthProvider> */}
        <Component {...pageProps} />
      {/* </AuthProvider> */}
    </SessionProvider>
  );
}

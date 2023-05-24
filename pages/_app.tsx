import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoginPage from "./login";
import { useContext, useState } from "react";
import { AuthProvider } from "@/context/auth/AuthProvider";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  // const { isLoggedIn, user } = useContext(AuthContext)
  // const [isLogged, seTisLogged] = useState(true)

  //   if(!isLogged){
  //     return <LoginPage />
  //   }

  return (
    <SessionProvider>

    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </SessionProvider>
  );
}

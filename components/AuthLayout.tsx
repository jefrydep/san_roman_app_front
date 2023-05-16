import Head from 'next/head'
import React, { PropsWithChildren } from 'react'



interface Props{
    title:string
}
const AuthLayout = ({children,title}:PropsWithChildren<Props>) => {
  return (
    < > 
    <Head>
        <title>{title}</title>
    </Head>
    <main>
        {children}
    </main>
    
    </ >
  )
}

export default AuthLayout
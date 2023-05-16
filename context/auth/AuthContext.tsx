import { Iuser } from "@/interfaces/interfaces";
import { createContext } from "react";


interface ContextProps{
    isLoggedIn:boolean;
    user?:Iuser;
    loginUser: (dni: string, password: string) => Promise<boolean>
 
}



export const AuthContext = createContext({}as ContextProps)
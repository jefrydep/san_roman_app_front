import { FC, useReducer, useEffect, PropsWithChildren } from 'react';
import { AuthContext, authReducer } from './';
import { Iuser } from '@/interfaces/interfaces';
import axios from 'axios';
import Cookies from 'js-cookie'
 
 
export interface AuthState {
    isLoggedIn: boolean;
    user?: Iuser;
}


const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined,
}


export const AuthProvider = ({children}:PropsWithChildren) => {

    const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );
    const loginUser = async (dni:string,password:string):Promise<boolean>=>{

    


        try {
            const {data}=await axios.post("http://localhost:3000/api/auth/login",{dni,password});

            const {token,user}= data;
            Cookies.set('token',token);
            dispatch({type:'[Auth] - Login',payload:user})
            return true;
        } catch (error) {
            return false;
            
        }
    }
 
 
 
 

    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,

            // Methods
            // loginUser,
            // registerUser,

        }}>
            { children }
        </AuthContext.Provider>
    )
};
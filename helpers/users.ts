import axios from "axios";

const API = 'http://localhost:3000'
interface User{
    name:string;
    documentNumber:string;
    password:string;
}

export const createUserRequest = async( user:User)=>{
   return fetch(`${API}/api/auth/register`,{
      method:"POST",
      body:JSON.stringify(user),
      headers:{
         "Content-Type": "application/json",
      }
    })
}

export const getUserRequest = ()=>{
   const users = axios.get(`${API}/api/auth`)
   return users;
}
export const deleteUserRequest = (id:string)=>fetch(`${API}/api/auth/${id}`,{
   method:"DELETE",
});
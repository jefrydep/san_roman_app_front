import {
  createUserRequest,
  getUserRequest,
  deleteUserRequest,
} from "@/helpers/users";
import { LoginResponse } from "@/interfaces/loginResponse";
import { UsersResponse } from "@/interfaces/userResponseInterface";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
interface Users {
  name: string;
  documentNumber: string;
  password: string;
}
interface userContextValue {
  users: UsersResponse[];
  createUser: (user: Users) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
}
export const UserContext = createContext<userContextValue>({
  users: [],
  createUser: async () => {},
  deleteUser: async () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<UsersResponse[]>([]);

  useEffect(() => {
    getUserRequest()
      .then((resp) => setUsers(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const createUser = async (user: Users) => {
    // console.log(name,documentNumber,password)
    const res = await createUserRequest(user);
    const data = await res.json();
    setUsers([...users, data]);
    // getUserRequest()
  };
  const deleteUser = async (id: string) => {
    const res = await deleteUserRequest(id);
    console.log(res);
    if (res.status === 200) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };
  return (
    <UserContext.Provider
      value={{
        users,
        createUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

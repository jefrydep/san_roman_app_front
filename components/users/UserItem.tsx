import { deleteUserRequest } from "@/helpers/users";
import { useUsers } from "@/hooks/useUser";
import React from "react";

interface UserProps {
  _id: string;
  id: any;
  name: string;
  state: string;
  role: string;
}

const UserItem = ({ id, name, state, role, _id }: UserProps) => {
  const { deleteUser } = useUsers();
  return (
    <>
      <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-3 sm:grid-cols-5  ">
        <div className=" hidden sm:grid content-center">
          <h2>{id} </h2>
        </div>
        <div className="  grid content-center">
          <h2>{name}</h2>
        </div>
        <div className=" hidden sm:grid font-bold content-center ">
          <h2 className="text-green-500">{state}</h2>
        </div>
        <div className="   grid content-center">
          <h2>{role}</h2>
        </div>
        <div className="  flex gap-3 content-center self-center   ">
          <button
            onClick={async () => {
              if (
                !window.confirm(`esta seguro de que quieres eliminar a ${name}`)
              )
                return;

              console.log(_id);
              deleteUser(_id);
            }}
            className="bg-red-400 w-10 h-10     rounded-lg text-center text-white font-bold"
          >
            D
          </button>
          <div className="bg-green-500 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
            U
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItem;

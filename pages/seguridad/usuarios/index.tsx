import Layout from "@/components/Layout";
import FormUser from "@/components/users/FormUser";
import UserItem from "@/components/users/UserItem";
import DescribeUser from "@/components/users/UserItem";
import { createUserRequest, getUserRequest } from "@/helpers/users";
import { useUsers } from "@/hooks/useUser";
import { UsersResponse } from "@/interfaces/userResponseInterface";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
const usuarios = () => {
  const { users } = useUsers();

  console.log(users);

  // const activesUsers = users.filter(
  //   (user: UsersResponse) => user.isActive === true
  // );

  return (
    <>
      <Layout>
        <div className=" bg-white rounded-lg my-3">
          <h2 className="text-center py-4 font-bold text-lg text-blue-600">
            Modulo de usuarios
          </h2>
          <div className="flex justify-around   py-3">
            <div className=" items-center px-3 py-3 rounded-lg text-center flex  gap-3 shadow-md mr-4  text-white font-bold text-lg">
              <UserIcon className="h-12 p-2  bg-orange-400 rounded-full" />
              <div>
                <h2 className="text-gray-400">Total de usuarios</h2>
                <div className="text-orange-400">{users.length}</div>
              </div>
            </div>
            <div className=" items-center px-3 py-3 rounded-lg text-center flex  gap-3 shadow-md mr-4  text-white font-bold text-lg">
              <UserPlusIcon className="h-12 p-2  bg-green-400 rounded-full" />
              <div>
                <h2 className="text-gray-400">Total de usuarios activos</h2>
                {/* <div className="text-orange-400">{activesUsers.length}</div> */}
              </div>
            </div>
          </div>
          <hr />
        </div>

        <FormUser />
        <section>
          <div className="grid rounded-sm grid-cols-3 sm:grid-cols-5 content-center shadow-md  px-4 h-10 gap-3 text-white font-bold bg-[#1C5CFF]">
            <div className=" hidden sm:block ">
              <h2 className="">Id</h2>
            </div>
            <div className="">
              <h2>Nombre</h2>
            </div>
            <div className="  hidden sm:block">
              <h2>Estatus</h2>
            </div>
            <div className="">
              <h2>Rol</h2>
            </div>
            <div className="">
              <h2>Acciones</h2>
            </div>
          </div>
          {/* <div className=" px-4 grid bg-white shadow-md    border gap-3 py-3 grid-cols-3 sm:grid-cols-5   ">
            <div className=" hidden sm:grid content-center">
              <h2>1</h2>
            </div>
            <div className="  grid content-center">
              <h2>Rosi-Mami</h2>
            </div>
            <div className=" hidden sm:grid   content-center ">
              <select className=" w-20 lg:w-max px-3 py-1 rounded-xl border focus:border-e-red-50 focus:outline-none text-green-400">
                <option value="">Activo</option>
                <option value="">Inactivo</option>
              </select>
            </div>
            <div className="   grid content-center">
              <select className=" px-3 py-1 w-20 lg:w-max rounded-xl border focus:border-e-red-50 focus:outline-none text-gray-500">
                <option value="">User</option>
                <option value="">Admin</option>
                <option value="">SuperUser</option>
              </select>
            </div>
            <div className="  flex gap-1  ">
              <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
                D
              </div>
              <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
                U
              </div>
            </div>
          </div>
            */}

          {users.map((users: UsersResponse, index) => (
            <UserItem
              _id={users.id}
              key={users.id}
              id={index + 1}
              name={users.name}
              state={users.isActive === true ? "Activo" : "Inactivo"}
              role={users.role[0]}
            />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default usuarios;

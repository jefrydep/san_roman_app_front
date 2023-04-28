import React from "react";

const usuarios = () => {
  return (
    <>
      <div className=" bg-gray-400 ">
        <h2 className="text-center py-4 font-bold text-lg text-blue-600">
          Modulo de usuarios
        </h2>
        <div className="flex justify-around   py-3">
          <div className="bg-blue-500 rounded-lg text-center  px-5 mr-4  text-white font-bold text-lg">
            <h2>Total de usuarios</h2>
            <div>45</div>
          </div>
          <div className="bg-blue-500 rounded-lg text-center px-5 text-white font-bold text-lg">
            <h2> Total de usuarios activos </h2>
            <div>43</div>
          </div>
        </div>
        <hr />
      </div>

      <div className="text-center flex flex-col items-center gap-3   py-5 bg-gray-400 ">
        <button className="rounded-lg    text-white font-bold  px-2 py-1 bg-blue-500 ">
          Agregar
        </button>
        <form className="  flex gap-3  " action="">
          <label className="text-white font-bold" htmlFor="">
            Buscar:
          </label>
          <input
            className="px-3 py-1 rounded-md outline-none  w-64  "
            type="text"
            placeholder="Jefry Palomino"
          />
        </form>
      </div>

      <main>
        <div className="grid grid-cols-7  sm:grid-cols-9 px-4 h-10 gap-3 text-white font-bold bg-blue-500">
          <div className="  ">
            <h2>Id</h2>
          </div>
          <div className="col-span-2">
            <h2>Nombre</h2>
          </div>
          <div className="col-span-2 hidden sm:block">
            <h2>Estatus</h2>
          </div>
          <div className="col-span-2  ">
            <h2>Rol</h2>
          </div>
          <div className="col-span-2 ">
            <h2>Acciones</h2>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-7 sm:grid-cols-9 ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="col-span-2 grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="col-span-2 hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="col-span-2  grid content-center">
            <h2>Admin</h2>
          </div>
          <div className="col-span-2 flex gap-1  ">
            <div className="bg-red-400 w-10 h-10 flex flex-col content-center justify-center  rounded-lg text-center text-white font-bold">
              D
            </div>
            <div className="bg-orange-400 w-10 h-10 flex rounded-lg flex-col content-center justify-center  text-center text-white font-bold">
              U
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default usuarios;

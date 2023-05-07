import React, { useState } from "react";

const usuarios = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className=" bg-white rounded-lg my-3">
        <h2 className="text-center py-4 font-bold text-lg text-blue-600">
          Modulo de usuarios
        </h2>
        <div className="flex justify-around   py-3">
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg text-center  px-5 mr-4  text-white font-bold text-lg">
            <h2>Total de usuarios</h2>
            <div>45</div>
          </div>
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg text-center px-5 text-white font-bold text-lg">
            <h2> Total de usuarios activos </h2>
            <div>43</div>
          </div>
        </div>
        <hr />
      </div>

      <div className="text-center flex flex-col items-center gap-3 rounded-lg rounded-b-none  py-5 bg-white">
        {!showModal ? (
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Agregar
          </button>
        ) : null}

        {/* vamos a centrar  un modal con css */}

        {showModal && (
          <div className=" fixed   left-0 top-0  flex     items-center justify-center bg-opacity-75  bg-gray-300 h-full w-full overflow-y-auto overflow-x-hidden outline-none">
            {/* <div className="absolute bg-red-500     top-1/2 left-1/2 grid grid-cols-1 h-max w-max">
    <input className="p-2 m-2" type="text"  placeholder="your name here"/>
    <input className="p-2 m-2" type="text"  placeholder="your name here"/>
    <input className="p-2 m-2" type="text"  placeholder="your name here"/>
    
  </div> */}

            <div className="flex   transition-shadow bg-white rounded-md   px-6 py-6   flex-col  shadow-xl   gap-2">
              <h3>Crear Usuario</h3>
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                Usuario
              </label>
              <input
                className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Jefry Palomino"
              />
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                Dni
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="75894565"
              />
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="************"
              
              />

              <div className="flex gap-4 justify-center mt-4">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}

        <form className="  flex flex-col  gap-3  " action="">
          {/* {showModal && (
            <div className="flex flex-col   items-center gap-2">
              <input
                className="px-3 py-1 rounded-2xl outline-none  w-64  "
                type="text"
                placeholder="Jefry Palomino"
              />
              <input
                className="px-3 py-1 rounded-2xl outline-none  w-64  "
                type="text"
                placeholder="Jefry Palomino"
              />
              <input
                className="px-3 py-1 rounded-2xl outline-none  w-64  "
                type="text"
                placeholder="Jefry Palomino"
              />
              <input
                className="px-3 py-1 rounded-2xl outline-none  w-64  "
                type="text"
                placeholder="Jefry Palomino"
              />
              <div>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="bg-orange-400 rounded-2xl text-white font-bold px-3 mx-4"
                >
                  Enviar
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="bg-orange-400 rounded-2xl text-white font-bold px-3 mx-4"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) } */}

          <section className="flex gap3">
            <label className="text-white font-bold" htmlFor="">
              Buscar:
            </label>
            <input
              className="px-3 py-1 rounded-md outline-none  w-64  "
              type="text"
              placeholder="Jefry Palomino"
            />
          </section>
        </form>
      </div>

      <main>
        <div className="grid grid-cols-5   px-4 h-10 gap-3 text-white font-bold bg-gradient-to-r from-violet-600 to-indigo-600">
          <div className="  ">
            <h2>Id</h2>
          </div>
          <div className=" ">
            <h2>Nombre</h2>
          </div>
          <div className="  hidden sm:block">
            <h2>Estatus</h2>
          </div>
          <div className="  ">
            <h2>Rol</h2>
          </div>
          <div className="  ">
            <h2>Acciones</h2>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-5   ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="  grid content-center">
            <h2>Rosi-Mami</h2>
          </div>
          <div className=" hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="   grid content-center">
            <h2>Admin</h2>
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
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-5   ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="  grid content-center">
            <h2>Rosi-Mami</h2>
          </div>
          <div className=" hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="   grid content-center">
            <h2>Admin</h2>
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
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-5   ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="  grid content-center">
            <h2>Rosi-Mami</h2>
          </div>
          <div className=" hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="   grid content-center">
            <h2>Admin</h2>
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
        <div className=" px-4 grid bg-white     border gap-3 py-3 grid-cols-5   ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="  grid content-center">
            <h2>Rosi-Mami</h2>
          </div>
          <div className=" hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">Activo</h2>
          </div>
          <div className="   grid content-center">
            <h2>Admin</h2>
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
        
       
      </main>
    </>
  );
};

export default usuarios;

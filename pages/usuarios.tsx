import React from "react";

const usuarios = () => {
  return (
    <>
      <h2 className="text-center font-bold text-lg text-blue-600">
        Modulo de usuarios
      </h2>
      <div className="flex justify-around h-20">
        <div className="bg-blue-950 rounded-lg text-center  px-5 mr-4  text-white font-bold text-lg">
            Total de usuarios
        </div>
        <div className="bg-blue-950 rounded-lg text-center px-5 text-white font-bold text-lg">
            Total de usuarios activos
        </div>
      </div>
      <hr />
      <div className="text-center">
        <button className="rounded-lg mx-5 my-5 text-white font-bold px-4 py-1 bg-blue-600 ">
          Agregar
        </button>
        <hr />
      </div>

      <main>
        <div className="grid grid-cols-9 px-4 h-10 text-white font-bold bg-blue-500">
          <div className=" bg-red-400"><h2>Id</h2></div>
          <div className="col-span-2"><h2>Nombre</h2></div>
          <div className="col-span-2"><h2>Estatus</h2></div>
          <div className="col-span-2"><h2>Rol</h2></div>
          <div className="col-span-2"><h2>Acciones</h2></div>
        </div>
        <div className=" px-4 grid border py-3 grid-cols-9 ">
            <div><h2>1</h2></div>
            <div className="col-span-2"><h2>J Palomino</h2></div>
            <div className="col-span-2"><h2 className="text-green-500">Activo</h2></div>
            <div className="col-span-2"><h2>Admin</h2></div>
            <div className="col-span-2">
                <div>D</div>
                <div>U</div>
            </div>
             

        </div>
        
      

      </main>
    </>
  );
};

export default usuarios;

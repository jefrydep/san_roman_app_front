import React, { useState } from "react";

const ventas = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className=" bg-gray-400 rounded-lg my-3">
        <h2 className="text-center py-4 font-bold text-lg text-blue-600">
          Modulo de Ventas
        </h2>
        <div className="flex justify-around   py-3">
          <div className="bg-blue-500 rounded-lg text-center  px-5 mr-4  text-white font-bold text-lg">
            <h2>Total de Ventas realizadas</h2>
            <div>450</div>
          </div>
          <div className="bg-blue-500 rounded-lg text-center px-5 text-white font-bold text-lg">
            <h2>Monto Total </h2>
            <div>S/ 4300</div>
          </div>
        </div>
        <hr />
      </div>

      <div className="text-center flex flex-col items-center gap-3 rounded-lg rounded-b-none  py-5 bg-gray-400 ">
        {!showModal ? (
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="rounded-lg    text-white font-bold  px-2 py-1 bg-blue-500 "
          >
            Agregar
          </button>
        ) : null}

        <form className="  flex flex-col  gap-3  " action="">
          {showModal && (
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
          ) }

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
        <div className="grid grid-cols-4  sm:grid-cols-7   px-4 h-10 gap-3 text-white font-bold bg-blue-500">
          <div className=" ">
            <h2>Id</h2>
          </div>
          <div className=" ">
            <h2>Cliente</h2>
          </div>
          <div className=" hidden sm:block">
            <h2>Lote</h2>
          </div>
          <div className="  ">
            <h2>Precio</h2>
          </div>
          <div className="   hidden sm:block ">
            <h2>Fecha</h2>
          </div>
          <div className="  hidden sm:block  ">
            <h2>Importe</h2>
          </div>
          <div className="  ">
            <h2>Accciones</h2>
          </div>
        </div>
        <div className=" px-4 grid bg-white     border gap-4 py-3 grid-cols-4 sm:grid-cols-7   ">
          <div className="grid content-center">
            <h2>1</h2>
          </div>
          <div className="  grid content-center">
            <h2>J Palomino</h2>
          </div>
          <div className="  hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">MA_LT_4</h2>
          </div>
          <div className="  grid content-center">
            <h2>S/ 9000</h2>
          </div>
          <div className="bg-green-400   content-center hidden sm:grid ">
            <h2>14/01/2023</h2>
          </div>
          <div className="  bg-green-400  hidden sm:grid font-bold content-center ">
            <h2 className="text-green-500">S/ 9000</h2>
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

export default ventas;

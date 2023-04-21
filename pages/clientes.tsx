import React from "react";

const clientes = () => {
  return (
    <>
      <div className="  flex flex-col my-4 w-full bg-white rounded-2xl  ">
        <div className="flex">
          <div className=" mt-5 mx-5 flex-auto   h-16 bg-orange-400 rounded-2xl  flex-row">
            ventas
          </div>
          <div className=" my-5 mx-5 flex-auto   h-16 bg-orange-400 rounded-2xl  flex-row">
            ventas
          </div>
          <div className=" my-5 mx-5 flex-auto    h-16 bg-orange-400 rounded-2xl  flex-row">
            ventas
          </div>
        </div>
        <div className="text-center">
          <button className="bg-green-400 my-2 rounded-xl px-3 text-white">
            Agregar
          </button>
        </div>
      </div>

      <div className=" flex h-screen bg-white rounded-2xl flex-col">
        <div className="overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr className=" border-x-2 mx-10 bg-white ">
                <th className="p-3 text-sm font-semibold tracking- text-left">
                  N°
                </th>
                <th className="p-3 text-sm font-semibold tracking- text-left">
                  Nombre y apellido
                </th>
                <th className="p-3 text-sm font-semibold tracking- text-left">
                  Proyecto
                </th>
                <th className="p-3 text-sm font-semibold tracking- text-left">
                  Estado
                </th>
                <th className="p-3 text-sm font-semibold tracking- text-left">
                  Manzana
                </th>
                <th className="p-3 text-sm font-semibold tracking- text-left">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody className=" ">
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700">1</td>
                <td className="p-3 text-sm text-gray-700">Jefry</td>
                <td className="p-3 text-sm text-gray-700">contaco</td>
                <td className="p-3 text-sm text-gray-700">
                  <button className="  rounded-2xl px-3 text-white bg-orange-400">
                    vendido
                  </button>
                </td>

                <td className="p-3 text-sm text-gray-700"> mr-2 </td>
                <td className="p-3 text-sm text-gray-700">20.000</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700">1</td>
                <td className="p-3 text-sm text-gray-700">Jefry</td>
                <td className="p-3 text-sm text-gray-700">contaco</td>
                <td className="p-3 text-sm text-gray-700">
                  <button className="  rounded-2xl px-3 text-white bg-orange-400">
                    vendido
                  </button>
                </td>

                <td className="p-3 text-sm text-gray-700"> mr-2 </td>
                <td className="p-3 text-sm text-gray-700">20.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1   md:hidden">

          <div className="bg-white my-2 p-2 rounded-lg shadow">
            <div className="flex flex-row justify-between space-x-2">
              <div>Order number</div>
              <div>Date</div>
              <div>status</div>
              <button className="bg-green-400 my-2 rounded-xl px-3 text-white">
            Reservar
          </button>
            </div>
          </div>
          <div className="bg-white my-2 p-2 rounded-lg shadow">
            <div className="flex flex-row justify-between space-x-2">
              <div>Order number</div>
              <div>Date</div>
              <div>status</div>
              <button className="bg-green-400 my-2 rounded-xl px-3 text-white">
            Agregar
          </button>
            </div>
          </div>
          <div className="bg-white my-2 p-2 rounded-lg shadow">
            <div className="flex flex-row justify-between space-x-2">
              <div>Order number</div>
              <div>Date</div>
              <div>status</div>
              <button className="bg-green-400 my-2 rounded-xl px-3 text-white">
            Agregar
          </button>
            </div>
          </div>
          <div className="bg-white my-2 p-2 rounded-lg shadow">
            <div className="flex flex-row justify-between space-x-2">
              <div>Order number</div>
              <div>Date</div>
              <div>status</div>
              <button className="bg-green-400 my-2 rounded-xl px-3 text-white">
            Agregar
          </button>
            </div>
          </div>
           


        </div>
      </div>
    </>
  );
};

export default clientes;

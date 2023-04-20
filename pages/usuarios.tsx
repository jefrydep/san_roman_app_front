import React from "react";

const usuarios = () => {
  return (
    <>
      <div className=" mt-5  flex   bg-white rounded-2xl justify-a  flex-row">
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
      <button className="bg-green-400 rounded-xl px-3 text-white">
        Agregar
      </button>

      <div className=" flex h-screen bg-white rounded-2xl justify-a  flex-col">
      <table className="mx-10 my-10 pt-7 ">
          <thead className="">
            <tr className=" border-x-2 mx-10 ">
              <th className="border p-2">N°</th>
              <th className="border-y-2  ">Nombre y apellido</th>
              <th className="border-2">Proyecto</th>
              <th className="border-2">Estado</th>
              <th className="border-2">Manzana</th>
              <th className="border-2">Precio</th>
            </tr>
          </thead>
          <tbody className=" ">
            <tr className="">
              <td className="border-2 px-4 py-1">
                1
              </td>
              <td className="border-2 px-4 py-1">
                The d Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border-2 px-4 py-1">Malcolm Lockyer</td>
              <td className="border-2 py-1 ">
                <div className="bg-green-700 mx-3 rounded-xl text-center text-white">
                  activo
                </div>
              </td>
              <td className="border-2">Malcolm Lockyer</td>
              <td className="border-2">1961</td>
            </tr>
            <tr>
            <td className="border-2 px-4">
                2
              </td>
              <td className="border-2 px-4">Witchy Woman</td>
              <td className="border-2">The Eagles</td>
              <td className="border-2 py-1">
                <div className="bg-green-700 mx-3 rounded-xl text-center text-white">
                  activo
                </div>
              </td>
              <td className="border-2">The Eagles</td>
              <td className="border-2">1972</td>
            </tr>
            <tr>
            <td className="border-2 px-4">
                3
              </td>
              <td className="border-2 px-4">Shining Star</td>
              <td className="border-2">Earth, Wind, and Fire</td>
              <td className="border-2 py-1">
                <div className="bg-green-700 rounded-xl mx-3 text-center text-white">
                  activo
                </div>
              </td>
              <td className="border-2">Earth, Wind, and Fire</td>
              <td className="border-2">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default usuarios;

import TableWidget from "@/widgets/TableWidget";
import React, { useState } from "react";

const usuarios = () => {
  const dataUsers = [
    {
      id: 1,
      fullName: "Jefry Palomino Mayta",
      proyecto: "Merida",
      estado: "activo",
      manza: "Mz-Z1",
      precio: "S/ 20.000",
    },
    {
      id: 2,
      fullName: "Jefry Palomino Mayta",
      proyecto: "Merida",
      estado: "activo",
      manza: "Mz-Z1",
      precio: "S/ 20.000",
    },
    {
      id: 3,
      fullName: "Jefry Palomino Mayta",
      proyecto: "Merida",
      estado: "activo",
      manza: "Mz-Z1",
      precio: "S/ 20.000",
    },
    {
      id: 4,
      fullName: "Jefry Palomino Mayta",
      proyecto: "Merida",
      estado: "activo",
      manza: "Mz-Z1",
      precio: "S/ 20.000",
    },
    {
      id: 5,
      fullName: "Jefry Palomino Mayta",
      proyecto: "Merida",
      estado: "activo",
      manza: "Mz-Z1",
      precio: "S/ 20.000",
    },
    {
      id: 6,
      fullName: "Jefry Palomino Mayta",
      proyecto: "Merida",
      estado: "activo",
      manza: "Mz-Z1",
      precio: "S/ 20.000",
    },
    {
      id: 7,
      fullName: "Jefry Palomino Mayta",
      proyecto: "Merida",
      estado: "activo",
      manza: "Mz-Z1",
      precio: "S/ 20.000",
    },
    {
      id: 8,
      fullName: "Rol Palomino Mayta",
      proyecto: "Merida",
      estado: "activo",
      manza: "Mz-Z1",
      precio: "S/ 20.000",
    },
  ];

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

      <div className=" flex h-screen bg-white rounded-2xl flex-col">
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
          {dataUsers.map((users:any) => (
            <TableWidget
              key={users.id}
              number={users.id}
              firstValue={users.fullName}
              secondValue={users.proyecto}
              thirthValue={users.estado}
              fourthValue={users.manza}
              fifthValue={users.precio}
            />
          ))}
        </table>
      </div>
    </>
  );
};

export default usuarios;

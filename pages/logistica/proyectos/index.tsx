import Layout from "@/components/Layout";
import TableHead from "@/components/ui/table/TableHead";
 
import DescribeUser from "@/components/users/UserItem";
import { UsersResponse } from "@/interfaces/userResponseInterface";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { url } from "inspector";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useSession } from "next-auth/client";
const projectTitle = [
  "id",
  "Cliente",
  "Cuota",
  "Telefono",
  "Fecha de Venta",
  "Sig-Pago",
  "Restante",
];

export default function Proyectos() {
  // const router = useRouter();
  const session = useSession();
  console.log(session);
  return (
    <>
      <Layout>
        <div className=" bg-white rounded-lg my-3">
          <h2 className="text-center py-4 font-bold text-2xl text-blue-400">
            Inmobiliaria Palomino
          </h2>
          <div className="grid grid-cols-2 justify-around  py-3">
            <div className=" items-center px-3 mx-3 py-3 rounded-lg text-center flex  gap-3 shadow-md mr-4  text-white font-bold text-lg">
              <UserIcon className="h-12 p-2  bg-orange-400 rounded-full" />
              <div>
                <h2 className="text-gray-400">Total de Proyectos</h2>
                <div className="text-orange-400">5</div>
              </div>
            </div>
            <div className=" items-center mx-3 px-3 py-3 rounded-lg text-center flex  gap-3 shadow-md mr-4  text-white font-bold text-lg">
              <UserPlusIcon className="h-12 p-2  bg-green-400 rounded-full" />
              <div>
                <h2 className="text-gray-400">proyectos culminados </h2>
                <div className="text-orange-400">2</div>
              </div>
            </div>
            <div className="mx-3 my-5">
              <div>
                <h2 className="my-3 text-gray-300 font-bold text-2xl">
                  Listado de Proyectos
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col  mb-3 gap-4">
            <input
              type="text"
              placeholder="Buscar Por Dni"
              className="px-3 border mx-4 text-gray-400 py-2 rounded-md outline-gray-400 shadow-sm"
            />
            <button className="border mx-4 rounded-md px-6 hover:text-white hover:bg-slate-700 hover:font-bold">
              Buscar
            </button>
          </div>
          <hr />
        </div>

        <section className="overflow-x-scroll relative    h-[48vh]  ">
          <TableHead rows="7">
            {projectTitle.map((title,index) => (
              <div key={index} className="">
                <h2 className="">{title}</h2>
              </div>
            ))}
          </TableHead>
           
          <div className=" px-4 grid bg-white w-[900px] content-center lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className="   ">
              <h2>1</h2>
            </div>
            <div className="   ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="    ">
              <h2>s/500</h2>
            </div>
            <div className="     ">
              <h2 className="">958205138</h2>
            </div>
            <div className="       ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="       ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500   ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
         
         
        </section>
        <div className="sticky bottom-0 px-4 bg-blue-400 text-white font-bold">
          <h3>@Inmobiliaria Palomino</h3>
        </div>
      </Layout>
    </>
  );
}

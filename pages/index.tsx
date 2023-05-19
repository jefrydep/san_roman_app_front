import Layout from "@/components/Layout";
import DescribeUser from "@/components/users/DescribeUser";
import { UsersResponse } from "@/userResponseInterface";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { url } from "inspector";
import { useEffect, useState } from "react";

export default function Home() {
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
                <h2 className="text-gray-400">Total de Lotes</h2>
                <div className="text-orange-400">450</div>
              </div>
            </div>
            <div className=" items-center mx-3 px-3 py-3 rounded-lg text-center flex  gap-3 shadow-md mr-4  text-white font-bold text-lg">
              <UserPlusIcon className="h-12 p-2  bg-green-400 rounded-full" />
              <div>
                <h2 className="text-gray-400">Lotes Disponibles</h2>
                <div className="text-orange-400">200</div>
              </div>
            </div>
            <div className="mx-3 my-5">
              <div>
                <h2 className="my-3 text-gray-300 font-bold text-2xl">
                  Listado de Creditos
                </h2>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Buscar"
                  className="px-3 border text-gray-400 py-2 rounded-md outline-gray-400 shadow-sm"
                />
              </div>
            </div>
          </div>
          <hr />
        </div>

        <section className="overflow-x-scroll ">
          <div className="grid  w-[900px] lg:w-auto grid-cols-7 content-center shadow-md  px-4 h-10 gap-3 text-white font-bold bg-[#1C5CFF]">
            <div className="">
              <h2 className="">Id</h2>
            </div>
            <div className="">
              <h2>Cliente</h2>
            </div>
            <div className="    ">
              <h2>Cuota</h2>
            </div>
            <div className="">
              <h2>Telefono</h2>
            </div>
            <div className="">
              
              <h2>Fecha de venta</h2>
            </div>
            <div className="">
              <h2>Sig-pago</h2>
            </div>
            <div className="">
              <h2>Restante</h2>
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
          <div className=" px-4 grid bg-white w-[900px] lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className=" content-center ">
              <h2>1</h2>
            </div>
            <div className=" content-center grid ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="  grid content-center">
              <h2>s/500</h2>
            </div>
            <div className="    content-center ">
              <h2 className="">958205138</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500 font-bold   content-center ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
          <div className=" px-4 grid bg-white w-[900px] lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className=" content-center ">
              <h2>1</h2>
            </div>
            <div className=" content-center grid ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="  grid content-center">
              <h2>s/500</h2>
            </div>
            <div className="    content-center ">
              <h2 className="">958205138</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500 font-bold   content-center ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
          <div className=" px-4 grid bg-white w-[900px] lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className=" content-center ">
              <h2>1</h2>
            </div>
            <div className=" content-center grid ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="  grid content-center">
              <h2>s/500</h2>
            </div>
            <div className="    content-center ">
              <h2 className="">958205138</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500 font-bold   content-center ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
          <div className=" px-4 grid bg-white w-[900px] lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className=" content-center ">
              <h2>1</h2>
            </div>
            <div className=" content-center grid ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="  grid content-center">
              <h2>s/500</h2>
            </div>
            <div className="    content-center ">
              <h2 className="">958205138</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500 font-bold   content-center ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
          <div className=" px-4 grid bg-white w-[900px] lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className=" content-center ">
              <h2>1</h2>
            </div>
            <div className=" content-center grid ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="  grid content-center">
              <h2>s/500</h2>
            </div>
            <div className="    content-center ">
              <h2 className="">958205138</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500 font-bold   content-center ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
          <div className=" px-4 grid bg-white w-[900px] lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className=" content-center ">
              <h2>1</h2>
            </div>
            <div className=" content-center grid ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="  grid content-center">
              <h2>s/500</h2>
            </div>
            <div className="    content-center ">
              <h2 className="">958205138</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500 font-bold   content-center ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
          <div className=" px-4 grid bg-white w-[900px] lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className=" content-center ">
              <h2>1</h2>
            </div>
            <div className=" content-center grid ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="  grid content-center">
              <h2>s/500</h2>
            </div>
            <div className="    content-center ">
              <h2 className="">958205138</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500 font-bold   content-center ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
          <div className=" px-4 grid bg-white w-[900px] lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className=" content-center ">
              <h2>1</h2>
            </div>
            <div className=" content-center grid ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="  grid content-center">
              <h2>s/500</h2>
            </div>
            <div className="    content-center ">
              <h2 className="">958205138</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500 font-bold   content-center ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
          <div className=" px-4 grid bg-white w-[900px] lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className=" content-center ">
              <h2>1</h2>
            </div>
            <div className=" content-center grid ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="  grid content-center">
              <h2>s/500</h2>
            </div>
            <div className="    content-center ">
              <h2 className="">958205138</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500 font-bold   content-center ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
          <div className=" px-4 grid bg-white w-[900px] lg:w-auto  border gap-4 py-3 grid-cols-7   ">
            <div className=" content-center ">
              <h2>1</h2>
            </div>
            <div className=" content-center grid ">
              <h2>Jefry Palomino</h2>
            </div>
            <div className="  grid content-center">
              <h2>s/500</h2>
            </div>
            <div className="    content-center ">
              <h2 className="">958205138</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/06/2023</h2>
            </div>
            <div className="     content-center ">
              <h2 className="">12/07/2023</h2>
            </div>{" "}
            <div className="px-2 bg-green-500 font-bold   content-center ">
              <h2 className="text-white">S/5000</h2>
            </div>
          </div>
           
        </section>
      </Layout>
    </>
  );
}

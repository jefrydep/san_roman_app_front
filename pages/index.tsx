import Layout from "@/components/Layout";
 
import ContentHome from "@/components/ui/table/ContentHome";
import TableHead from "@/components/ui/table/TableHead";
import HeadContent from "@/components/ui/table/home/HeadContent";
import DescribeUser from "@/components/users/DescribeUser";
import { UsersResponse } from "@/userResponseInterface";
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
  "cliente",
  "Cuota",
  "Telefono",
  "Fecha de Venta",
  "Sig-Pago",
  "Restante",
];
const dataCreditos = [
  {
    id: "1",
    client: "Godofredo palomino Mayta",
    cuota: "$500",
    numberPhone: "958294565",
    firstDate: "12/04/2013",
    secondDate: "12/98/2023",
    remaining: "$2000",
  },
  {
    id: "2",
    client: "Godofredo palomino Mayta",
    cuota: "$500",
    numberPhone: "958294565",
    firstDate: "12/04/2013",
    secondDate: "12/98/2023",
    remaining: "$2000",
  },
  {
    id: "3",
    client: "Godofredo palomino Mayta",
    cuota: "$500",
    numberPhone: "958294565",
    firstDate: "12/04/2013",
    secondDate: "12/98/2023",
    remaining: "$2000",
  },
  {
    id: "4",
    client: "Godofredo palomino Mayta",
    cuota: "$500",
    numberPhone: "958294565",
    firstDate: "12/04/2013",
    secondDate: "12/98/2023",
    remaining: "$2000",
  },
  {
    id: "5",
    client: "Godofredo palomino Mayta",
    cuota: "$500",
    numberPhone: "958294565",
    firstDate: "12/04/2013",
    secondDate: "12/98/2023",
    remaining: "$2000",
  },
  {
    id: "6",
    client: "Godofredo palomino Mayta",
    cuota: "$500",
    numberPhone: "958294565",
    firstDate: "12/04/2013",
    secondDate: "12/98/2023",
    remaining: "$2000",
  },
  {
    id: "7",
    client: "Godofredo palomino Mayta",
    cuota: "$500",
    numberPhone: "958294565",
    firstDate: "12/04/2013",
    secondDate: "12/98/2023",
    remaining: "$2000",
  },
  {
    id: "8",
    client: "Godofredo palomino Mayta",
    cuota: "$500",
    numberPhone: "958294565",
    firstDate: "12/04/2013",
    secondDate: "12/98/2023",
    remaining: "$2000",
  },
  {
    id: "9",
    client: "Godofredo palomino Mayta",
    cuota: "$500",
    numberPhone: "958294565",
    firstDate: "12/04/2013",
    secondDate: "12/98/2023",
    remaining: "$2000",
  },
  {
    id: "10",
    client: "Godofredo palomino Mayta",
    cuota: "$500",
    numberPhone: "958294565",
    firstDate: "12/04/2013",
    secondDate: "12/98/2023",
    remaining: "$2000",
  },  
];
export default function Home() {
  // const router = useRouter();
  const {data:session} = useSession();
  console.log(session);
  return (
    <>
      <Layout>
         <HeadContent title={`Bienvenido ${session?.user?.name}`} totalTitle="Total de Lotes" total="235" availableTitle="Lotes disponibles" available="289" secondTitle="Listado de Creditos" >


         <div className="flex flex-col  mb-3 gap-4">
            <input
              type="text"
              placeholder="Buscar Por Dni"
              className="px-3 border mx-4 text-gray-400 py-2 rounded-md outline-gray-400 shadow-sm"
            />
            
          </div>
         </HeadContent>

        <section className="overflow-x-scroll relative    h-[48vh]  ">
          <TableHead rows="7">
            {projectTitle.map((title, index) => (
              <div key={index} className="">
                <h2 className="">{title}</h2>
              </div>
            ))}
          </TableHead>
          {dataCreditos.map((creditos) => (
            <ContentHome key={creditos.id} {...creditos} />
          ))}
        </section>
        <div className="sticky bottom-0 px-4 bg-blue-400 text-white font-bold">
          <h3>@Inmobiliaria Palomino</h3>
        </div>
      </Layout>
    </>
  );
}

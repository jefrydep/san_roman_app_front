import { forwardRef, useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  CreditCardIcon,
  TableCellsIcon,
  HomeModernIcon,
  MapIcon,
} from "@heroicons/react/24/solid";
import { HiHome } from "react-icons/hi";
import { useRouter } from "next/router";
import CustomLink from "./Link/CustomLink";
import DropDown from "./Link/DropDown";
import { SiSecurityscorecard } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { FcSalesPerformance  } from "react-icons/fc";
import { GiLightProjector } from "react-icons/gi";
import { IoMdMap } from "react-icons/io";
const SideBar = forwardRef(({ showNav }: any, ref: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showReportes, setShowReportes] = useState(false);
  const router = useRouter();

  return (
    
    <div

      ref={ref}
      className=" overflow-y-auto fixed w-56 h-full scroll-smooth border bg-[#17286B]  shadow-sm"
    >
      <div className="flex justify-center mt-6 mb-14">
        <picture className="bg-white rounded-full p-6">
          <img className="w-32 h-auto" src="/logo.png" alt="company logo" />
          {/* <h2 className="font-bold"> SAN ROMAN SAC</h2> */}
        </picture>
      </div>

      <div className="flex flex-col z-20 ">
         
       

       <CustomLink path="/" routerName="Inicio" icon={<HiHome/>} />
        <hr className="my-5" />
       <h4 className="text-white ml-6">SEGURIDAD</h4> 
       <CustomLink path="/seguridad/usuarios" routerName="Usuarios" icon={<HiHome/>} /> 
       <CustomLink path="/seguridad/permisos" routerName="Permisos" icon={<HiHome/>} /> 
        <hr className="my-5" />
       <h4 className="text-white ml-6">LOGISTICA</h4> 
       <CustomLink path="/logistica/proyectos" routerName="Proyectos" icon={<HiHome/>} /> 
       <CustomLink path="/logistica/manzanas" routerName="Manzanas" icon={<HiHome/>} /> 
       <CustomLink path="/logistica/lotes" routerName="Lotes" icon={<HiHome/>} /> 
        <hr className="my-5" />
       <h4 className="text-white ml-6">Reportes</h4> 
       <CustomLink path="/reportes/clientes" routerName="Clientes" icon={<HiHome/>} /> 
       <CustomLink path="/reportes/ventas" routerName="Ventas" icon={<HiHome/>} /> 
         
 

        
         
 
         
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;

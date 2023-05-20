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
         
      <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-[#697DB3] text-white"
                : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <HiHome className=" " />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
         

        <DropDown icon={<SiSecurityscorecard/>} onClick={()=> setShowSecurity(!showSecurity)}  routName="SEGURIDAD"/>
        {
          showSecurity&& <div className=" ml-10 border-l-4 mb-3 border-white rounded-sm">
          <div    className="pl-3 py-2 text-gray-400 "><CustomLink   path="/seguridad/usuarios" routerName="Usuarios"/></div>
          <div   className="pl-3 py-2  text-gray-400"><CustomLink path="/seguridad/permisos" routerName="Permisos"/></div>
        </div>

        }
        <DropDown icon={<TbReportSearch/>} onClick={()=> setShowReportes(!showReportes)}  routName="REPORTES"/>
        {
          showReportes&& <div className=" ml-10 border-l-4 mb-3 border-white rounded-sm">
          <div    className="pl-3 py-2 text-gray-400 "><CustomLink   path="/reportes/clientes" routerName="Clientes"/></div>
          <div   className="pl-3 py-2  text-gray-400"><CustomLink path="/reportes/ventas" routerName="Ventas"/></div>
        </div>

        }

       
       
         
        <Link href="/ventas">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/ventas"
                ? "bg-[#697DB3] text-white"
                : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <FcSalesPerformance className="h-5 w-5" />
            </div>
            <div>
              <p>Ventas</p>
            </div>
          </div>
        </Link>
        <Link href="/proyectos">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/proyectos"
                ? "bg-[#697DB3] text-white"
                : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <GiLightProjector className="h-5 w-5" />
            </div>
            <div>
              <p>Proyectos</p>
            </div>
          </div>
        </Link>
        <Link href="/lotes">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/Lotes"
                ? "bg-[#697DB3] text-white"
                : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <IoMdMap className="h-5 w-5" />
            </div>
            <div>
              <p>Lotes</p>
            </div>
          </div>
        </Link>
        <Link href="/manzana">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/manzana"
                ? "bg-[#697DB3] text-white"
                : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Manzanas</p>
            </div>
          </div>
        </Link>
         

        <div className="grid grid-cols-1 ">
          <Link href="/reportes">
            <div
              onClick={() => setShowMenu(!showMenu)}
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer  flex items-center transition-colors ${
                router.pathname == "/reportes"
                  ? "bg-[#697DB3] text-white"
                  : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
              }`}
            >
              <div className="mr-2">
                <CreditCardIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Reportes</p>
              </div>
            </div>
          </Link>

          {showMenu && (
            <div className="grid  py-1 pr-4 mx-5 justify-end rounded">
              <Link href="/reportes">
                <div>de ventas</div>
              </Link>
              <div>de compras</div>
              <div>de gastos</div>
              <div>de clientes</div>
            </div>
          )}
        </div>

         
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;

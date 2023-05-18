import { forwardRef, useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon,
  UserGroupIcon,
  TableCellsIcon,
  HomeModernIcon,
  MapIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import CustomLink from "./Link/CustomLink";
import { IconType } from "recharts/types/component/DefaultLegendContent";

const SideBar = forwardRef(({ showNav }: any, ref: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
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

      <div className="flex flex-col ">
        {/* <CustomLink
          path="/"
          routerName="home"
          icon={<HomeIcon className="h-5 w-5" />}
          hiddenIcon="hidden"
        /> */}

        <CustomLink  onClick={()=>setShowSecurity(!showSecurity)} path="/usuarios"
       
          routerName="Seguridad"
          icon={<UserIcon />}
          />
        {/* 
        <Link href="/usuarios" onClick={() => setShowSecurity(!showSecurity)}>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 gap-2 flex items-center transition-colors ${
              router.pathname == "/usuarios"
                ? "bg-[#697DB3] text-white"
                : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Seguridad</p>
            </div>
            {!showSecurity ? (
              <ChevronDownIcon className="h-5 w-5" />
            ) : (
              <ChevronUpIcon className="h-5 w-5" />
            )}
          </div>
        </Link> */}
        {showSecurity && (
          <div className=" ml-10 border-l-4 mb-3 border-white rounded-sm">
            <div className="pl-14 py-2 text-gray-400 ">Permisos</div>
            <div className="pl-14 py-2  text-gray-400">Clientes</div>
          </div>
        )}
        <Link href="/clientes">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/clientes"
                ? "bg-[#697DB3] text-white"
                : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <UserGroupIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Logistica</p>
            </div>
          </div>
        </Link>
        <Link href="/ventas">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/ventas"
                ? "bg-[#697DB3] text-white"
                : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <TableCellsIcon className="h-5 w-5" />
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
              <HomeModernIcon className="h-5 w-5" />
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
              <MapIcon className="h-5 w-5" />
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
        <Link href="/gastos">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/gastos"
                ? "bg-[#697DB3] text-white"
                : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Gastos</p>
            </div>
          </div>
        </Link>
        {/* <CustomLink
          path="/prueb"
          routerName="prueba"
          icon={<CreditCardIcon className="h-5 w-5" />}
          hiddenIcon="hidden"
        /> */}

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

        <div className="text-white  "> jefrydep@gmail.com</div>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;

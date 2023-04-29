import { forwardRef, useState } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }: any, ref: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full scroll-smooth border bg-[#0f172a] shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture className="bg-white rounded-full p-6">
          <img className="w-32 h-auto" src="/logo.png" alt="company logo" />
          {/* <h2 className="font-bold"> SAN ROMAN SAC</h2> */}
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/usuarios">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/usuarios"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Usuarios</p>
            </div>
          </div>
        </Link>
        <Link href="/clientes">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/clientes"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>clientes</p>
            </div>
          </div>
        </Link>
        <Link href="/ventas">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/ventas"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
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
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
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
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
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
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
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
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
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

        <div className="grid grid-cols-1 ">
          <Link href="/reportes">
            <div
              onClick={() => setShowMenu(!showMenu)}
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer  flex items-center transition-colors ${
                router.pathname == "/reportes"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
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

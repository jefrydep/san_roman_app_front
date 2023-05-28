import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import   { useRouter } from "next/router";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { IconType } from "recharts/types/component/DefaultLegendContent";
import { menu } from "@material-tailwind/react";

interface LinkProps {
  path: string;
  routerName: string;
  icon?: ReactNode;
 
 
 
}

const CustomLink = ({ path, routerName,icon}: LinkProps) => {
  // const [showMenuItem, setShowMenuItem] = useState(false);
  // const handleClick = (e:React.MouseEvent<HTMLDivElement>)=>{
  //   // const handleClick = ( )=>{
  //       e.preventDefault();
  //       // onClick();
  //       // setShowMenuItem(!showMenuItem);
        
  //   }
 
  const router = useRouter()
  return (
    <>
      <Link href={path}   >
        <div
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            router.pathname == path
              ? "bg-[#697DB3] text-white"
              : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
          }`}
        >
          <div className="mr-2">
            {/* <UserIcon className="h-5 w-5" /> */}
            {icon }
          </div>
          <div className="text-white">
            <p>{routerName}</p>
          </div>


        </div>
      </Link>
    </>
  );
};

export default CustomLink;

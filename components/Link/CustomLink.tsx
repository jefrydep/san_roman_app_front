import React, { ReactNode, useState } from "react";
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
 
  onClick:()=> void;
  hiddenIcon?:string;
}

const CustomLink = ({ path, routerName,icon,hiddenIcon,onClick}: LinkProps) => {
  const [showMenuItem, setShowMenuItem] = useState(false);
//   const handleClick = (e:React.MouseEvent<HTMLDivElement>)=>{
  const handleClick = ( )=>{
  
   onClick();
    setShowMenuItem(!showMenuItem);
     
  }
  const router = useRouter()
  return (
    <>
      <Link href={path} onClick={handleClick}>
        <div
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 gap-2 flex items-center transition-colors ${
            router.pathname ==  path
              ? "bg-[#697DB3] text-white"
              : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
          }`}
        >
          <div className="mr-2">
            {/* <UserIcon className="h-5 w-5" /> */}
            {icon }
          </div>
          <div>
            <p>{routerName}</p>
          </div>
 
 
          {!showMenuItem ? (
            <ChevronDownIcon className={`h-5 w-5 ${hiddenIcon}`} />
          ) : (
            <ChevronUpIcon className={`h-5 w-5 ${hiddenIcon}`} />
          )}

        </div>
      </Link>
    </>
  );
};

export default CustomLink;

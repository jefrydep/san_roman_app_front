import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import React, { ReactNode, useState } from 'react'
interface DropDownProps{
    icon?:ReactNode;
    routName:string;
    onClick:()=> void;
}
const DropDown = ({icon,routName,onClick}:DropDownProps) => {
const [showMenuITem, setShowMenuITem] = useState(false)
   const  router = useRouter()
    //  const handleClick = ()=>{
    const handleClick = ( )=>{
        // e.preventDefault();
        onClick();
        setShowMenuITem(!showMenuITem);
        
    }
   console.log(router);
  return (
    < >
     <div onClick={handleClick}
          className={`pl-6 hover:bg-[#3C4AB8] hover:text-white py-3 mx-5 rounded text-center cursor-pointer mb-3 gap-2 flex items-center transition-colors  ${
            router.pathname ==  routName
              ? "bg-[#697DB3] text-white"
              : "text-gray-400 hover:bg-[#3C4AB8] hover:text-white"
          } `}
          
        >
          <div className="mr-2">
            {/* <UserIcon className="h-5 w-5" /> */}
            {icon }
          </div>
          <div>
            <p>{routName}</p>
          </div>
          {!showMenuITem ? (
              <ChevronDownIcon className="h-5 w-5" />
            ) : (
              <ChevronUpIcon className="h-5 w-5" />
            )}


        </div> </ >
  )
}

export default DropDown
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React, { PropsWithChildren } from "react";
interface HeadProps {
  title: string;
  totalTitle: string;
  total: string;

  availableTitle: string;
  available: string;
  secondTitle: string;
}
const HeadContent = ({
  title,
  totalTitle,
  total,
  availableTitle,
  available,
  secondTitle,
  children,
}: PropsWithChildren<HeadProps>) => {
  return (
    <div className=" bg-white rounded-lg my-3 py-5">
      <h2 className="text-center py-4 font-bold text-2xl text-blue-400">
        {title}
      </h2>
      <div className="grid grid-cols-2 justify-around  py-3">
        <div className=" items-center px-3 mx-3 py-3 rounded-lg text-center flex  gap-3 shadow-md mr-4  text-white font-bold text-lg">
          <UserIcon className="h-12 p-2  bg-orange-400 rounded-full" />
          <div>
            <h2 className="text-gray-400">{totalTitle}</h2>
            <div className="text-orange-400">{total}</div>
          </div>
        </div>
        <div className=" items-center mx-3 px-3 py-3 rounded-lg text-center flex  gap-3 shadow-md mr-4  text-white font-bold text-lg">
          <UserPlusIcon className="h-12 p-2  bg-green-400 rounded-full" />
          <div>
            <h2 className="text-gray-400">{availableTitle}</h2>
            <div className="text-orange-400">{available}</div>
          </div>
        </div>
        <div className="mx-3 my-5">
          <div>
            <h2 className="my-3 text-gray-300 font-bold text-2xl">
              {secondTitle || "Lista"}
            </h2>
          </div>
        </div>
      </div>
       {children}
    </div>
  );
};

export default HeadContent;

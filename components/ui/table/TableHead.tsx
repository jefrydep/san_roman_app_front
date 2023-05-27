import  { PropsWithChildren } from "react";

interface TitleProps {
  rows: string;
}
const TableHead = ({ rows,children }: PropsWithChildren<TitleProps>) => {
  return (
    <>
      {/* <div className="grid  sticky top-0   w-[900px] lg:w-auto grid-cols-7 content-center shadow-md  px-4 h-10 gap-3 text-white font-bold bg-[#1C5CFF]"> */}
      <div className={` grid  sticky top-0   w-[900px] lg:w-auto grid-cols-${rows} content-center shadow-md  px-4 h-10 gap-3 text-white font-bold bg-[#1C5CFF]`}>
         {children}
      </div>
    </>
  );
};

export default TableHead;

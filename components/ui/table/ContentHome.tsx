import { PropsWithChildren } from "react";

interface TitleProps {
  id: string;
  client: string;
  cuota: string;
  numberPhone: string;
  firstDate: string;
  secondDate: string;
  remaining: string;
}
const ContentHome = ({ id,client,cuota,numberPhone,firstDate,secondDate,remaining }: PropsWithChildren<TitleProps>) => {
  return (
    <>
      <div
        className={` px-4 grid bg-white w-[900px] content-center lg:w-auto  border gap-4 py-3 grid-cols-7 `}
      >
        
        <div className="   ">
          <h2>{id}</h2>
        </div>
        <div className=" ">
          <h2>{client} </h2>  
        </div>
        <div className="    ">
          <h2>{cuota} </h2>
        </div>
        <div className="     ">
          <h2 className="">{numberPhone}</h2>
        </div>
        <div className="       ">
          <h2 className="">{firstDate} </h2>
        </div>
        <div className="       ">
          <h2 className="">{secondDate}</h2>
        </div>{" "}
        <div className="px-2 bg-green-500   ">
          <h2 className="text-white">{remaining}</h2>
        </div>
      </div>
    </>
  );
};

export default ContentHome;

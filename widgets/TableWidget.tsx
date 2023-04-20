import React, { useState } from 'react'
export interface InputTableValues   {
    number:string,
    firstValue:string,
    secondValue:string,
    thirthValue:string;
    fourthValue:string;
    fifthValue:string;

}
const TableWidget = ({number,firstValue,secondValue,thirthValue,fourthValue,fifthValue}:InputTableValues) => {
    
  const [isactive, setIsactive] = useState(true)

  const handleIsUserActove = ()=>{
  setIsactive(!isactive)

  }
  return (
    < >
      <tbody className=" ">

            <tr className="">
              <td className="border-2 px-4 py-1">
                {number}
              </td>
              <td className=" truncate overflow-hidden overflow-ellipsis border-2 px-4 py-1">
                {firstValue}
              </td>
              <td className="border-2 px-4 py-1">{secondValue}</td>
              <td className="border-2 py-1 ">
              
              {isactive?    <button  className="min-w-[85px] bg-green-700 mx-3 rounded-xl text-center text-white" onClick={handleIsUserActove}>
                 
            {thirthValue}
               
               </button>:   <button className=" min-w-[85px] bg-orange-300 mx-3 rounded-xl text-center text-white" onClick={handleIsUserActove}>
               
                 Inactivo
                
               </button>}
                
              </td>
              <td className="border-2">{fourthValue} </td>
              <td className="border-2">{fifthValue} </td>
            </tr>
            
          </tbody>
    </ >
  )
}

export default TableWidget
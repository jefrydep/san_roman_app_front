import { useState } from 'react'
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
              <td className="border-2 ">
                {
                  isactive? <button onClick={handleIsUserActove} className='text-white rounded-2xl px-3 bg-green-400'>{thirthValue} </button>:
                  <button onClick={handleIsUserActove} className='  rounded-2xl px-3 text-white bg-orange-400'>vendido</button>
                }
             
              
              </td>
             
              <td className="border-2 ">{fourthValue} </td>
              <td className="border-2">{fifthValue} </td>
            </tr>
            
          </tbody>
    </ >
  )
}

export default TableWidget
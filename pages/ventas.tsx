import React from 'react'

const ventas = () => {
    const dataVentas = [

        {
            id:1,
            fullName:'Jefry Palomino Mayta',
            proyecto:"Merida",
            estado:'activo',
            manza:'Mz-Z1',
            precio:'S/ 20.000'
            
          },
    ]
  return (
    < >
    <div className=" mt-5  flex   bg-white rounded-2xl flex-row">
        <div className=" mt-5 mx-5 flex-auto flex flex-col    items-center h-16 bg-orange-400 rounded-2xl  ">
         <div>Total de Ventas</div>
         <div>25</div>
        </div>
        <div className=" my-5 mx-5 flex-auto   h-16 bg-orange-400 rounded-2xl  flex-row">
          Cuotas pendientes
        </div>
        <div className=" my-5 mx-5 flex-auto    h-16 bg-orange-400 rounded-2xl  flex-row">
          cuotas vencidas
        </div>
      </div>
    </ >
  )
}

export default ventas
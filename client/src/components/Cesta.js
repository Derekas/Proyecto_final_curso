import React, { useState } from 'react'
import useQuiosco from '../hooks/useQuiosco'
import Eliminar from '../img/eliminar.png'
const Cesta = ({product}) => {
    const {name,photo,price,cantidad,_id} = product
    const {eliminarProducto,handleMas_Menos} = useQuiosco()
  return (
    <div class="grid gap-2 grid-cols-3">
      <div class=" ml-20 my-5">
        <img class="w-40 h-40" src={require(`../img/${photo}.jpg`)}/>
      </div>
      <div class="m-auto">
        <h1 class="text-lg font-semibold">{name}</h1>
        <div class="flex gap-5 mt-3 ">
          <div class="flex my-auto">
            <button class="mr-2 bg-slate-400 w-6 h-6" onClick={() => handleMas_Menos("mas",_id)}>+</button>
            <p class="text-sm my-auto">{cantidad}</p>
            <button class="ml-2 bg-slate-400 w-6 h-6" onClick={() => handleMas_Menos("menos",_id)}>-</button>
          </div>
          <p class='my-auto'>{price}</p>
        </div>
        
        
        
      </div>
      <div class="m-auto">
        <button class="" onClick={()=> eliminarProducto(_id)}>
          
          <img class="w-5 " src={Eliminar}/>
        </button>

      </div>
      
      
      </div>
  )
}

export default Cesta
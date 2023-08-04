import React from 'react'
import useQuiosco from '../hooks/useQuiosco'

const Info = () => {

  const {precio,añadirPedido,cesta} = useQuiosco()



  return (
    <div class='text-center'>
      <h1 class="text-3xl mb-5">Info</h1>
      <div class="text-sm">
      <input class="my-2 w-20 text-center" placeholder='Name'></input>
        <p class="my-2">{cesta.length} items</p>
        <p class="font-bold">{precio}$</p>
        {cesta.length > 0 ? 
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-5" onClick={añadirPedido}>Enviar</button> :
        <button disabled={true} ></button>}
        
      </div>
    </div>
  )
}

export default Info
import React from 'react'
import useQuiosco from '../hooks/useQuiosco'
const Productos = ({producto}) => {
  const {name,photo,price,_id} = producto
  const {añadirProducto}=useQuiosco()

  return (
<div class="flex justify-center">
  <div
    class="blockrounded-lg bg-white shadow-lg">
    <button
    
     data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-lg"
        src={require(`../img/${photo}.jpg`)}
        alt={name}/>
    </button>


    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-900 ">
        {name}
      </h5>
      <p class="mb-4 text-base text-neutral-700 ">
      {price}$
      </p>
      <button
        type="button"
        onClick={()=>añadirProducto(_id)}
        class=" rounded bg-neutral-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]">
        Añadir a la cesta
        
      </button>
    </div>
  </div>
</div>
  )
}

export default Productos
import React from 'react'
import useQuiosco from '../hooks/useQuiosco'
import Cesta from '../components/Cesta.js'
import Info from '../components/Info'
const Cart = () => {
  const {cesta} = useQuiosco()
  return (
    
    
      <div class="grid grid-cols-7 mt-9">
        <div class="col-span-6 bg-red-400">
        {cesta.map((product) => (
            <Cesta product={product} key={product._id} />
            
          ))}
        </div>
        <div class="col-span-1 grid bg-slate-600 justify-center">
          <Info/>
        </div>
      </div>
    
  )
}

export default Cart
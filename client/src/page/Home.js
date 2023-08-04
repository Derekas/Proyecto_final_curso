import React from 'react'
import useQuiosco from '../hooks/useQuiosco'
import Categorias from '../components/Categorias'
import Productos from '../components/Productos'
const Home = () => {

  const {categorias,productos} = useQuiosco()


  return (
    <div class="">
      <div class='grid grid-cols-7 mt-9'>
      <div class=' col-span-1'>
        {categorias.map((categoria) => (
            <Categorias categoria={categoria} key={categoria} />
            
          ))}

      </div>
      <div class=' col-span-6 grid grid-cols-6 gap-4 rows-2'>
        {productos.map((producto) => (
          <Productos producto={producto} key={producto._id}/>
        ))}
      </div>
    </div>
    </div>
    
  )
}

export default Home
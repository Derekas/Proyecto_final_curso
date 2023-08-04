import React from 'react'
import useQuiosco from '../hooks/useQuiosco'
const Categorias = ({categoria}) => {


  const {setCategoriaSeleccionada} = useQuiosco()
  const handleSubmit = (event) => {
    event.preventDefault();
    setCategoriaSeleccionada(categoria)
  }
  
  return (
    <div class=''>
        <button class='w-64 h-auto'>
           <div class='flex flex-row align-middle border rounded-md border-gray-300 '>
              <p class='my-auto mx-auto text-2xl'>{categoria}</p>
              <form onSubmit={handleSubmit}>
              <button type="submit">
                <img on class='w-10 h-20 my-4 mx-4 ' alt='' src={require(`../img/icono_${categoria}.svg`)}/>
              </button>
              </form>
                
              

              
          </div>
          </button>
    </div>
  )
}

export default Categorias
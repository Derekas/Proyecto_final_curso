import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
const QuioscoContext = createContext()


const QuioscoProvider = ({children}) => {
    const [productos,setProductos]= useState([])
    const categorias=["Café","Hamburguesas","Pizzas","Donas","Pasteles","Galletas"]
    let [categoriaSeleccionada,setCategoriaSeleccionada]= useState('')
    const baseUrl = "http://localhost:3001/api/productos/producto"
    const categoriaUrl = "http://localhost:3001/api/productos/producto/"
    const getProducto= "http://localhost:3001/api/productos/get-producto/"
    const [cesta,setCesta]= useState([])
    const [precio,setPrecio]=useState(0)
    const [cant]=useState(0)


    console.log(cesta)
    console.log(precio)
    const eliminarProducto= async (id) => {
        try {
            

            

            const objeto_filtrado_precio= cesta.filter(item=> item._id ===id).map(item => item.price)
            const objeto_filtrado_cantidad= cesta.filter(item=> item._id ===id).map(item=> item.cantidad)

            
            setPrecio(parseFloat((precio-(objeto_filtrado_precio*objeto_filtrado_cantidad)).toFixed(2)))

            setCesta((prevState) => prevState.filter((producto) => producto._id !== id));

    }catch(error){

    }
        
    }

    const añadirProducto= async(id)=>{
        
        if(cesta.some(producto => producto._id===id)){
            
            try {
    
                const productoSeleccionado = cesta.find(item => item._id === id);
                const {name,photo,price,_id,cantidad} = productoSeleccionado
                
                
                const productoActualizado= {
                    _id,
                    name,
                    photo,
                    price,
                    cantidad: cantidad+1
    
                }

                const index = cesta.findIndex((producto) => producto._id === productoActualizado._id);
                    
                cesta.splice(index, 1);
                cesta.push(productoActualizado);
                  
                if(precio===0){
                    setPrecio(null)
                    setPrecio(parseFloat(price))
                }else{
                    setPrecio(parseFloat((precio+price).toFixed(2)))
                }
                
                
        }catch(error){
    
        }
        

        }else{
            try {
                const config={
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
    
                const {data}= await (await axios.get(`${getProducto}${id}`,config)).data
                const {name,photo,price,_id} = data
                
                const nuevoProducto= {
                    _id,
                    name,
                    photo,
                    price,
                    cantidad: 1
    
                }
                const nuevaCesta= [...cesta,nuevoProducto]
                setCesta(nuevaCesta)
                setPrecio(precio+data.price)
                
        }catch(error){
    
        }
        }
        
        
        
}
    const handleMas_Menos=(operacion,id)=>{
        console.log(operacion)

        const objeto_operacion_precio= cesta.filter(item=> item._id ===id).map(item => item.price)

        const objeto_operacion_cantidad= cesta.filter(item=> item._id ===id).map(item=> item.cantidad)

            
        
        if(objeto_operacion_cantidad>0){

            if(operacion==="mas"){


                const productosModificados = cesta.map(producto => {
                    if (producto._id === id) {
                      return { ...producto, cantidad: parseInt(objeto_operacion_cantidad)+1 };
                    } else {
                      return producto;
                    }
                  });
                
                setCesta(productosModificados)
    
                setPrecio((parseFloat(precio)+parseFloat(objeto_operacion_precio)).toFixed(2))
    
            }else if(operacion==="menos"){
                
                const productosModificados = cesta.map(producto => {
                    if (producto._id === id) {
                      return { ...producto, cantidad: parseInt(objeto_operacion_cantidad)-1 };
                    } else {
                      return producto;
                    }
                  });
                
                setCesta(productosModificados)
                if(precio<=0){
                    setPrecio(0)
                }else{
                    setPrecio(parseFloat((precio-(objeto_operacion_precio)).toFixed(2)))

                }
    
            }

        }else if(objeto_operacion_cantidad===0 || operacion==="menos"){
            setCesta((prevState) => prevState.filter((producto) => producto._id !== id));
            alert("El producto a sido eliminado de la cesta")
        }


        
      
    }

    const getAllProducts = async () => {
        try {
            const config={
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const {data}= await (await axios.get(baseUrl,config)).data
            setProductos(data)
        } catch (error) {
            
        }
        
      }

      const getCategoriaSeleccionada= async () => {
        try {
            const config={
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const {data}= await (await axios.get(`${categoriaUrl}${categoriaSeleccionada.toLocaleLowerCase()}`,config)).data
            setProductos(data)
        } catch (error) {
            
        }
        
      }

      const añadirPrecio=(precioProducto)=>{
        setPrecio(precio+precioProducto)
      }

      const eliminarPrecio=(precioProducto)=>{
        setPrecio(precio-precioProducto)
      }

      useEffect(() => {
        categoriaSeleccionada ? getCategoriaSeleccionada() : getAllProducts();
        
      }, [categoriaSeleccionada]);

      

      const añadirPedido= async(id)=>{
        
        
            
            try {
    
                const productoSeleccionado = cesta.find(item => item._id === id);
                const {name,photo,price,_id,cantidad} = productoSeleccionado
                
                
                const productoActualizado= {
                    _id,
                    name,
                    photo,
                    price,
                    cantidad: cantidad+1
    
                }

                const index = cesta.findIndex((producto) => producto._id === productoActualizado._id);
                    
                cesta.splice(index, 1);
                cesta.push(productoActualizado);
                  
                if(precio===0){
                    setPrecio(null)
                    setPrecio(parseFloat(price))
                }else{
                    setPrecio(parseFloat((precio+price).toFixed(2)))
                }
                
                
        }catch(error){
    
        }
 
}
    
    
      
    return(
        <QuioscoContext.Provider
            value={{
                categorias,productos,categoriaSeleccionada,cesta,eliminarProducto,setCesta,setCategoriaSeleccionada,añadirProducto,precio,setPrecio,añadirPrecio,eliminarPrecio,handleMas_Menos,cant,añadirPedido
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext
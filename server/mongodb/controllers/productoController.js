
import Producto from "../models/productos.js";


const crearProducto = async (req, res) => {
  try{
     const producto = new Producto(req.body);
     await producto.save();
     res.json(producto)
   }catch(error){
     console.log(error)
   }
}

const obtenerProductos = async (req, res) => {
    try {
        const products = await Producto.find({});
        console.log(products)
        res.status(200).json({ data: products });
      } catch (err) {
        res.status(400).json({ success: false, message: 'Fetching products failed, please try again' });
      }
}

const obtenerProducto = async(req, res) => {
  const {id} = req.params;
  console.log(id)
  
  try {
    const producto= await Producto.findById(id);
    if(!producto){
        const error = new Error('No encontrado')
        console.log(error.message);
        return res.status(404).json({msg: error.message})
  
    }

    return res.status(200).json({data: producto})
  } catch (error) {
      console.log(error)
  }

}

const eliminarProducto = async (req, res) => {
  const {id} = req.params;

  const producto= await Producto.findById(id);
  console.log(producto)
  if(!producto){
      const error = new Error('No encontrado')
      return res.status(404).json({msg: error.message})

  }

  try {
      await producto.deleteOne()
      res.json({msg: 'Producto deleted'})
  } catch (error) {
      console.log(error)
  }

}

const obtenerProductosCategoria = async (req, res) => {
  const {categoria}= req.params
  try {
      const productsCategoria = await Producto.find({ categoria : { $in : [`${categoria}`] } });
      res.status(200).json({ success: true, data: productsCategoria });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Fetching products category failed, please try again' });
    }
}
export{crearProducto,obtenerProductos,eliminarProducto,obtenerProductosCategoria,obtenerProducto} 
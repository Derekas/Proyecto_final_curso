import Orden from "../models/ordenes.js";


const crearOrden = async (req, res) => {
  try{
     const orden = new Orden(req.body);
     await orden.save();
     res.json(orden)
   }catch(error){
     console.log(error)
   }
}

const obtenerOrdenes = async (req, res) => {
    try {
        const ordenes = await Orden.find({});
        console.log(ordenes)
        res.status(200).json({ data: ordenes });
      } catch (err) {
        res.status(400).json({ success: false, message: 'Fetching ordenes failed, please try again' });
      }
}



const eliminarOrden = async (req, res) => {
  const {id} = req.params;

  const orden= await Orden.findById(id);
  console.log(orden)
  if(!orden){
      const error = new Error('No encontrado')
      return res.status(404).json({msg: error.message})

  }

  try {
      await orden.deleteOne()
      res.json({msg: 'Orden deleted'})
  } catch (error) {
      console.log(error)
  }

}

export{crearOrden,obtenerOrdenes,eliminarOrden} 
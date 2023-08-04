import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  photo: { type: String, required: true },
  categoria: { type: String, required: true },
});
const Producto = mongoose.model("Producto",productoSchema)
export default Producto

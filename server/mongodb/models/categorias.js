import mongoose from 'mongoose';

const categoriaSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  icon: { type: String, required: true },
});

const Categoria = mongoose.model("Categoria",categoriaSchema)
export default Categoria
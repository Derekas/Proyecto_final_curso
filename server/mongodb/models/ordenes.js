import mongoose from 'mongoose';

const Pedidos = new mongoose.Schema({
  nombre: { type: String, required: true },
  fecha: { type: String, required: true },
  total: { type: Number, required: true },
  pedido: [{ type: Object, required: true }],
});

const PedidosSchema = mongoose.model('Pedidos', Pedidos);

export default PedidosSchema;

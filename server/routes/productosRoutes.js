import express from 'express'

import { crearProducto,obtenerProductos,eliminarProducto,obtenerProductosCategoria, obtenerProducto } from '../mongodb/controllers/productoController.js'

const router = express.Router()

router.route('/producto').post(crearProducto).get(obtenerProductos)
router.delete('/eliminar-producto/:id',eliminarProducto)
router.get('/producto/:categoria',obtenerProductosCategoria)
router.get('/get-producto/:id',obtenerProducto)
export default router
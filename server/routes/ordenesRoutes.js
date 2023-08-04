import express from 'express'

import { crearOrden,obtenerOrdenes,eliminarOrden } from '../mongodb/controllers/ordenesController.js'

const router = express.Router()

router.route('/orden').post(crearOrden).get(obtenerOrdenes)
router.delete('/eliminar-orden/:id',eliminarOrden)
export default router
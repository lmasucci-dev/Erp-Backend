import { Router } from 'express'
import {createNewProduct, getProducts, getQtyProducts} from '../controllers/products.controller'

const router = Router()

router.get('/products', getProducts)

router.get('/productsQty', getQtyProducts)

router.post('/products', createNewProduct)

router.delete('/products', getProducts)

router.put('/products', getProducts)



export default router
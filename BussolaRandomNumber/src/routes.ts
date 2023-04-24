import {Router} from 'express'
import userController from './user/user.controller'
import productController from './products/product.controller'
import stockController from './stock/stock.controller'



const routes = Router()



routes.post('/product', productController.create)
routes.get('/product', productController.list)
routes.get('/product/:id', productController.find)
routes.put('/product/:id', productController.update)
routes.delete('/product/:id', productController.delete)
routes.get('/stock', stockController.stock)
routes.get('/products/random', productController.random)
routes.get('/stock/value', stockController.totalvalue)

routes.get('/readfile', productController.ProductreadFile)
routes.get('/writefile', productController.ProductWriteFile)

routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

export default routes
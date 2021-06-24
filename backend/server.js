import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import morgan from 'morgan'


dotenv.config()

connectDB()



 const app = express()

 if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

 app.use(express.json())

 app.get('/', (req, res) => {
   res.send('API is running...')
 })


 app.use('/api/products', productRoutes)
 app.use('/api/users', userRoutes)

 app.use(notFound)
 app.use(errorHandler)

 
 app.listen(5000, console.log('Server running on port 5000'))

 
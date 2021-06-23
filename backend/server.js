import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'


dotenv.config()

connectDB()






 const app = express()

 app.get('/', (req, res) => {
   res.send('API is running...')
 })


 app.use('/api/products', productRoutes)

 
 app.listen(5000, console.log('Server running on port 5000'))

 
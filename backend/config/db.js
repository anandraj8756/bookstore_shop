import mongoose from 'mongoose'

 const connectDB = async () => {
   try {
     const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/BookStore-Shop', {
       useUnifiedTopology: true,
       useNewUrlParser: true,
       useCreateIndex: true,
     })

     console.log(`MongoDB Connected: ${conn.connection.host}`)
   } catch (error) {
     console.error(`Error: ${error.message}`)
     process.exit(1)
   }
 }

 export default connectDB
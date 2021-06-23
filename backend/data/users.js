import bcrypt from 'bcryptjs'

 const users = [
   {
     name: 'Admin User',
     email: 'admin@example.com',
     password: bcrypt.hashSync('123456', 10),
     isAdmin: true,
   },
   {
     name: 'Anand Raj',
     email: 'anand@example.com',
     password: bcrypt.hashSync('123456', 10),
   },
   {
     name: 'Rahul Raj',
     email: 'rahul@example.com',
     password: bcrypt.hashSync('123456', 10),
   },
 ]

 export default users
 const mongoose= require('mongoose');
 mongoose.connect('mongodb://localhost:27017/studentDB')

 .then(()=>{
     console.log('DB connected successfully');
 }).catch(()=>{
     console.log('Error! not connected');
 });




// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/studentDB')
//   .then(() => {
//     console.log('DB connected successfully');
//   })
//   .catch((error) => {
//     console.log('Error connecting to the database:', error);
//   });

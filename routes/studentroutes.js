const express = require('express');
const router = express.Router(); //   router  level middleware
router.use(express.json()); 
const studentmodel= require('../model/studentData') ;
router.use(express.urlencoded({extended:true})); //  images or files access

// get

// router.get('/',async (req,res)=>{
//     const data= await studentmodel
// })



module.exports=router;
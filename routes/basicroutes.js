const express = require('express');
const router = express.Router();

// const array1=[{"name":'sunitha',"age":48,"location":'palakkad'},{"name":'pradeep',"age":55,"location":'palakkad'}];

// get method

router.get('/',(req,res)=>{
    res.send(array1);
})

// post method

router.post('/add',(req,res)=>{

    array1.push(req.body);
    console.log(array1);
    
    res.send('data posted');
})

// update

router.put('/update',(req,res)=>{
    array1.splice(1,1,req.body);
    console.log(array1);
    res.send('data updated');
})

// delete

router.delete('/remove',(req,res)=>{
    array1.pop()
    console.log(array1);
    res.send('data deleted');
})


module.exports=router;
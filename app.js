const express= require('express');
const morgan = require('morgan');

const app = new express();
const router = require('./routes/basicroutes');
// const dotenv = require('dotenv');

const studentroute= require('./routes/studentroutes');


app.use(morgan('dev')); //  application level middleware
app.use('/api',router);
app.use('/students',studentroute);

require('dotenv').config();
require('./db/mongodb');

const PORT= process.env.PORT;






app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})
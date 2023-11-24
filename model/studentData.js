const mongoose= require('mongoose');

// schema for database
const studentSchema = mongoose.Schema({
    studentName:String,
    studentId:Number,
    studentAge:Number
})

// schema mapping
const studentData= mongoose.model('student',studentSchema);
module.exports=studentData;
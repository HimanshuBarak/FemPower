const mongoose = require('mongoose')


const Schema = mongoose.Schema;

//defining the patient schema
const patientSchema = new Schema({
    flow:{type:String,required:true},
    mood:{type:String},
    pain:{type:String,required:true},
    totalDays:{type:Number,required:true},
    lastPeriod:{type:Date,required:true},
    phase:{type:String,required: true}
})

const Patients = mongoose.model('Patients',patientSchema);

module.exports = Patients
const router = require("express").Router();
const { response } = require("express");
const Patient = require("../models/patientModel")


//posting patient data to the db

router.post("/add",(req,res)=>{
    try{
       const {flow,mood,pain,totalDays,lastPeriod,phase} = req.body

        if(!phase)
         return res.status(400).json({errorMessage:"Prediction result is required to submit"});
        
         

        new_patient = new Patient({
            flow,mood,pain,totalDays,lastPeriod,phase
        })
        new_patient.save()
        .then(response=>{
            res.status(200).json({success:true,result:response})
        })
        
       console.log(req.body)
    }catch(err){
        console.error(err);
        res.status(500).send()
    }
})

//getting all patient data 
router.get("/",async(req,res)=>{
    try{
        const patients = await Patient.find()
        res.json(patients)
    }catch(err){
        res.status(500).send();
    }
});

module.exports = router
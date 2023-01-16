const studentCollection = require('../db/connection')
const asyncHandler = require('express-async-handler');

const getStudentData = asyncHandler(async(req,res)=>{
    const studentdData = await studentCollection.find();
    res.send(studentdData);
});

const postStudentData = asyncHandler(async(req,res)=>{
    try{
        const data = new studentCollection(req.body);
        let resv = await data.save()
        res.send(resv) 
    }catch(err){
        res.status(400).send({success:false,error:err.message});
    }
});  

const getStudentDataByRoll = asyncHandler(async(req,res)=>{
    try{
    const roll = req.params.roll;
    const individualData = await studentCollection.find({roll});
    res.send(individualData);
    }catch(err){
        res.status(400).send({success:false,error:err.message});
    }
});

const patchStudentData = asyncHandler(async(req,res)=>{
    try{
    const roll = req.params.roll;
    let resv = await studentCollection.findOneAndUpdate({roll},req.body,{new:true})    
    res.send(resv);
    }catch(err){
        res.status(400).send({success:false,error:err.message});
    }
});

const deleteStudentData = asyncHandler(async(req,res)=>{
    try{
    const roll = req.params.roll;
    let resv = await studentCollection.findOneAndDelete({roll});
    res.send(resv);
    }catch(err){
        res.status(400).send({success:false,error:err.message});
    }
});

module.exports = {
    getStudentData,
    getStudentDataByRoll,
    postStudentData,
    patchStudentData,
    deleteStudentData
};
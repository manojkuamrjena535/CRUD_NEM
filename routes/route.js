const express = require('express');
const { runInNewContext } = require('vm');
const std = require('../database/model');
const router = express.Router();

// router.get('/student/getall',(req,res)=>{
//     res.send('getting all data');
// });
// router.get('/student/getall/:id',(req,res)=>{
//     res.send('gettign data of id');
// })
// router.post('/student/add',(req,res)=>{
//     res.send('data added');
// })
// router.put('/student/update/:id',(req,res)=>{
//     res.send('updated');
// })
// router.delete('/student/delete/:id',(req,res)=>{
//     res.send('delete')
// })

// insert data

router.post('/student/add',async (req,res)=>{
    try{
        const student = new std({
            name:req.body.name,
            age:req.body.age
        });
        const result = await student.save();
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});


// get all data

router.get('/student/getall',async(req,res)=>{
    try{
        const data = await std.find();
        res.status(200).json(data);
    }catch(error){
        console.log(error);
    }
})
  
// get data by the id
router.get('/student/stdById/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const data = await std.findById(id);
        res.status(200).json(data);
    }catch(error){
        console.log(error);
    }
});

// update data by id
router.put('/student/update/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const data =  req.body;
        const options = {new:true};
        const result = await std.findByIdAndUpdate(id,data,options);
        res.status(200).json(result);
    }catch(error){
        console.log(error);
    }
});

// delete data 
router.delete('/student/delete/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const dlt = await std.findByIdAndDelete(id);
        res.status(200).json(`deleted user id is ${id}`);
    }catch(error){
        console.log(error);
    }
});



module.exports= router;
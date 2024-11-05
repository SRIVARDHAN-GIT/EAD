const express=require('express')
const router=express.Router()
const it=require('../model/models')
router.get('/',async(req,res)=>{
    try{
        const r=await it.find()
        res.json(r)
    }
    catch(err){
        res.send(err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const r=await it.findById(req.params.id)
        res.json(r)
    }
    catch(err){
        res.send(err)
    }
})
router.post('/',async(req,res)=>{
    const con=new it({
        name:req.body.name,
        roll:req.body.roll,
        joinDate:req.body.joinDate,
        GPA:req.body.GPA,
        schlorship:req.body.schlorship
    })
    try{
        const r=await con.save()
        res.json(r)
    }
    catch(err){
        res.send(err)
    }
})
module.exports=router
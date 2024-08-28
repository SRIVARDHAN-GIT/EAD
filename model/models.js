const mongoose=require('mongoose')
const mSchema=new mongoose.Schema
({
    name:{
        type:String,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    joinDate:{
        type:Date,
        required:true
    },
    GPA:{
        type:Array,
        required:true
    },
    schlorship:{
        type:Boolean,
        required:true,
        default:false
    }
})
module.exports=mongoose.model("IT",mSchema)
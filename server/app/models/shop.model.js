import mongoose from 'mongoose';


const shop=new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    logo:{
        data:Buffer,
        contentType:String
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});
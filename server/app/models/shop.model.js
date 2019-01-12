import mongoose from 'mongoose';


const shopSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    contact: {
        type: String,
        trim: true
    },
    owner: {
        type: mongoose.Schema.ObjectId, 
        ref: 'User'
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});


export default mongoose.model('Shop', shopSchema)
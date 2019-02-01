import mongoose from "mongoose";
//Dynamic References 
const chatSchema = new mongoose.Schema({
    
    sender_id: {
        type: mongoose.Schema.ObjectId,
        refPath: 'senderModel'
    },
    senderModel: {
        type: String,
        enum: ['User', 'Shop']
    },
    receiver_id: {
        type: mongoose.Schema.ObjectId,
        ref: "receiverModel"
    },
    receiverModel: {
        type: String,
        enum: ['User', 'Shop']
    },
    chat: {
        type: String,
        trim: true
    },
    type:{
        type: String,
        trim: true
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Chat', chatSchema);
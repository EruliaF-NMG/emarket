import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Category', categorySchema);
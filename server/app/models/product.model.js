import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  gallery:[{
    fileId:  mongoose.Schema.ObjectId,
    type: String,
    created: { type: Date, default: Date.now }
  }],
  // category: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "Category"
  // },
  quantity: {
    type: Number,
    trim: true
  },
  price: {
    type: Number,
    trim: true
  },
  shop: {
    type: mongoose.Schema.ObjectId,
    ref: "Shop"
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model('Product', productSchema);

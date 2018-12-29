import mongoose from "mongoose";
import crypto from "crypto";


const profileSchema = new mongoose.Schema({
    photo: {
        data: Buffer,
        contentType: String
    },
    about: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    contact: {
        type: String,
        trim: true
    },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    required: "Email is required"
  },
  hashed_password: {
    type: String,
    required: "Password is required"
  },
  salt: String,    
  seller: {
    type: Boolean,
    default: false
  },
  profile:{ type: profileSchema, default: profileSchema },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
});

userSchema
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function() {
    return this._password
  })

  userSchema.virtual('userId')
    .get(function () {
        return this._id;
    });
  
  userSchema.methods = {
    authenticate: function(plainText) {
      return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password) {
      if (!password) return ''
      try {
        return crypto
          .createHmac('sha1', this.salt)
          .update(password)
          .digest('hex')
      } catch (err) {
        return ''
      }
    },
    makeSalt: function() {
      return Math.round((new Date().valueOf() * Math.random())) + ''
    }
  }

export default mongoose.model('User', userSchema)
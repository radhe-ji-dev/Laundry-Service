const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{type:String, required:true},
    secondname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    mobile:{type:Number, required:true,unique:true},
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true},
    state:{type:String,required:true},
    district:{type:String,required:true},
    address:{type:String,required:true},
    pincode:{type:Number,required:true}
})

const User = mongoose.model('User', userSchema);
 module.exports = User;
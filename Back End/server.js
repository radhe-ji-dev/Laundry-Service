const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/users');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(bodyParser.json())
const secret = "team7";


// DB connection ------------------
// username and password for db is team7
mongoose.connect('mongodb+srv://team7:team7@laundryproject.bwak7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(
    ()=> console.log('db Connected')
);


// -------- Routing -----------------

app.get('/',(req,res)=>{
    res.send("Hello")
})
// --------- Register User  ------------------

app.post('/register', async (req,res)=>{
    try{
        const {firstname,secondname,email,mobile,password,confirmpassword,state,district,address,pincode} = req.body;
        const exist = await User.findOne({email});
        if (exist){
            return res.status(400).send('User Already Existed');
        }
        if (password !== confirmpassword){
            return res.status(403).send('Passwords Not-Matching');
        }
        bcrypt.hash(password, 10, async function (err, hash) {
            try{
                if(err){
                    console.log(err);
                    return res.status(400).json({
                        status:"Failed",
                        message:"Invalid Data"
                    });
                }else{
                    let newUser = new User({
                        firstname,secondname,email,mobile,password,confirmpassword,state,district,address,pincode
                    })
                    newUser.save();
                    return res.status(200).send('Registered Successfully');
                }
            }
            catch(err){
                res.status(400).json({
                    status:"Failed",
                    message:err.message
                })
            }
        })
    }
    catch(err){
        console.log(err)
        return res.send(500).send('Server Error');
    }
})

// ---------------- Login User ---------------------------------------
app.post('/login', async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).send('User Not Exist');
        }
        if(user.password != password){
            return res.status(400).send("Invalid Credentials");
        }
        bcrypt.compare(password, user.password, async function(err, result){
            if(err){
                console.log(err)
                return res.status(400).json({
                    status:"Failed",
                    message:"Invalid Credentials"
                })
            }else{
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: user._id
                  }, secret);
                return res.json({
                    token : token
                })
            }
        })
    }
    catch(err){
        res.status(400).json({
            status:"failed",
            message : err.message
        })
    }
})
// -------- Get all users----------------
app.get('/allusers', async(req,res)=>{
    try{
        let allusers = await User.find();
        return res.json(allusers);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error');
    }
})





const port = 4500
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
});
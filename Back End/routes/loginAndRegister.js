const express = require('express');
const router = express.Router();
const User = require("../models/users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "team7"

// --------- Register User  ------------------

router.post('/register', async (req,res)=>{
    console.log(req.body)
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
                    let newUser = await User.create({
                        firstname,
                        secondname,
                        email,
                        mobile,
                        password:hash,
                        confirmpassword:hash,
                        state,
                        district,
                        address,
                        pincode
                    });
                    return res.status(200).json({
                        status:"Success",
                        data: newUser
                    });
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
router.post('/login', async (req,res)=>{
    try{
        // console.log(req.body);
        const {email,password} = req.body;
        const user = await User.findOne({email});
        // console.log(user)
        if(!user){
            return res.status(400).send('User Not Exist');
        }
        bcrypt.compare(password, user.password, async function(err, result){
            if(err){
                // console.log(err)
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
                    status: result? "Login Successful": "Invalid Login",
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

// -------- Get user----------------
router.get('/:id',async (req,res)=>{
    try{
        const user = await User.find({_id: req.params.id});
        res.json({
        status:"Sucess",
        data : user
    })
    }
    catch(err){
        res.status(500).json({
            status:"Failed",
            message:err.message
        })
    }
});

module.exports = router;
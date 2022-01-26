const express = require('express');
const router = express.Router();
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser());


const Orders = require("../models/orders");


//---------------Get all Orders ordered by user----------------

router.get("/", async(req,res)=>{
    try{
        const userorders = await Orders.find({user:req.user})
        // console.log(userorders)
        res.status(200).json({
            status:"Sucess",
            data: userorders
        });
    }
    catch(arr){
        res.send(500).json({
            status:"Failed",
            message:err.message
        });
    }
})


// ---------- Create order ------------

router.post("/", async (req,res)=>{
    // console.log(req.body)
    try{
        // console.log(req.body)
        const order = await Orders.create({
            orderid:req.body.orderid,
            ordereddateandtime:req.body.ordereddateandtime,
            orderlist:req.body.orderlist,
            city:req.body.city,
            storelandmark:req.body.storelandmark,
            address:req.body.address,
            phone:req.body.phone,
            totalnumberofitems:req.body.totalnumberofitems,
            orderstatus:req.body.orderstatus,
            totalamount:req.body.totalamount,
            user: req.user,
        });
        res.status(200).json({
            status:"sucess",
            data: order
        });
    }
    catch(err){
        res.json({
            status:"Failed",
            message:err.message
        });
    }
});

///  --------------- Get order By ID ------------

router.get("/:id", async (req, res) => {
    // console.log(req.params.id)
    try {
        const order = await Orders.find({ _id: req.params.id });
        if (!order) {
            return res.status(404).json({
                status: "Failed",
                message: "order not found",
            });
        }
        console.log(order)
        return res.json({
            status: "success",
            message: order
        });
    } catch (e) {
        res.status(500).json({
            status: "order Not created",
            error: e.message,
        });
    }
});

// // ------------- Update order By ID --------------
// ------------- Can Update order Status ---------------

router.put("/:id", async function(req, res) {
    try{
        const order = await Orders.findByIdAndUpdate({_id: req.params.id},req.body,{new:true});
        res.json({
        status:"Sucess",
        data : order
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
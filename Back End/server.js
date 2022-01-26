const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const cors = require('cors')
const app = express();
const {connection} = require('./dbconnection')
app.use(cors());// "*" is for to make api's respond to any server..
app.use(bodyParser())
const secret = "team7";


// DB connection ------------------
// username and password for db is team7
mongoose.connect(connection);

mongoose.connection.on("connected", () => {
  console.log("Db Connected Sucessfully");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting", err);
});


const userRoutes = require('./routes/loginAndRegister')
const orderRoutes = require('./routes/orders')

app.use("/order", async function (req, res, next) {
    try {
      const token = await req.headers.authorization?.split("test ")[1];
      console.log(token);
      if (!token) {
        return res.status(401).json({
          status: "failed",
          message: "not authenticated",
        });
      }
      const decoded = jwt.verify(token, secret);

      if (!decoded) {
        return res.status(401).json({
          status: "failed",
          message: "token invalid",
        });
      }
      req.user = decoded.data;
    } catch (e) {
      return res.status(500).json({
        status: "failed",
        message: e.message,
      });
    }
  
    next();
  });
  
  app.use("/api/v1/users", userRoutes);
  app.use("/order", orderRoutes);


const port = 4500
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
});




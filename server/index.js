const express = require("express");
const cors = require("cors");

const colors = require("colors");
const dotenv = require("dotenv");
var cookieParser = require('cookie-parser')
const mongoose= require("mongoose")
//env config
dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//mongodb connection
const connect=async()=>{
    try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to Database")
} catch (error) {
    throw error
}}

mongoose.connection.on("disconnected", ()=>{
    console.log("Mongo DB disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("Mongo DB connected")
})

//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(cookieParser())
app.use(express.json());


//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);
app.get("/test", (req, res)=>{
    res.send("Hello from backend")
})
// Port
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on  port no ${PORT}`.magenta
      .white
  );
  connect()
});
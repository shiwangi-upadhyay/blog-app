const express = require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000

//middleware
app.use(express.json());

const blog = require("./routes/blog")

//mount 
app.use("/api/v1", blog);

//start the server
app.listen(PORT, ()=>{
    console.log("Server started Successfully");
})

//connect database
const connectDatabase = require("./config/database")
connectDatabase();


app.get("/", (req, res) =>{
    res.send(`<h1> Hello is HOMEPAGE baby </h1>`) ;
})
const mongoose = require('mongoose');

require("dotenv").config();

const  connectDatabase = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>{
        console.log("Db ka connection is Successful")
    }).catch((error) =>{
        console.log("Issue in db Connection");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = connectDatabase;

const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = ()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Connected To Db Successfully");
    }).catch(()=>{
        console.log("connection to db failed"); 
        process.exit(1);
    })
}

module.exports = connectDb;
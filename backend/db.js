const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://vyshu:vyshu@cluster0.x9qv3v3.mongodb.net/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>console.log("Connected")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo;
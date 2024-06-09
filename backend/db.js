const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://vyshu:vyshu@cluster0.x9qv3v3.mongodb.net/inotebook"
mongoose.set("strictQuery", false);

async function connecToMongo() {
    await mongoose.connect(mongoURL);
    console.log("successfully connected to mongodb");
  }

module.exports = connecToMongo;

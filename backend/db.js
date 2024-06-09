const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://omkar:omkar@cluster0.2eqx9us.mongodb.net/ultimateCodeVizard"
mongoose.set("strictQuery", false);

async function connecToMongo() {
    await mongoose.connect(mongoURL);
    console.log("successfully connected to mongodb");
  }

module.exports = connecToMongo;

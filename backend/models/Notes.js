const mongoose = require('mongoose');

const NotesSchema = new Notes({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now
    },

  });
  module.exports = mongoose.model('user',NotesSchema)
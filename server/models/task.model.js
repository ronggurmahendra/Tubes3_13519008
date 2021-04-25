const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    date : {type : Date, required : true},
    kodeMataKuliah : {type : String, required : true},
    jenisTugas : {type : String, required : true},
    topikTugas : {type : String, required : true},
    

  }, {
    timestamps: true,
  });


const Task = new mongoose.model('task',taskSchema);

module.exports = Task;
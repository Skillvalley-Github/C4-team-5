const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
  userId: {
    type:String,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
});

const Project = mongoose.model("projects", projectSchema);


module.exports = Project;

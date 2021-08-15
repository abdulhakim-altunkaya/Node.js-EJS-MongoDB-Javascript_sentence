const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const turgerSchema = new Schema ({
  input1: {
    type: String,
    required: true
  },
  input2: {
    type: String,
    required: true
  }
});

turgerSchema.index({input1: "text"});/*1*/
const ModelTurGer = mongoose.model ("turger", turgerSchema);
module.exports = ModelTurGer;


/*1: Here we dont use createIndex() method because, mongoose uses index() method. Plain mongodb uses createIndex() method.*/

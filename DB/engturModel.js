const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const engturSchema = new Schema({
  input1: {
    type: String,
    required: true
  },
  input2: {
    type: String,
    required: true
  }
});

engturSchema.index({input1: "text"}); /*1*/
const EngturModel = mongoose.model ("engturDoc",engturSchema);

module.exports = EngturModel;


/*1: Here we dont use createIndex() method because, mongoose uses index() method. Plain mongodb uses createIndex() method.*/

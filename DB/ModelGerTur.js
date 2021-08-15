const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const gerturSchema = new Schema ({
  input1: {
    type: String,
    required: true
  },
  input2: {
    type: String,
    required: true
  }
});

gerturSchema.index({input1: "text"});/*1*/
const ModelGerTur = mongoose.model ("gertur", gerturSchema);
module.exports = ModelGerTur;


/*1: Here we dont use createIndex() method because, mongoose uses index() method. Plain mongodb uses createIndex() method.*/

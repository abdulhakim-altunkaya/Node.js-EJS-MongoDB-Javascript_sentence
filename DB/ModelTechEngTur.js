const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const techEngTurSchema = new Schema({
  input1: {
    type: String,
    required: true
  },
  input2: {
    type: String,
    required: true
  }
})

techEngTurSchema.index({input1: "text"}); /*1*/
const ModelTechEngTur = mongoose.model("techEngTurDoc", techEngTurSchema);

module.exports = ModelTechEngTur;

/*1: Here we dont use createIndex() method because, mongoose uses index() method. Plain mongodb uses createIndex() method.*/

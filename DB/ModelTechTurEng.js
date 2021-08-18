const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const techTurEngSchema = new Schema({
  input1: {
    type: String,
    required: true
  },
  input2: {
    type: String,
    required: true
  }
})

techTurEngSchema.index({input1: "text"}) /*1*/
const ModelTechTurEng = mongoose.model("techTurEngDoc", techTurEngSchema);
module.exports = ModelTechTurEng;

/*here we didnt use createIndex method because mongoose uses index method.*/

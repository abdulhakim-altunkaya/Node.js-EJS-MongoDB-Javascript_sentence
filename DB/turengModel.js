const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const turengSchema = new Schema({
  input1: {
    type: String,
    required: true
  },
  input2: {
    type: String,
    required: true
  }
});

turengSchema.index({input1: "text"});
const TurengModel = mongoose.model ("turengDoc", turengSchema);

module.exports = TurengModel;

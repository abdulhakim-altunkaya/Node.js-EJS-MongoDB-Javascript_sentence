const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  input1: {
    type: String,
    required: true
  },
  input2: {
    type: String,
    required: true
  },
  input3: {
    type: String,
    required: true
  },
  input4: {
    type: String
  },
  input5: {
    type: String
  },
  input6: {
    type: String
  }
});

const AboutModel = mongoose.model ("aboutDoc", AboutSchema);
module.exports = AboutModel;

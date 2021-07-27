const mongoose = require ("mongoose");
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};
const url = "mongodb+srv://abdulhakim:seattle2@cluster0.c6ta0.mongodb.net/test"
const connectDB = async () => {
  await mongoose.connect(url, connectionParams);
  console.log("ДБ СВЯЗАНО");
};
module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    //remove deprecation
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

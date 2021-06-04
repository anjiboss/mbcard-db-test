const mongoose = require("mongoose");
const connectDB = () => {
  try {
    mongoose.connect(
      process.env.DB_URI,
      {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (e) => {
        if (e) {
          console.log(e);
        } else {
          console.log("Connected");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

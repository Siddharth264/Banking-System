const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log(`Couldnt connect to MongoDB: ${error}`);
      process.exit(1);
    });
};




module.exports = connectDb;

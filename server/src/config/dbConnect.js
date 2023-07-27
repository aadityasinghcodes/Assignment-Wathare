const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Temperature");
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.log("DataBase Connection Failed", error.message);
  }
};
dbConnect();

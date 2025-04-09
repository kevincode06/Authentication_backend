require("dotenv").config(); // Add this at the top of your file
const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose 
    .connect(process.env.DB, connectionParams)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};
require("dotenv").config(); // Add this at the top of your file
const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(process.env.DB, connectionParams)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};

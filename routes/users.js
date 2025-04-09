const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/user"); 
const bcrypt = require("bcrypt");

// Register a new user
router.post("/", async (req, res) => {
  try {
    // Validate the request body using the validate function from the User model
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // Check if the user already exists
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ message: "User already registered" });
    }

    // Hash the password
    const saltRounds = Number(process.env.SALT) || 10; // Default to 10 if not set in environment
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Save the new user
    const newUser = new User({
      ...req.body, // Include all body fields
      password: hashPassword, // Set hashed password
    });
    await newUser.save();

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error(error); // Log error details for debugging
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;

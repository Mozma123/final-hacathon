// // / for one user kyliye
//  const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   role: String,
//   password: Number,
// });

// // Create User model
// const User = mongoose.model('User', userSchema);

// // Route for getting user data
// router.get('/', async (req, res) => {
//   try {
//     const user = await User.findOne(); // Fetch the first user from the database
//     res.json(user || {}); // Send user data as a response
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching user data' });
//   }
// });

// // Route for saving user data
// router.post('/', async (req, res) => {
//   try {
//     const newUser = new User(req.body); // Create a new user from the request body
//     await newUser.save(); // Save the new user in the database
//     res.json({ message: 'User saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving user data' });
//   }
// });

// module.exports = router;




// 2 for user and student
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  password: Number, // Passwords should ideally not be stored as numbers
});

// Create User model
const User = mongoose.model('User', userSchema);

// Route for getting user data
router.get('/', async (req, res) => {
  try {
    const user = await User.findOne(); // Fetch the first user from the database
    res.json(user || {}); // Send user data as a response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

// Route for saving user data
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body); // Create a new user from the request body
    await newUser.save(); // Save the new user in the database
    res.json({ message: 'User saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user data' });
  }
});

module.exports = router;
































































































// 3
// for multiple user kyliye
// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const router = express.Router();

// // User Schema with validation
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//   },
//   role: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// // Hash password before saving a user
// userSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   }
//   next();
// });

// // Create User model
// const User = mongoose.model('User', userSchema);

// // Route for getting all users data
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find(); // Fetch all users from the database
//     res.json(users); // Send users data as a response
//   } catch (error) {
//     console.error(error); // Log error details
//     res.status(500).json({ message: 'Error fetching user data', error });
//   }
// });

// // Route for saving user data
// router.post('/', async (req, res) => {
//   try {
//     const { name, email, role, password } = req.body;
    
//     // Check if all required fields are provided
//     if (!name || !email || !role || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Check if the email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     const newUser = new User(req.body); // Create a new user from the request body
//     await newUser.save(); // Save the new user in the database
//     res.json({ message: 'User saved successfully' });
//   } catch (error) {
//     console.error(error); // Log error details
//     res.status(500).json({ message: 'Error saving user data', error });
//   }
// });

// module.exports = router;

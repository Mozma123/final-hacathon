// const mongoose = require('mongoose');

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   role: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// // Define the routes
// module.exports = (app) => {
//   // Get user data
//   app.get('/api/user', async (req, res) => {
//     const user = await User.findOne();
//     res.json(user || {});
//   });

//   // Create or update user data
//   app.post('/api/user', async (req, res) => {
//     await User.deleteMany(); // Clear previous data
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.json({ message: 'User saved successfully' });
//   });
// };



// 2
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Ensure this path is correct
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// MongoDB URL
const mongodbUrl = 'mongodb://localhost:27017/backend';

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Use routes
app.use('/api/user', userRoutes); // Make sure the '/api/user' path matches what is defined in userRoutes
app.use('/api/students', studentRoutes);
// MongoDB connection
mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

const port = 7001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

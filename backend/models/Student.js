// const mongoose = require('mongoose');

// const studentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   course: { type: String, required: true },
//   image: { type: String, required: true }, // Image URL or path
// });

// const Student = mongoose.model('Student', studentSchema);

// module.exports = Student;


// models/student.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  img: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

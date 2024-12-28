// const express = require("express");
// const Student = require("../models/Student");

// const router = express.Router();

// // Get all students
// router.get("/", async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching students" });
//   }
// });

// // Add a new student
// router.post("/", async (req, res) => {
//   try {
//     const newStudent = new Student(req.body);
//     await newStudent.save();
//     res.json(newStudent);
//   } catch (error) {
//     res.status(400).json({ message: "Error adding student" });
//   }
// });

// // Delete a student by ID
// router.delete("/:id", async (req, res) => {
//   try {
//     await Student.findByIdAndDelete(req.params.id);
//     res.json({ message: "Student deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting student" });
//   }
// });

// // Update a student by ID
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updatedStudent);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating student" });
//   }
// });

// module.exports = router;



// 2
const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
});

// Add a new student
router.post("/", async (req, res) => {
  const { name, course, img } = req.body;

  // Validate that the required fields are present
  if (!name || !course || !img) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent); // Return created status
  } catch (error) {
    res.status(400).json({ message: "Error adding student" });
  }
});

// Delete a student by ID
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student" });
  }
});

// Update a student by ID
router.put("/:id", async (req, res) => {
  const { name, course, img } = req.body;

  // Validate that the required fields are provided (optional based on your needs)
  if (!name || !course || !img) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: "Error updating student" });
  }
});

module.exports = router;

// GET All Students
const Student = require("../models/Student");
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      message: "Students fetched successfully!",
      count: students.length,
      data: students
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error!",
      error: err.message
    });
  }
};

// GET Single Student
const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found!"
      });
    }
    res.status(200).json({
      success: true,
      data: student
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error!",
      error: err.message
    });
  }
};

// POST New Student
const createStudent = async (req, res) => {
  try {
    const { rollNo, name, city, marks } = req.body;

    // Validation
    if (!rollNo || !name || !city || !marks) {
      return res.status(400).json({
        success: false,
        message: "rollNo, name, city, marks అన్నీ పంపు!"
      });
    }

    // Duplicate rollNo check
    const existing = await Student.findOne({ rollNo });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Roll No already exists!"
      });
    }

    const student = await Student.create({ rollNo, name, city, marks });
    res.status(201).json({
      success: true,
      message: "Student Added! ✅",
      data: student
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error!",
      error: err.message
    });
  }
};

// PUT Update Student
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found!"
      });
    }
    res.status(200).json({
      success: true,
      message: "Student Updated! ✅",
      data: student
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error!",
      error: err.message
    });
  }
};

// DELETE Student
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found!"
      });
    }
    res.status(200).json({
      success: true,
      message: "Student Deleted! ✅"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error!",
      error: err.message
    });
  }
};
module.exports = {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
};
const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

// Routes
router.get("/", getAllStudents);       // GET all
router.get("/:id", getStudent);       // GET one
router.post("/", createStudent);      // POST create
router.put("/:id", updateStudent);    // PUT update
router.delete("/:id", deleteStudent); // DELETE

module.exports = router;
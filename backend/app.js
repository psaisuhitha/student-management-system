
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db");
const studentRoutes = require("./routes/students");

// .env variables load చేయి
dotenv.config();

const app = express();

// Middleware
app.use(cors());           // React తో connect అవడానికి!
app.use(express.json());   // JSON data parse చేయడానికి!

// Database Connect
connectDB();

// Routes
app.use("/api/students", studentRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "404 - Route Not Found!"
  });
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
});
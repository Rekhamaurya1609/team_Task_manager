const express = require("express");
const cors = require("cors");
require("dotenv").config();

const path = require("path");

const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// frontend serve
app.use(express.static(path.join(__dirname, "../frontend/build")));

// fallback route (IMPORTANT FIX)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(5000, ()=>console.log("Server running on 5000"));
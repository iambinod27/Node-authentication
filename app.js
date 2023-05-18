const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(`Hey IT's working`);
});

app.listen(PORT, () => {
  console.log(`server up and running at ${PORT}`);
});

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routes
const authRoutes = require("./routes/auth/auth");
const authDashboard = require("./routes/auth/authDashboard");

dotenv.config();

// DATABASE CONNECTION
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MIDDLEWARE -> DISABLING CORS AND USED FOR JSON OUTPUT
app.use(express.json(), cors());

// ROUTE MIDDLEWARE
app.use("/api/users", authRoutes);
app.use("/api/dashboard", authDashboard);

const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();

app.use("/api/users", userRoutes);
app.use("/", (req, res) => {
  res.json("<h3>Hello</h3>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

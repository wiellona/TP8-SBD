require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.route");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

app.use("/", userRoutes);

app.listen(PORT, () =>
  console.log(`
 🚀
 Server started at port:${PORT}`)
);

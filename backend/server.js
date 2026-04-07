const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("dotenv").config();
require("./config/passport");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/auth", require("./routes/auth"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"));

app.listen(5000, () => console.log("Server running"));
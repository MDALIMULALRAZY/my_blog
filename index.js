const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const port = 4000;
// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Import routes
const postRoutes = require("./routes/post");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/posts", postRoutes);

app.listen(process.env.port, () => console.log(`server up and runing on port ${port}`));
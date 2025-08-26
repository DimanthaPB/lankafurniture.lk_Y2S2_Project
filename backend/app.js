const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Import routes
const itemRoutes = require("./Routes/itemRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use("/api/items", itemRoutes);

// Test route
app.get("/", (req, res) => res.send("API is working"));

app.use("/uploads", express.static("uploads"));


// MongoDB connection
mongoose.connect("mongodb+srv://user01:user01@cluster0.jsnvxmd.mongodb.net/lanakafurniture")
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch(err => console.log(err));

  //mongodb+srv://AN:KHlQoXKnknKp3iTU@cluster11.zyxx3z9.mongodb.net/ceyfurDB
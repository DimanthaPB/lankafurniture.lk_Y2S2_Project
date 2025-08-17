const express = require("express");
const dbConnection = require("./config/db");

const app = express();

//DB Connection
dbConnection();

app.get("/", (req,res) => res.send("Hello Server is Running.."));

const PORT = 3000;

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
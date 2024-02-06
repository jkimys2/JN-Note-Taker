// import dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// initialize express/port
const app = express();
PORT = process.env.PORT || 3001;

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app listener to start server
app.listen(PORT, () => console.log(`Note Taker app listening at http://localhost:${PORT}!`));
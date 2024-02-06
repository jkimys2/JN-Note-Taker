// import dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// initialize express/port
const app = express();
PORT = process.env.PORT || 3001;

// import router
const apiRouter = require("./routes/apiRouter");

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Send all requests that begin with /api to router file
app.use("/api", apiRouter);

// GET route to navigate to notes.html from the index.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });  

// GET route to return to index.html when user attempts to visit routes that don't exist
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// app listener to start server
app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}!`)
);

// import dependencies
const notesRouter = require("express").Router();
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

// GET route for retrieving data
notesRouter.get(
  "/",
  (req, res) => {
    // res.json("../db/db.json");
    fs.readFile("./db/db.json", (err, data) => {
      res.json(JSON.parse(data))
    })
  }
);

// POST route for submitting note
notesRouter.post("/", (req, res) => {

  // Destructuring assignment for items in req.body
  const { title, text } = req.body;

  // Save if all the required properties are present
  if (title && text) {

    // Variable for objects to be saved
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    // Convert data to string to be saved
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedNote = JSON.parse(data);
        parsedNote.push(newNote);
        // const stringedNote = JSON.stringify(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(parsedNote), (error) =>
          error
            ? console.log(error)
            : console.log(`New note has been written to JSON file!`)
        );
      }
    });

    // Write string to file
    const response = {
      status: "success",
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(404).json("Error in posting note");
  }
});

// export notesRouter
module.exports = notesRouter;

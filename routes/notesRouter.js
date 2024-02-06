// import dependencies
const notesRouter = require("express").Router();
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

// GET route for retrieving data
notesRouter.get(
  "/notes",
  (req, res) => {
    console.info(`${req.method} request received for notes`);
    res.sendFile(path.join(__dirname, "../db/db.json"));
  }
);

// POST route for submitting note
notesRouter.post("/notes", (req, res) => {
  console.info(`${req.method} request received to submit note`);

  // destructuring assignment for items in req.body
  const { title, text } = req.body;

  // Save if all the required properties are present
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    fs.readFile("../db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(newNote);
        const stringedNote = JSON.stringify(newNote);
        fs.writeFile("../db/db.json", stringedNote, (error) =>
          err
            ? console.log(error)
            : console.log(`New note has been written to JSON file!`)
        );
      }
    });
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

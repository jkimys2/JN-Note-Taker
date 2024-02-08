// import modules
const notesRouter = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// GET route for retrieving data
notesRouter.get("/", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    res.json(JSON.parse(data));
  });
});

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
      id: uuidv4(),
    };

    // Obtain existing reviews
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);
        // Add new note
        parsedNotes.push(newNote);
        // Write updated note back to the file
        fs.writeFile("./db/db.json", JSON.stringify(parsedNotes), (writeErr) =>
          writeErr
            ? console.log(writeErr)
            : console.info(`New note has been written to JSON file!`)
        );
      }
    });

    // Write response
    const response = {
      status: "success",
      body: newNote,
    };

    console.log(response);
    res.status(200).json(response);
  } else {
    res.status(404).json("Error in posting note");
  }
});

// DELETE route to delete notes
notesRouter.delete("/:id", (req, res) => {
 fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);
        // Remove new note
        const updatedNotes = parsedNotes.filter(note => note.id !== req.params.id)
        // Write updated note back to the file
        fs.writeFile("./db/db.json", JSON.stringify(updatedNotes), (writeErr) =>
          writeErr
            ? console.log(writeErr)
            : console.info(`New note has been written to JSON file!`)
        );
      }
    });
    res.send(200);
})

// export notesRouter
module.exports = notesRouter;

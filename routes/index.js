// import dependencies
const apiRouter = require('express').Router();

// import files containing routes
const notesRouter = require("./notes");
const htmlRouter = require("./html");

apiRouter.use("/notes", notesRouter);

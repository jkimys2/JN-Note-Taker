// import dependencies
const apiRouter = require("express").Router();

// import files containing routes
const notesRouter = require("./notes");

apiRouter.use("/notes", notesRouter);

// export apiRouter
module.exports = apiRouter;

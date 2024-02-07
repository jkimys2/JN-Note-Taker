// import modules
const apiRouter = require("express").Router();

// import files containing routes
const notesRouter = require("./notesRouter");

apiRouter.use("/notes", notesRouter);

// export apiRouter
module.exports = apiRouter;

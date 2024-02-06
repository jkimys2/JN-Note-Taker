// // import dependencies
// const htmlRouter = require("expess").Router();
// const path = require("path");

// // GET route to navigate to notes.html from the index.html
// htmlRouter.get("/notes", (req, res) => {
//   console.info(`${req.method} request`);
//   res.sendFile(path.join(__dirname, "../public/notes.html"));
// });

// // GET route to return to index.html when user attempts to visit routes that don't exist
// htmlRouter.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// // export the router
// module.exports = htmlRouter;
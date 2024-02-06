// import dependencies
const notesRouter = require('express').Router();
const path = require('path');
const uuid = require('uuid');

// GET route for retrieving data
notesRouter.get('/', (req, res => {
    console.info(`${req.method} request received for notes`);
    res.sendFile(path.join(__dirname, '../db/db.json'));
}));

// POST route for submitting note
notesRouter.post('/', (req, res))
const htmlRouter = require('express').Router();
const path = require('path');

htmlRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); 
});

htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html')); 
});

module.exports = htmlRouter;

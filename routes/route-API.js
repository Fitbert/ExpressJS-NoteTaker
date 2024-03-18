const express = require('express');
const router = express.Router(); 
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

router.get('/api/notes', (req, res) => {
  try {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(dbJson);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post('/api/notes', (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: (req.body.id)
  };
  dbJson.push(newFeedback);
  fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
  res.json(dbJson);
});


router.delete('/api/notes/:id', (req, res) => {
  try {
    let dNote = fs.readFileSync("db/db.json", "utf8");
    const dataJSON = JSON.parse(dNote);
    const updatedNotes = dataJSON.filter((note) => {
      return note.id !== parseInt(req.params.id);
    });
    fs.writeFileSync("db/db.json", JSON.stringify(updatedNotes));
    res.json("Note deleted successfully.");
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
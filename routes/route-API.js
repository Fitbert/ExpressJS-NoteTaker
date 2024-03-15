const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router(); // Import Router from express

router.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
  res.json(dbJson);
  // Your route handling logic
});

router.post('/api/notes', (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newFeedback);
  fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
  res.json(dbJson);
});

router.delete('/api/notes/:id', (req, res) => {
  let dNote = fs.readFileSync("db/db.json', 'utf8'");
  const dataJSON =  JSON.parse(dNote);
  const jots = dataJSON.filter((note) => { 
    return note.id!== req.params.id;
  });
  fs.writeFileSync("db/db.json",JSON.stringify(jots));
  res.json("Deleted notes.");
});
module.exports = router;

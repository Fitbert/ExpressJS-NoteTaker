    const exRouter = require('express').Router();
    const fs = require('fs');
    
    Router.get('/api/notes', async (req, res) => {
      const apijson = await JSON.parse(fs.readFileSync('path/to/file', 'utf8'))});
    
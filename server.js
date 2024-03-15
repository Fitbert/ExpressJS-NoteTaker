const express = require('express');
const routeHtml = require('./routes/routes-Html'); 
const routeAPI = require('./routes/route-API'); 

const PORT = process.env.PORT || 8800;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(routeHtml); 
app.use(routeAPI); 

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});


const express = require('express');
const routeHTML = require('./routes/routeshtml'); 
const routeAPI = require('./routes/routeAPI'); 

const PORT = process.env.PORT || 8800;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(routeHTML);
app.use(routeAPI);

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`); 
});

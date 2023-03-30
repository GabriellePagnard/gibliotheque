const express = require('express');
const app = express();
const port = 3001;

const router = require ('./router/router');

app.set('view engine', 'ejs');
app.set("views", "views");

app.use(express.static('static'));

app.use(router)

app.listen(port, () => {
    console.log(`Ghibli is listening on http://localhost:${port} `);
})
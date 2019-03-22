const express = require('express');
const cors = require('cors');
const db = require('./fileDb');
const threads = require('./app/threads');

db.init();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = 8000;

app.use('/threads', threads);

app.listen(port, () => {
    console.log(`Server started on ${port} port`);
});
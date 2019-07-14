const express = require('express');

const artistRouter = require('./routes/artists');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/artists', artistRouter);


module.exports = app;

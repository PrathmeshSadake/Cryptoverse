const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB)
  .then(() => console.log('💻 Mondodb Connected'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Server working 🔥');
});

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`);

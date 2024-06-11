const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/librarydb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', bookRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/myapp';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Hello from OpenShift Node.js app!');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});

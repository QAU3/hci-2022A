// Requiered modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Variables
const app = express();
const port = 5000;
const uri =
  'mongodb+srv://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASS +
  '@qcluster.fjpqirl.mongodb.net/' +
  process.env.DB_NAME +
  '?retryWrites=true&w=majority';

const novice = require('./routes/novice');

// Mongo initiaization
mongoose.set('strictQuery', true);

function connect2Database() {
  // This should be an async function
  try {
    mongoose.connect(uri);
    console.log('Connected to the database');
  } catch (err) {
    console.log(err);
  }
}

connect2Database();

// Express routes (endpoints)
app.get('/', (req, res) => {
  console.log('Works');
  res.send('Works');
});

app.use('/novice', novice);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port: ${process.env.PORT || port}`);
});

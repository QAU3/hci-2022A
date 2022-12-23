// Requiered modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Variables
const app = express();
const port = 5000;
const uri =
  'mongodb+srv://Q-AU:Intitle258501-@qcluster.fjpqirl.mongodb.net/?retryWrites=true&w=majority';

const novice = require('./routes/novice');

// Mongo initiaization
mongoose.set('strictQuery', true);
// Express routes (endpoints)
app.get('/', (req, res) => {
  console.log('Works');
  res.send('Works');
});

app.use('/novice', novice);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(process.env.PORT || port, () => {
      console.log(
        `Database connected && Server is running on port: ${
          process.env.PORT || port
        }`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

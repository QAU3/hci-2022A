// Requiered modules
const express = require('express');
const novice = express.Router();

const noviceController = require('../controllers/novice');

//Gets all the news in the DB
novice.get('/', async (req, res, next) => {
  try {
    noviceController.allNovice();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = novice;

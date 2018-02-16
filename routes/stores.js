require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Muses = require('../models/muses');
var Stresses = require('../models/stresses');

// GET route for viewing muses
router.get('/muses', function(req, res){
  Muses.find(function(err, muses){
    if (err){
      console.log("database error in muses get: " + err);
      res.sendStatus(500);
    }
    console.log('i am a mused ')
    res.json(muses);
  });
});

// GET route for viewing stresses
router.get('/stresses', function(req, res){
  Stresses.find(function(err, stresses){
    if(err){
      console.log("database error in stresses get: " + err);
      res.sendStatus(500);
    }
    console.log('stress level reached arrggg');
    res.json(stresses)
  });
});








module.exports = router;
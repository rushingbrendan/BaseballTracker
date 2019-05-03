var express = require('express');
var router = express.Router();

var BaseballEvent = require('../objects/BaseballEvent');
var Inning = require('../objects/Inning');






/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET users listing. */
router.get('/2', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json(
    

    
    [{
    date: 1,
    foglamps: 100        
  }, 
  {
    date: 2,
    foglamps: 200,
  },
  {
    date: 3,
    foglamps: 300,
  },
  {
    date: 4,
    foglamps: 400,
  },
  {
    date: 5,
    foglamps: 500,
  },
  {
    date: 6,
    foglamps: 600,
  },
  {
    date: 7,
    foglamps: 700,
  },
  {
    date: 8,
    foglamps: 800,
  },
  {
    date: 9,
    foglamps: 900,
  },
  {
    date: 10,
    foglamps: 1000,
  },
  {
    date: 11,
    foglamps: 1100,
  },
  {
    date: 12,
    foglamps: 1200,
  }


]);
});




router.get('/baseballScore', function(req, res, next) {

  //dummy data
  var currentGame = new BaseballEvent();
  var newInning = new Inning();

  currentGame.awayTeamLine = '+110';
  currentGame.homeTeamLine = '-120';
  currentGame.gameTotal = 9.5;

  for (var i = 0; i < 9; i ++){
    currentGame.innings[i].awayTeamScore = 1;
    currentGame.innings[i].homeTeamScore = 1;
  }
  
  newInning.awayTeamScore = 5;
  newInning.homeTeamScore = 0;

  currentGame.innings.push(newInning);

  res.json(currentGame);
  

});



module.exports = router;

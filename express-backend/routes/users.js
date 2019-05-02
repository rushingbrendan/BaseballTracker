var express = require('express');
var router = express.Router();

//var mysql = require('mysql')
var sql = require('mssql');


// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'Conestoga1',
//   database : 'sportsMonitor',
//   port     : 3306
// });


var sqlConfig = {
  user: 'SetUser3',
  password: 'Conestoga1',
  server: 'kanban.database.windows.net',    // don't add tcp & port number
  database: 'kanban',
  options: {
    encrypt: true
  }
};


/* connect to MySQL database */
// connection.connect(function(err) {
//   if (err) throw err
//   console.log('You are now connected...')
// })


/* GET users listing. */
router.get('/:season/:week', function(req, res, next) {

  /* Get URL details */
  var seasonInput = req.params.season;
  var weekInput = req.params.week;

  console.log("Season: " + seasonInput);
  console.log("Week: " + weekInput);


  /* Get data from MySQL database */
  //connection.query('CALL spWeekGetScoreData(50,2015)', function (err, rows, fields) {
    connection.query('CALL spWeekGetScoreData('+weekInput+','+seasonInput+');', function (err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows[0])

    /* Send data back to user requesting */
    res.send({data: rows});
  })



});


router.get('/foglamps', function(req, res, next) {


  (async function () {
    try {
      console.log("sql connecting......")
      let pool = await sql.connect(sqlConfig)
      let result = await pool.request()
        .query("GetFogLamps")  // subject is my database table name
  
//      console.log(result );

      console.log("Fog Lamps: " + result.recordset[0].fogLampCount)

      /* Send data back to user requesting */
      //
      //res.setHeader('Content-Type', 'application/json');
      res.json({fogLampCount: result.recordset[0].fogLampCount});

      //res.send();

      sql.close();
  
    } catch (err) {
      sql.close();
      console.log(err);
    }
  })()


});


router.get('/builtfoglamps', function(req, res, next) {


  (async function () {
    try {
      console.log("sql connecting......")
      let pool = await sql.connect(sqlConfig)
      let result = await pool.request()
        .query("GetFogLampBuiltData")  // subject is my database table name
  
//      console.log(result );

      console.log("Fog Lamps: " + result.recordset[0].fogLampCount)

      /* Send data back to user requesting */
      //
      //res.setHeader('Content-Type', 'application/json');
//      res.json({fogLampCount: result.recordset[0].fogLampCount});

      res.json({fogLampCount: result.recordsets});

      //res.send();

      sql.close();
  
    } catch (err) {
      sql.close();
      console.log(err);
    }
  })()


});



router.get('/defectfoglamps', function(req, res, next) {


  (async function () {
    try {
      console.log("sql connecting......")
      let pool = await sql.connect(sqlConfig)
      let result = await pool.request()
        .query("GetFogLampDefectData")  // subject is my database table name
  
//      console.log(result );

      console.log("Fog Lamps: " + result.recordset[0].fogLampCount)

      /* Send data back to user requesting */
      //
      //res.setHeader('Content-Type', 'application/json');
//      res.json({fogLampCount: result.recordset[0].fogLampCount});

      res.json({fogLampCount: result.recordsets});

      //res.send();

      sql.close();
  
    } catch (err) {
      console.log(err);
      sql.close();
    }
  })()


});


router.get('/getorders', function(req, res, next) {


  (async function () {
    try {
      console.log("sql connecting......")
      let pool = await sql.connect(sqlConfig)
      let result = await pool.request()
        .query("GetOrders")  // subject is my database table name
  
//      console.log(result );

      console.log("Fog Lamps: " + result.recordset[0])

      /* Send data back to user requesting */
      //
      //res.setHeader('Content-Type', 'application/json');
//      res.json({fogLampCount: result.recordset[0].fogLampCount});

      res.json({fogLampCount: result.recordsets});

      //res.send();

      sql.close();
  
    } catch (err) {
      console.log(err);
      sql.close();
    }
  })()


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


module.exports = router;
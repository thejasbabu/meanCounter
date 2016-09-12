const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.locals.port = 4000;
app.locals.dbURL = '';
app.use(express.static(__dirname + '/public'));

MongoClient.connect(app.locals.dbURL, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(app.locals.port, () => {
    console.log("Server running on:" + app.locals.port)
  })
})

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/public')
})

app.get('/counter', (req, res) => {
  var counter = db.collection('counter').find().toArray(function(err, results) {
      res.json({counter1 : results[0].counter1, counter2: results[0].counter2})
  })
})

app.get('/add/counter1', (req, res) => {
  db.collection('counter').update(
   { counterid: 1 },
   { $inc: { counter1: 1}},
   { upsert: true }
  )
  var counter = db.collection('counter').find().toArray(function(err, results) {
      res.json({counter1: results[0].counter1, counter2: results[0].counter2})
  })
})

app.get('/add/counter2', (req, res) => {
  db.collection('counter').update(
   { counterid: 1 },
   { $inc: { counter2: 1} },
   { upsert: true }
  )
  var counter = db.collection('counter').find().toArray(function(err, results) {
      res.json({counter1: results[0].counter1, counter2: results[0].counter2})
  })
})

app.get('/sub/counter1', (req, res) => {
  db.collection('counter').update(
   { counterid: 1 },
   { $inc: { counter1: -1} },
   { upsert: true }
  )
  var counter = db.collection('counter').find().toArray(function(err, results) {
      res.json({counter1: results[0].counter1, counter2: results[0].counter2})
  })
})

app.get('/sub/counter2', (req, res) => {
  db.collection('counter').update(
   { counterid: 1 },
   { $inc: { counter2: -1} },
   { upsert: true }
  )
  var counter = db.collection('counter').find().toArray(function(err, results) {
      res.json({counter1: results[0].counter1, counter2: results[0].counter2})
  })
})

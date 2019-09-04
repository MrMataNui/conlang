// const express = require('express');
// const app = express();

// const mongoose = require('mongoose');
// let url = 'mongodb://localhost/blogDb';

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// app.post('/api/user/login', (req, res) => {
//   mongoose.connect(url, function (err) {
//     if (err) throw err;
//     console.log('connected successfully, username is ', req.body.username, ' password is ', req.body.password);
//   });
// });

// app.listen(3000, () => console.log('blog server running on port 3000!'));
// let MongoClient = require('mongodb').MongoClient,
//   assert = require('assert');
// // --------------------------------------------------------------------------------

// // Connection URL
// url = 'mongodb://localhost:27017/myproject';
// // Use connect method to connect to the Server
// MongoClient.connect(url, function (err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   db.close();
// });
// // npm start
// // webdriver-manager start
// // protractor conf.js
// // node app.js

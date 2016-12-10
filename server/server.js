var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../client/public')));
app.use('/api', routes);
//morgan

var port = 3001;

app.listen(port);
// database connection
mongoose.connect('mongodb://jackie:password@ds127978.mlab.com:27978/recommendator')
const db = mongoose.connection
db.once('open', () => {
  console.log('connected to database')
})


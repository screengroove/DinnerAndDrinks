var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');
const twilio = require('twilio');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../client/public')));
app.use('/api', routes);
//morgan

app.post('/sms', function(req, res) {
  var twilio = require('twilio');
  var twiml = new twilio.TwimlResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

var port = 3001;

app.listen(port);

mongoose.connect('mongodb://jackie:password@ds127978.mlab.com:27978/recommendator')
const db = mongoose.connection
db.once('open', () => {
  console.log('connected to database')
})


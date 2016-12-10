var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../client/public')));

app.use('/api', routes);

var port = 3001;

app.listen(port);

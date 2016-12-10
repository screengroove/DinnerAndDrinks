const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const emailCtrl = require('./controllers/email.js')
const db = require('./db/db.js')

//require controllers and db


// CONFIG (USE) ============================
app.use( morgan('dev') );
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use('/',express.static('../client/public'));
} 

// LISTEN (SET) =============================
app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), function(){
  console.log('API Server started: http://localhost:' + app.get('port') + '/');
})


// ROUTING (GET) =============================
app.get('/api/emails', emailCtrl.get)
app.post('/api/emails', emailCtrl.post)

app.get('*', (req, res) => {
  res.sendfile('./client/public/index.html');
})


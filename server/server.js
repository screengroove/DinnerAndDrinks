const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const parser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('../config')
const passport = require('passport')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')

// port settings
let port = process.env.PORT || 3000

<<<<<<< f19d65393284fbf09c35487c947d0708cc696716
=======

>>>>>>> [merge] Solve merge conflict
// web socket protocol on localhost on port 3000
server.listen(port, () => {
  console.log(`Listen to http://localhost:${port}`)
})

// database connection
mongoose.Promise = require('bluebird')
mongoose.connect(config.database.mongo)
const db = mongoose.connection
db.once('open', () => {
  console.log('connected to database')
})

// Custom Middleware for Allow HTTP Access
let allowDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

// Middleware
// Body Parser, Morgan, and Public Compiled folder
app.use(cors({ origin: '*' }))
app.use(morgan('dev'))
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(express.static('public'))

app.use(cookieParser()) // read cookies (needed for auth)

// required for passport
app.use(session({ secret: 'secret' })) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash()) // use connect-flash for flash messages stored in session

// web socket protocol on localhost on port 3000
server.listen(port, () => {
  console.log(`Listen to http://localhost:${port}`)
})

// database connection
mongoose.connect(config.database.mongo)
const db = mongoose.connection
db.once('open', () => {
  console.log('connected to database')
})

// Render the index.html
app.get('/', (req, res) => { res.sendFile('index.html') })

app.use('/api', routes) // when you add api routes in routes.js

// Web socket on connection
io.on('connection', (socket) => {
  io.emit('this', { will: 'be received by everyone' })

    // disconnect the websocket when user leaves
  socket.on('disconnect', () => {
    io.emit('user disconnected')
  })
})

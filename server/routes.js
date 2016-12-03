// calling controller functions when routes are hit
const router = require('express').Router()
const controllers = require('./controllers')

// api/ server roots

// authentication
router.get('/auth', controllers.auth.get)
router.post('/auth', controllers.auth.post)

// favorites
router.get('/favorites', controllers.favorites.get)
router.post('/favorites', controllers.favorites.post)

// comments
router.get('/comments', controllers.comments.get)
router.post('/comments', controllers.comments.post)

// hotspots
router.get('/hotspots', controllers.hotspots.get)
router.post('/hotspots', controllers.hotspots.post)

// export router for server.js
module.exports = router

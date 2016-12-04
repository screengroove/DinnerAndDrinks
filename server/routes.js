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

// maps
router.get('/maps', controllers.maps.get)
router.post('/maps', controllers.maps.post)

// yelp
router.get('/yelp', controllers.yelp.get)
router.post('/yelp', controllers.yelp.post)
router.get('/yelp/search', controllers.yelp.getSearch)
router.post('/yelp/search', controllers.yelp.postSearch)
router.get('/yelp/business', controllers.yelp.getBusiness)
router.post('/yelp/business', controllers.yelp.postBusiness)

// export router for server.js
module.exports = router

// calling controller functions when routes are hit
const router = require('express').Router()
const controllers = require('./controllers')


// yelp
router.get('/yelp/search', controllers.yelp.getSearch)
router.post('/yelp/search', controllers.yelp.postSearch)
router.get('/yelp/searchbars', controllers.yelp.getBars)
router.post('/yelp/business', controllers.yelp.postBusiness)

// export router for server.js
module.exports = router

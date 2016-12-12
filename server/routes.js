// calling controller functions when routes are hit
const router = require('express').Router()
const controllers = require('./controllers')


// yelp
router.get('/yelp/search', controllers.yelp.getSearch)
router.post('/yelp/search', controllers.yelp.postSearch)
router.get('/yelp/searchbars', controllers.yelp.getBars)
router.get('/yelp/business', controllers.yelp.getBusiness)

//emails
router.get('/contacts', controllers.contacts.get)
router.post('/contacts', controllers.contacts.post)

// export router for server.js
module.exports = router

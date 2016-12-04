// call model functions in controller functions
const yelp = require('./config')
const models = require('./models')

module.exports = {
    // Josh's endpoint is user
  auth: {
    get: (req, res) => {
      models.auth.get()
            .then(data => {
              res.send()
            })
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  },
  favorites: {
    get: (req, res) => {
            /* can look something like this
                models.user.get() */
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  },
  comments: {
    get: (req, res) => {
            /* can look something like this
                models.user.get() */
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  },
  hotspots: {
    get: (req, res) => {
      models.hotspots.get(req.body)
      res.send()
    },
    post: (req, res) => {
      models.hotspots.post(req.body)
      res.send(req.body)
    }
  },
  yelp: {
    get: (req, res) => {
            /* can look something like this
                models.user.post() */      
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    },    
    getPhoneSearch: (req, res) => {
      
    },
    postPhoneSearch: (req, res) => {
            /* can look something like this
                models.user.post() */
    },
    getSearch: (req, res) => {
      yelp.search({
        latitude: 0.0,
        longitude: 0.0,
        term: '',
        sort: 0,
        category_filter: '',
        catergories: '',
        rating: 0
      })
      .then(resp => {
        res.send(resp)
      }).catch(err => { console.log(`getSearch Yelp error ${err}`) })
    },
    postSearch: (req, res) => {
      yelp.search({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        term: req.body.term,
        sort: req.body.sort,
        category_filter: req.body.catergory_filter,
        catergories: req.body.catergories,
        rating: req.body.rating
      })
      .then(resp => {
        res.send(resp)
      }).catch(err => { console.log(`getSearch Yelp error ${err}`) })
    },
    getBusiness: (req, res) => {
      yelp.business('', (err, data) => {
        if (err) { console.log(`getBusiness error: ${err}`) }
      })
    },
    postBusiness: (req, res) => {
      yelp.business(req.body.id, (err, data) => {
        if (err) { console.log(`postBusiness error: ${err}`) }
      })
    }
  },
  maps: {
    get: (req, res) => {
            /* can look something like this
                models.user.post() */
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  }

}

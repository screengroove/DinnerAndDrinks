// Interact with database on the models functions here
const Hotspot = require('../database/db').Hotspot
module.exports = {
  users: {
    get: (data) => {
      console.log('within model GET', data)
      User.findOne({
        username: data.username
      }, (err, user) => {
        if (err) {
          console.log('ERROR in GET MODEL', err)
        }
        console.log('line 21', user)
        return user
      })
    },
    post: (req, res) => {
      console.log(req, '*****')
      console.log('within model POST', req.body)
      User.create({
        username: req.username,
        password: req.password
      }, (err, user) => {
        if (err) {
          console.log('Server-side POST error: ', err)
        }
      })
    }
  },
  favorites: {
    get: () => {
            /*
             Interact with database
             */
    },
    post: () => {
            /*
             Interact with database
             */
    }
  },
  comments: {
    get: () => {
            /*
             Interact with database
             */
    },
    post: () => {
            /*
             Interact with database
             */
    }
  },
  hotspots: {
    get: () => {
      console.log('sending get request')
    },
    post: (req, res) => {
      console.log('this is working: ', req)
      Hotspot.create(req, (err) => {
        if (err) {
          return err
        }
      })
    }
  }

}

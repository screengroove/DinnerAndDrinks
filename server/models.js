// Interact with database on the models functions here
const Hotspot = require('../database/db').Hotspot
const User = require('../database/db').User
const Favorites = require('../database/db').Favorites

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
    get: (req, res) => {
      Favorites.find().exec((err, data) => {
        return data
      })
    },
    post: (data) => {
      Favorites.create(data, (err) => {
        if (err) return err
      })
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
    get: (req, res) => {
      Hotspot.find().exec((err, data) => {
        console.log('ah ha...data: ', data)
        res.send(data)
      })
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

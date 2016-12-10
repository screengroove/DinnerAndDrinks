// Interact with database on the models functions here
const Hotspot = require('../database/db').Hotspot
const User = require('../database/db').User
const Favorites = require('../database/db').Favorites

module.exports = {
  users: {
    get: (req, res) => {
      User
        .findOne({

          email: req.email,
          password: req.password

        })
        .exec((err, user) => {
          if (err) {
            console.log('ERROR in MODEL GET: ', err)
          } else {
            res.json(user)
          }
        })
    },
    post: (req, res) => {
      User
        .create({
          firstName: req.firstName,
          email: req.email,
          password: req.password
        }, (err, user) => {
          if (err) {
            console.log('ERROR in MODEL POST: ', err)
          } else {

          }
        })
    }
  },
  favorites: {
    get: (req, res) => {
      Favorites.find().exec((err, data) => {
        res.send(data)
      })
    },
    post: (data) => {
      Favorites.create(data, (err) => {
        if (err) return err
      })
    },
    delete: (req, res) => {
      Favorites.remove({ _id: req.deleteMe }, (err, data) => {
        res.send(data)
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

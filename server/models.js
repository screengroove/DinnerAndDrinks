// Interact with database on the models functions here
const Hotspot = require('../database/db').Hotspot
const User = require('../database/db').User
const Favorites = require('../database/db').Favorites
const Contact = require('../database/db').Contact

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
  },
  contact: {
    get: function(req,req){
      Contact.find(function(err,contact){
        if(err){
          return handleError(err)
        }
        if(contact){
          res.json(contact)
        }
      })
    },
      post: (req, res) => {
      Contact
        .create({
          phone: req.phone,
          name: req.name,
          firstLocation: req.firstLocation,
          secondLocation: req.secondLocation
        }, (err, user) => {
          if (err) {
            console.log('ERROR in MODEL POST: ', err)
          } else {

          }
        })
      var accountSid = 'ACc478af3f86c6c513367dad1db638766b'
      var authToken = 'e16a7e463895481d3c6a660b4b4ccc28'
 
      //require the Twilio module and create a REST client 
      var client = require('twilio')(accountSid, authToken)
      var message = "Want to go to dinner at " + req.firstLocation + " and then get drinks at " + req.secondLocation + " ? " + "Sent by your friend " + req.name + " via Twilio"
      client.sendMessage({ 
          to: req.phone, 
          from: "+14243296340", 
          body: message
      })
      .then(function(message){
          console.log(message.sid)
      })
      .catch(function(err){
        console.log(err)
      })   
    }
}

}

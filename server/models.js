// Interact with database on the models functions here
const Hotspot = require('../database/db').Hotspot
module.exports = {
  auth: {
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
    get: (req, res) => {
      Hotspot.find({}, (err, hotspots) => {
        console.log("hotspots: ", hotspots)
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

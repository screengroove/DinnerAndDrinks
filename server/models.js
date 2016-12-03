// Interact with database on the models functions here
const Rec = require('../database/db')

module.exports = {
  auth: {
    get: (data) => {
      Rec.find((err, data) => {
        
      })

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
    get: () => {

    },
    post: (req, res) => {
      console.log('this is working: ', req)
      Rec.hotposts.save()
    }
  }

}

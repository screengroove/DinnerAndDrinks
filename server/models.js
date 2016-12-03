// Interact with database on the models functions here
const Rec = require('../database/db')

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
<<<<<<< HEAD
    get: (req, res) => {

    },
    post: (req, res) => {
      console.log(req.body)
=======
    get: () => {

    },
    post: (req, res) => {
      console.log('this is working: ', req)
      Rec.hotposts.save()
>>>>>>> 5f24511e78cce195e5bed54cd98461df6306c56f
    }
  }

}

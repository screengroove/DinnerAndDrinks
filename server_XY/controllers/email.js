var Email = require('../models/email.js')

module.exports = {
	get: function(req,req){
		Email.find(function(err,email){
			if(err){
				return handleError(err)
			}
			if(email){
				res.json(email)
			}
		})
	},
	post: function(req,res){
		var email = new Email({
			email: req.body.email,
			firstLocation: req.body.firstLocation,
			secondLocation: req.body.secondLocation,
			date: req.body.image
		})
		email.save(function(err){
			if(err){
				throw(err);
			} else {
				console.log("this fires after post")
			}
		}).then(function(arg){
			res.send("posted to deb")
		})
	}
}
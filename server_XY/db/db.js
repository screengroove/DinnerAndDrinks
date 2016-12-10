var mongoose = require('mongoose');
mongoose.Promise = require('bluebird')

mongoURI = "mongodb://jackie:password@ds127978.mlab.com:27978/recommendator";
mongoose.connect(mongoURI, function(err){
	if(err){
		console.log("Error: failed connection", err)
	} else {
		console.log("Success: connected to the db")
	}
});

var db = mongoose.connection;

module.exports=db;

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var emailSchema = new Schema({
	email: String,
	firstLocation: String,
	secondLocation: String,
	date: {type: Date, default: Date.now}
})

var Email = mongoose.model('Email', emailSchema)

module.exports = Email
// Twilio Credentials 
var accountSid = 'ACc478af3f86c6c513367dad1db638766b'
var authToken = 'e16a7e463895481d3c6a660b4b4ccc28'
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.sendMessage({ 
    to: "+13102209236", 
    from: "+14243296340", 
    body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
})
.then(function(message){
		console.log(message.sid)
})
.catch(function(err){
	console.log(err)
})
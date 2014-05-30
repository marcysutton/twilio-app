// Require the twilio and express modules
var twilio = require('twilio'),
    express = require('express');

var config = require ('./config/config');

// Create an express application
var app = express();

// Render an HTML page which contains a capability token that
// will grant permission to accept inbound calls to the ID
// "kevin" (this could be any string)
app.get('/', function(req, res) {

  // set headers for JSON
  res.header("Access-Control-Allow-Origin", "*");

  // Create an object which will generate a capability token
  // Replace these two arguments with your own account SID
  // and auth token:
  var capability = new twilio.Capability(
    config.env.TWILIO_ACCOUNT_SID,
    config.env.TWILIO_AUTH_TOKEN
  );

  // Give the capability generator permission to accept incoming
  // calls to the ID "kevin"
  //capability.allowClientIncoming(config.env.INCOMING);

  capability.allowClientOutgoing(config.env.OUTGOING);

  // Render JSON which contains our capability token
  res.json({ token:capability.generate() });
});

app.listen(config.env.PORT);
console.log('Visit http://localhost:'+config.env.PORT+'/ to accept inbound calls!');

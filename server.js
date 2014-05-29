// Require the twilio and express modules
var twilio = require('twilio'),
    express = require('express');

var process = require ('./config/process');

// Create an express application
var app = express();

// Render an HTML page which contains a capability token that
// will grant permission to accept inbound calls to the ID
// "kevin" (this could be any string)
app.get('/', function(req, res) {

    // Create an object which will generate a capability token
    // Replace these two arguments with your own account SID
    // and auth token:
    var capability = new twilio.Capability(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    // Give the capability generator permission to accept incoming
    // calls to the ID "kevin"
    capability.allowClientIncoming(process.env.INCOMING);

    capability.allowClientOutgoing(process.env.OUTCOMING);

    // Render JSON which contains our capability token
    res.json({ token:capability.generate() });
});

app.listen(8001);
console.log('Visit http://localhost:8001/ to accept inbound calls!');

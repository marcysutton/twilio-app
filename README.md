#Twilio App

This Twilio application creates a JSON endpoint for use in browser phone calling.

##Requirements

* Node.js
* Express
* Twilio

##Project Setup
```
$ git clone https://github.com/marcysutton/twilio-app.git
$ cd twilio-app
```

###Install dependencies:
```
$ npm install
```

##How to Use
Directions: https://www.twilio.com/blog/2013/04/introduction-to-twilio-client-with-node-js.html

Configure Twilio SID and Twilio Auth Token in `config/config.js.example` and rename as your own file.

Once dependencies have been installed, launch from command-line:

```
$ node server.js
```

Endpoint will be available at `http://localhost:8001/` (or whichever port you choose).

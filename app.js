
// Initialize Application

let express = require('express')
  , app = express()
  , dotenv = require("dotenv").config()
  , bodyParser = require('body-parser')
  , fs = require('fs')
  , port = process.env.PORT || 3000

//* Set View Directory Path
app.set('views', __dirname + '/app/views');

//* Set View File Extention
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express)

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routing
app.use(require('./app/controllers'));

// Listen Web Server
let httpServer = app.listen(port, () => {
  console.log('Listening on port ' + port);
});

httpServer.on('error', (err) => {
	console.log('there was an error:', err.message);
});
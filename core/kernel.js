module.exports = function() { 

    // Initialize Requirements
    let express = require('express');
    let app = express();
    let dotenv = require("dotenv").config();
    let bodyParser = require('body-parser');
    let fs = require('fs');
    let cookieParser = require('cookie-parser');
    let session = require('express-session');
    let passport = require('passport');

    // Set View Directory Path
    app.set('views', '../../app/views');

    // Set View File Extention
    app.set('view engine', 'pug');
    app.engine('pug', require('pug').__express)

    // Set Public Files Folder
    app.use(express.static('../public'));

    // Parse Post Parameters
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    // Initial Cookie & Sessions
    app.use(cookieParser());
    app.use(session({
    	secret : 'test',
    	resave : false,
    	saveUninitialized : false
    }));

    // Initial Authentication by Passport
    app.use(passport.initialize());
    app.use(passport.session());

    // Routing
    let routes = require('../../app/routes');
    app.use('/', routes);

    // Listen Web Server
    let port = process.env.PORT || 3000;
    let httpServer = app.listen(port, () => {
    console.log('Listening on port ' + port);
    });

    httpServer.on('error', (err) => {
        console.log('there was an error:', err.message);
    });
}
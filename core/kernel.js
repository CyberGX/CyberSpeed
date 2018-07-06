module.exports = function() { 

    // Initialize Requirements
    const express = require('express')
    const app = express();
    const dotenv = require("dotenv").config();
    const bodyParser = require('body-parser');
    const fs = require('fs');
    const cookieParser = require('cookie-parser');
    const session = require('express-session');
    const mongoose = require('mongoose');

    // Connect To Db
    console.log('Database Connection : mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME);
    mongoose.connect('mongodb://'+ process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;


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

    // Routing
    let routes = require('../app/routes');
    app.use('/', routes);

    // Listen Web Server
    let port = process.env.SERVER_PORT || 3000;
    let httpServer = app.listen(port, () => {
    console.log('WebServer Listening on port ' + port);
    });

    httpServer.on('error', (err) => {
        console.log('there was an error:', err.message);
    });
}
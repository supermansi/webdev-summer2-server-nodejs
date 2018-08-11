var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

//mongoose.connect('mongodb://mansijain:webdev123@ds215822.mlab.com:15822/webdev-summer2-mansijain');
 mongoose.connect('mongodb://localhost/whiteboard');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: true}));

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string lololol'
}));

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use('/', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

var userService = require('./services/user.service.server');
userService(app);

var sectionService = require('./services/section.service.server');
sectionService(app);

var enrollmentService = require('./services/enrollment.service.server');
enrollmentService(app);

require('./services/quiz.service.server')(app);

app.listen(3000);

/*
userModel.createUser({
    username: 'test',
    password: 'test'
})*/

var express = require("express");
var mongoose = require("mongoose");
var session = require('express-session') 
var bodyParser = require("body-parser");
var passport = require("passport")
var bcrypt=require("bcryptjs");
var app = express();
var port = 3000;
mongoose.Promise=global.Promise;

mongoose.connect("mongodb+srv://richa:<password>@cluster0-4c9w9.mongodb.net/test?retryWrites=true&w=majority",()=>{
    console.log("MongoDB connected")
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine' , 'ejs');
app.use('/assets',express.static('assets'));


require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());


var user = require("./router/routuser");
app.use(user);
 

app.listen(port,() =>{
    console.log("server is listening on port "+ port);
});

var express = require("express");
 

const passport = require('passport');
var middleware = require('../middleWare/middleware')
var bcrypt=require("bcryptjs");
var route = express.Router();
 const multipart = require('connect-multiparty');
const multipartWare = multipart()
var User = require("../models/model");
var People =User.find({});
route.get("/home",(req,res) =>{
    res.render("home");
});
route.get("/signup", (req,res) =>{
    res.render("signup");
});
route.get('/', function(req, res, next) {
    People.exec(function(err,data){
  if(err) throw err;
  res.render('index', { title: 'Records', records:data });
    });
    
  });


route.post("/signup",(req,res) =>{  
    const{ name,phone,age,dob,email,password,confirmpassword}=req.body;
    const isUser=true;
    
    User.findOne({email:email}).then(user=>{
        if(user)
            res.render('/signup');
        else{
            const newUser =new User({
                name,
                phone,
                age,
                dob,
                email,
                password,
                confirmpassword,
                isUser,  
            });
            
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password=hash;
            newUser.save()
            .then(user=>{
                res.redirect('/home');
            })
            .catch(err=>console.log(err));
            });
        });
        }
    });
});
module.exports=route;
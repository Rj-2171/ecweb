var middlewareObj = {};


middlewareObj.isUser = function(req, res, next){
    
    if(req.isAuthenticated()){
       if(req.user.isUser){
        return next();
       }
        
    }
    res.redirect("/home");
}
module.exports = middlewareObj;
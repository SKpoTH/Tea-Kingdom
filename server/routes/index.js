var express = require('express');
var AuthRouter = express.Router();

var loggedin = function(req, res, next){
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect('/signup')
    }
}


AuthRouter.get('/', function(req, res, next){
    res.render('index', { title: 'Express'});
});

AuthRouter.get('/login', function(req, res, next){
    res.json({
        login: 'fail'
    });
})

AuthRouter.get('/signup', function(req, res, next){
    res.json({
        login: 'success'
    });
});

AuthRouter.get('/profile', loggedin, function(req, res, next){
    res.json({
        login: 'success'
    });
});

AuthRouter.get('/logout', function(req, res){
    req.logout()
    res.send('Succes Logout')
})

module.exports = AuthRouter;
var express = require('express');
var AuthRouter = express.Router();

var loggedin = function(req, res, next){
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect('/login')
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
    res.send('สมัครก่อนไอ้สัด');
});

AuthRouter.get('/profile', loggedin, function(req, res, next){
    //res.send(req.session);
    res.json({
        login: 'success'
    });
});

AuthRouter.get('/logout', function(req, res){
    req.logout()
    res.send('Succes Logout')
})

module.exports = AuthRouter;
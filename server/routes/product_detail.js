var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/load', function(req, res){
    res.json({
        status : 'found',
        name: 'ชาอูหลง',
        src: './imgs/aulong.jpg',
        price: '300',
        description: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่'
    })
})

module.exports = router;
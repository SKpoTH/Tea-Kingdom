var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/load', function(req, res){
    res.json([{
        imgurl: '/imgs/green_tea.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: '/imgs/green_tea.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: '/imgs/black_tea_dust.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: '/imgs/black_tea_dust.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: '/imgs/black_tea_dust.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: '/imgs/black_tea_dust.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    },{
        imgurl: '/imgs/green_tea.jpg',
        productName: 'ชาอูหลง',
        productPrice: '299',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: '/imgs/green_tea.jpg',
        productName: 'ชาอูหลง',
        productPrice: '301',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }])
})

module.exports = router;
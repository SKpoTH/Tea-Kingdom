var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/load', function(req, res){
    res.json([{
        imgurl: './imgs/aulong.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: './imgs/aulong.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: './imgs/aulong.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: './imgs/aulong.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: './imgs/aulong.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: './imgs/aulong.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: './imgs/aulong.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: './imgs/aulong.jpg',
        productName: 'ชาอูหลง',
        productPrice: '300',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }, {
        imgurl: './imgs/aulong.jpg',
        productName: 'ชาอูหลง',
        productPrice: '200',
        productDes: 'ชาชั้นดีจากประเทศจีนที่ สดใหม่',
        productId: '123456789'
    }])
})

module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken');
//const passport = require('passport');
const User = require('../models/user');

router.post('/edit', (req, res) => {
    //find email if it was used
    console.log(req.body.firstname);
    User.findOne({
        email: req.body.email
    })
        .then(user =>{
            if(user) {

                user.firstname = req.body.firstname;
                user.lastname = req.body.lastname;
                user.address = req.body.address;
                user.phone = req.body.phone;

                user.save()
                    .then( user => {
                        res.json({
                            status: 'Successfully Edit',
                            firstname: user.firstname,
                            lastname: user.lastname,
                            address: user.address,
                            phone: user.phone
                        })
                    })
            } else{
                res.json({
                    status: 'Can not edit Profile'
                })
            }
        })
})

module.exports = router;

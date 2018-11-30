// Log in Function 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const express = require('express');

const User = require('../../models/user')

module.exports = function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    // find the email if was in system or not
    User.findOne({
        email
    })
        .then(user => {
            if(!user){
                return res.json({
                    status: "User and Password are not matched"
                })
            } else{
                // Compare password in database & the input password
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch){
                            //Set up pay load for JWT
                            const payload = {
                                email: user.email,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                address: user.address,
                                phone: user.phone
                            }
                            // Get token and send to the frontend
                            jwt.sign(payload, '12345', {
                                expiresIn: 100000               // Token Expire time here
                            }, (err, token) => {
                                if(err){
                                    console.error('Error: ', err);
                                } else{
                                    //Send token
                                    res.json({
                                        status: "Successful login",
                                        token: 'Bearer '+token
                                    })
                                }
                            })
                        } else{
                            return res.json({
                                status: "User and Password are not matched"
                            })
                        }
                    })
                    .catch( err => {
                        return res.json({
                            status: "Error"+err+" : Can't compare token and password"
                        })
                    })
            }
        })
}
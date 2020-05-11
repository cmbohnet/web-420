/*
============================================
; Title: Assignment 2.3
; Author: Chris Bohnet
; Date: 5 May 2020
; Modified By: Chris Bohnet
; Description: Gateway API
; Modifications: 
; 5/7 authController authController will orchestrate 
; the messages between our service calls and Mongo database
============================================

*/
var User = require('../models/user');

//register a new user on POST
exports.user_register = function(req,res) {
    res.send('NOT IMPLEMENTED: User registration POST');
};

//verify token on GET
exports.user_token = function(req,res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
}
/*
============================================
; Title: Assignment 2.3
; Author: Chris Bohnet
; Date: 3 May 2020
; Modified By:
; Description: User model for Gateway API - responsible for creating User documents and querying database records
============================================

*/
/*
Schema with 3 fields, username, password and email
*/
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);

/**
 Database queries
 */
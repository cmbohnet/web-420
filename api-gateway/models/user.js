/*
============================================
; Title: Assignment 2.3
; Author: Chris Bohnet
; Date: 3 May 2020
; Modified By: Chris Bohnet
; Description: User model for Gateway API - responsible for creating User documents and querying database records
; 5/21/20 - Add 2 new callback functions, add and getById
; 6/7/20 - Add a new query for finding individual users by email address.
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

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
}

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}
/**
 Database queries
 */
module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
}
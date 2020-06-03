/*
============================================
; Title: Assignment 1.4
; Author: Chris Bohnet
; Date: 5 May 2020
; Modified By: Chris Bohnet
; Description: Gateway API index.js
; Modifications: 
;
============================================

*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

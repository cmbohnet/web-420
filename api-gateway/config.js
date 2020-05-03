/*
============================================
; Title: Assignment 1.4
; Author: Chris Bohnet
; Date: 3 May 2020
; Modified By:
; Description: Gateway API
============================================

*/
var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';


module.exports = config;
/*
============================================
; Title: Assignment 1.4
; Author: Chris Bohnet
; Date: 5 May 2020
; Modified By: Chris Bohnet
; Description: Gateway API
; Modifications: 
; 5/7 - Add a public key is required for the handshake between parties
============================================

*/
var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

config.web.secret = "topsecret";

module.exports = config;
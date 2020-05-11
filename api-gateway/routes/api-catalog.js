/*
============================================
; Title: Assignment 2.3
; Author: Chris Bohnet
; Date: 5 May 2020
; Modified By: Chris Bohnet
; Description: Gateway API
; Modifications: 
; 5/7 - The api-catalog will host our HTTP request routes.
============================================

*/
/**
 * API Routes
 */

var express = require('express');
var router = express.Router();

var auth_controller = require('../controllers/authController.js');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

module.exports = router;
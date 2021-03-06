/*
============================================
; Title: Assignment 1.4
; Author: Chris Bohnet
; Date: 3 May 2020
; Modified By: Chris Bohnet
; Description: Gateway API
; Modifications:
; 5/7 - add a require statement to the app.js file for the api-catalog routes
============================================

*/
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var apiCatalog = require('./routes/api-catalog');

var app = express();

/**
 *
 * Database connection
 */

mongoose.connect('mongodb+srv://admin:admin@cluster0-3uuui.mongodb.net/test?retryWrites=true&w=majority', {
  
  promiseLibrary: require('bluebird')
  }).then ( () => console.log('connection successful'))
    .catch( (err) => console.error(err));
  
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/api', apiCatalog);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
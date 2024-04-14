var express = require('express');
var app = express();

var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
var cors = require('cors'); 
var cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

var usersrouter = require('./api/routes/user.routes');
var roomsrouter = require('./api/routes/rooms.routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3030']
}));

app.use('/api',usersrouter);
app.use('/api',roomsrouter);


app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

module.exports = app;

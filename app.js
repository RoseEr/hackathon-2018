var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/mysterium-app')));
app.use('/', express.static(path.join(__dirname, 'dist/mysterium-app')));
app.use('/ghost', express.static(path.join(__dirname, 'dist/mysterium-app')));
app.use('/psychic', express.static(path.join(__dirname, 'dist/mysterium-app')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;
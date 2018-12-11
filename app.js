var createError = require('http-errors');
var express = require('express');
var path = require('path');
const http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
const WebSocket = require('ws');
 
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

const server = http.createServer(app);
server.listen(process.env.PORT || 3001, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});

const wss = new WebSocket.Server({ server });

let psychics = {};
let ghost = {};

wss.on('connection', function connection(ws) {
  console.log('connection made');
  ws.on('message', function incoming(message) {
    const messageObject = JSON.parse(message);

    if (messageObject.type === 'new-connection') {
      var playerId = messageObject.playerId;
      if (messageObject.isGhost) {
        ghost = ws;
      } else {
        pyschics[playerId] = ws;
      }
    }

    console.log('received: %s', message);
    ws.send('sending response');
  });
 
  ws.send('Hi there, I am a WebSocket server');
});

module.exports = app;

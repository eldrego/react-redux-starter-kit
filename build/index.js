'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var port = process.env.PORT || 8080;

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use((0, _cors2.default)());

app.use(_bodyParser2.default.json({ extended: false }));
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// app.use(express.static(`${__dirname}/../client/dist`));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
// });

app.get('/', function (req, res) {
  res.send({ message: 'Welcome to the Journal Authentication' });
});

app.use('/api/v1/', _routes2.default);

app.server.listen(port);

_winston2.default.info('Started on port ' + port, 'info');

module.exports = app;
//# sourceMappingURL=index.js.map
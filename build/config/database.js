'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

_mongoose2.default.connect(process.env.DB, { useNewUrlParser: true });
var database = _mongoose2.default.connection;

exports.default = database;
//# sourceMappingURL=database.js.map
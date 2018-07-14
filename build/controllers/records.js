'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Record = require('../models/Record');

var _Record2 = _interopRequireDefault(_Record);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var records = {
  getAll: function getAll(req, res) {
    _Record2.default.find(function (err, recordDocs) {
      return res.send({
        articles: recordDocs,
        statusCode: 200
      });
    });
  }
};

exports.default = records;
//# sourceMappingURL=records.js.map
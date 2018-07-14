'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RecordsSchema = new _mongoose2.default.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
});
_mongoose2.default.model('Records', RecordsSchema);

module.exports = _mongoose2.default.model('Records');
//# sourceMappingURL=Record.js.map
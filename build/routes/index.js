'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _records = require('../controllers/records');

var _records2 = _interopRequireDefault(_records);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/all', _records2.default.getAll);

module.exports = router;
//# sourceMappingURL=index.js.map
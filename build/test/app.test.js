'use strict';

var request = require('supertest');

var _require = require('chai'),
    expect = _require.expect;

var server = require('../index.js');

describe('Server', function () {
  it('should return 200 if the server is running', function (done) {
    request(server).get('/').expect(200, done);
  });

  it('should respond with an htmL file when root is requested', function (done) {
    request(server).get('/').expect(200).end(function (err) {
      expect('type', 'text/html');
      done(err);
    });
  });

  it('should return 200 when you retrieve all records', function (done) {
    request(server).get('/api/v1/all').expect(200).end(function (err) {
      expect('statusCode', 200);
      done(err);
    });
  });
});
//# sourceMappingURL=app.test.js.map
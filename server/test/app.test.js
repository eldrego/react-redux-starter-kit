const request = require('supertest');
const { expect } = require('chai');
const server = require('../index.js');

describe('Server', () => {
  it('should return 200 if the server is running', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('should respond with an htmL file when root is requested', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end((err) => {
        expect('type', 'text/html');
        done(err);
      });
  });

  it('should return 200 when you retrieve all records', (done) => {
    request(server)
      .get('/api/v1/all')
      .expect(200)
      .end((err) => {
        expect('statusCode', 200);
        done(err);
      });
  });
});

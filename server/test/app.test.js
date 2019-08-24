const chaiHttp = require('chai-http');
const chai = require('chai');

const should = chai.should();
chai.use(chaiHttp);
const server = require('../index.js');

describe('Server', () => {
  it('should return 200 if the server is running', (done) => {
    chai.request(server)
      .get('/api/v1')
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.message.should.equal('Welcome, built with NodeJs, Express and MongoDB');
        done();
      });
  });

  it('should display a welcome message at the root route', (done) => {
    chai.request(server)
      .get('/api/v1/record')
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.message.should.equal('success');
        done();
      });
  });
});

const supertest = require('supertest');
const server = require('./server');

describe('server', function () {
  it('runs the tests', function () {
    expect(true).toBe(true);
  });
  describe('GET /', function () {
    it('should respond with a 200 OK', function () {
      return supertest(server)
        .get('/')
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe('GET /api/statistics', function () {
    it('should respond with a 200 OK', function () {
      return supertest(server)
        .get('/api/statistics')
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe('GET /', function () {
    it('should respond with JSON', function () {
      return supertest(server)
        .get('/')
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
  describe('GET /', function () {
    it('should respond with  message: "Welcome to the development api-server"', function () {
      return supertest(server)
        .get('/')
        .then((res) => {
          expect(res.body.message).toBe(
            'Welcome to the development api-server'
          );
        });
    });
  });
});

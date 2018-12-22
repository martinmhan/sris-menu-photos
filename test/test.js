const request = require('supertest');
const app = require('../server/index.js');

describe('Test the route to get all menus', () => {
  test('It should respond with a status code of 200', () => (
    request(app).get('/api/1')
      .then((res) => {
        expect(res.statusCode).toBe(200);
      })
  ));

  test('It should respond with an array', () => (
    request(app).get('/api/1')
      .then((res) => {
        expect(res.body).toEqual(expect.arrayContaining([expect.anything()]));
      })
  ));
});
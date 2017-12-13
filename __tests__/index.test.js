const appP = require('../server/app');
const request = require('supertest');
const config = require('../server/config');

describe('server', () => {
  it('should render index page correctly', (done) => {
    appP().then((app) => {
      request(app)
        .get('/')
        .then((res) => {
          expect(res.status).toBe(200);
          done();
        });
    });
  });
});

const request = require('supertest');
const app = require('../src/server');

describe('GET /', () => {
  it('should return API running message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/API is running/);
  });
});

describe('GET /products', () => {
  it('should return list of products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
const app = require('./app')
const request = require('supertest');

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the test path", () => {
  test("It should answer with a string containing '1,2,3'", () => {
    return request(app)
      .get("/test")
      .then(response => {
        expect(response.body.message).toContain('1,2,3');
    });
  });
});
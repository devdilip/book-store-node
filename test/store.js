process.env.NODE_ENV = "test";

let chai = require("chai").expect;
let app = require("../server");
const request = require("supertest");

const database = require("../config/database");

describe("/get book", () => {
  before(done => {
    database
      .connect()
      .then(() => done())
      .catch(err => done(err));
  });

  after(done => {
    database
      .close()
      .then(() => done())
      .catch(err => done(err));
  });
});

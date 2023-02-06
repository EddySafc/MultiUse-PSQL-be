const app = require("../app");
const request = require("supertest");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");

const { recipeData } = require("../db/data/development-data/index");
beforeEach(() => seed({ recipeData }));
afterAll(() => {
  return db.end();
});

describe("GET all_recipes", () => {
  test("GET 200 - respond with all recipes", () => {
    return request(app).get("/api/recipes").expect(200);
  });
});

describe("POST recipe to all_recipes", () => {
  test("POST 201 - post new recipe to all_recipes", () => {
    return request(app)
      .post("/api/recipes")
      .send({ body: "cheese sarny" })
      .expect(201);
  });
});

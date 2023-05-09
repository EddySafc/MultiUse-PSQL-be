const app = require("../app");
const request = require("supertest");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");

const {
  dailyData,
  weeklyData,
  monthlyData,
  userData,
  recipeData,
  shoppingListData,
} = require("../db/data/test-data/index");
beforeEach(() =>
  seed({
    dailyData,
    weeklyData,
    monthlyData,
    userData,
    recipeData,
    shoppingListData,
  })
);
afterAll(() => {
  return db.end();
});

describe("GET dailys", () => {
  test("GET 200 - respond with all daily todos", () => {
    return request(app)
      .get("/api/dailys")
      .expect(200)
      .then(({ body }) => {
        console.log("body:", body);
        expect(body.result.length).toBe(3);
        body.result.forEach((user) => {
          expect(user).toMatchObject({
            todo_id: expect.any(Number),
            todo_name: expect.any(String),
          });
        });
      });
  });
});

describe("GET weeklys", () => {
  test("GET 200 - respond with all weekly todos", () => {
    return request(app)
      .get("/api/weeklys")
      .expect(200)
      .then(({ body }) => {
        console.log("body:", body);
        expect(body.result.length).toBe(3);
        body.result.forEach((user) => {
          expect(user).toMatchObject({
            todo_id: expect.any(Number),
            todo_name: expect.any(String),
          });
        });
      });
  });
});

describe("GET monthlys", () => {
  test("GET 200 - respond with all monthly todos", () => {
    return request(app)
      .get("/api/monthlys")
      .expect(200)
      .then(({ body }) => {
        console.log("body:", body);
        expect(body.result.length).toBe(3);
        body.result.forEach((user) => {
          expect(user).toMatchObject({
            todo_id: expect.any(Number),
            todo_name: expect.any(String),
          });
        });
      });
  });
});

describe("POST item to dailys", () => {
  test("POST 201 - post new recipe to all_dailys", () => {
    return request(app)
      .post("/api/dailys")
      .send({ body: "walk", item_id: 99 })
      .expect(201);
  });
  test("POST 400 - bad request", () => {
    return request(app)
      .post("/api/dailys")
      .send({ blabla: "blabla", item_id: 77 })
      .expect(400);
  });
});

describe("POST item to weeklys", () => {
  test("POST 201 - post new recipe to weeklys", () => {
    return request(app)
      .post("/api/weeklys")
      .send({ body: "run 10km", item_id: 99 })
      .expect(201);
  });
  test("POST 400 - bad request", () => {
    return request(app)
      .post("/api/weeklys")
      .send({ blabla: "blabla", item_id: 77 })
      .expect(400);
  });
});

describe("POST item to monthlys", () => {
  test("POST 201 - post new recipe to monthlys", () => {
    return request(app)
      .post("/api/monthlys")
      .send({ body: "swim", item_id: 99 })
      .expect(201);
  });
  test("POST 400 - bad request", () => {
    return request(app)
      .post("/api/monthlys")
      .send({ blabla: "blabla", item_id: 77 })
      .expect(400);
  });
});

describe("12. DELETE /api/dailys/:todo_id", () => {
  test("should delete the given daily todo by todo_id and respond with 204 and no content", () => {
    return request(app).delete("/api/dailys/1").expect(204);
  });
});

describe("12. DELETE /api/weeklys/:todo_id", () => {
  test("should delete the given weekly todo by todo_id and respond with 204 and no content", () => {
    return request(app).delete("/api/weeklys/1").expect(204);
  });
});

describe("12. DELETE /api/monthlys/:todo_id", () => {
  test("should delete the given monthly todo by todo_id and respond with 204 and no content", () => {
    return request(app).delete("/api/monthlys/1").expect(204);
  });
});

//-----------------------------------------------------------------------

describe("GET users", () => {
  test("GET 200 - respond with all users", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then(({ body }) => {
        console.log("body:", body);
        expect(body.result.length).toBe(2);
        body.result.forEach((user) => {
          expect(user).toMatchObject({
            score: expect.any(Number),
            user_id: expect.any(Number),
            user_name: expect.any(String),
          });
        });
      });
  });
});

describe("POST item to users", () => {
  test("POST 201 - post new user to users", () => {
    return request(app)
      .post("/api/users")
      .send({ body: "greg", item_id: 99 })
      .expect(201);
  });
});

describe("PATCH score of user", () => {
  test("should increment the users score by the amount provided", () => {
    return request(app)
      .patch("/api/users/1")
      .send({ inc_score: 1 })
      .expect(201);
  });
});

describe("12. DELETE /api/users/:user_id", () => {
  test("should delete the given user by user_id and respond with 204 and no content", () => {
    return request(app).delete("/api/users/1").expect(204);
  });
});

//-------------------------------------------------------------------------

describe("GET all_recipes", () => {
  test("GET 200 - respond with all recipes", () => {
    return request(app)
      .get("/api/recipes")
      .expect(200)
      .then(({ body }) => {
        console.log("body:", body);
        expect(body.result.length).toBe(4);
        body.result.forEach((recipe) => {
          expect(recipe).toMatchObject({
            recipe_id: expect.any(Number),
            recipe_name: expect.any(String),
            recipe_pic: expect.any(String),
          });
        });
      });
  });
});

describe("POST recipe to all_recipes", () => {
  test("POST 201 - post new recipe to all_recipes", () => {
    return request(app)
      .post("/api/recipes")
      .send({ body: "cheese sarny", pic: "cheese" })
      .expect(201);
  });
});

describe("GET shopping_list", () => {
  test("GET 200 - respond with all ingredients in shopping list", () => {
    return request(app)
      .get("/api/shopping_list")
      .expect(200)
      .then(({ body }) => {
        console.log("body:", body);
        expect(body.result.length).toBe(4);
        body.result.forEach((list) => {
          expect(list).toMatchObject({
            ingredient: expect.any(String),
            measure: expect.any(String),
          });
        });
      });
  });
});

describe("POST ingredients to shopping_list", () => {
  test("POST 201 - post new ingredients to shopping_list", () => {
    return request(app)
      .post("/api/shopping_list")
      .send({ body: ["cheese", "bread", "butter"] })
      .expect(201);
  });
});

//--------------------------------------------------------------------

describe("ERROR 404 - end point not found", () => {
  test("if the end point is not found a message saying link not found is returned", () => {
    return request(app)
      .get("/sfjkbwkjdbwkjf")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toEqual("link not found");
      });
  });
});

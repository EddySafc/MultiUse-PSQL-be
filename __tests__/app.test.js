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
  test("POST 201 - post new todo to all_dailys", () => {
    return request(app)
      .post("/api/dailys")
      .send({ body: "walk", item_id: 99 })
      .expect(201)
      .then(({ body }) => {
        expect(body.result).toMatchObject({
          todo_id: 99,
          todo_name: "walk",
        });
      });
  });
  test("POST 400 - bad request, wrong body name", () => {
    return request(app)
      .post("/api/dailys")
      .send({ boddy: "blabla", item_id: 77 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("POST 400 - bad request, wrong item id name", () => {
    return request(app)
      .post("/api/dailys")
      .send({ body: "blabla", id_of_item: 77 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("POST 400 - Missing item_id", () => {
    return request(app)
      .post("/api/dailys")
      .send({ body: "blabla" })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("POST 400 - Missing body", () => {
    return request(app)
      .post("/api/dailys")
      .send({ item_id: 45 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
});

describe("POST item to weeklys", () => {
  test("POST 201 - post new todo to weeklys", () => {
    return request(app)
      .post("/api/weeklys")
      .send({ body: "run 10km", item_id: 99 })
      .expect(201)
      .then(({ body }) => {
        expect(body.result).toMatchObject({
          todo_id: 99,
          todo_name: "run 10km",
        });
      });
  });
  test("POST 400 - bad request, wrong body name", () => {
    return request(app)
      .post("/api/weeklys")
      .send({ boddy: "blabla", item_id: 77 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("POST 400 - bad request, wrong item id name", () => {
    return request(app)
      .post("/api/weeklys")
      .send({ body: "blabla", id_of_item: 77 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("POST 400 - Missing item_id", () => {
    return request(app)
      .post("/api/weeklys")
      .send({ body: "blabla" })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("POST 400 - Missing body", () => {
    return request(app)
      .post("/api/weeklys")
      .send({ item_id: 45 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
});

describe("POST item to monthlys", () => {
  test("POST 201 - post new todo to monthlys", () => {
    return request(app)
      .post("/api/monthlys")
      .send({ body: "swim", item_id: 99 })
      .expect(201)
      .then(({ body }) => {
        expect(body.result).toMatchObject({
          todo_id: 99,
          todo_name: "swim",
        });
      });
  });
  test("POST 400 - bad request, wrong body name", () => {
    return request(app)
      .post("/api/monthlys")
      .send({ boddy: "blabla", item_id: 77 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("POST 400 - bad request, wrong item id name", () => {
    return request(app)
      .post("/api/monthlys")
      .send({ body: "blabla", id_of_item: 77 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("POST 400 - Missing item_id", () => {
    return request(app)
      .post("/api/monthlys")
      .send({ body: "blabla" })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("POST 400 - Missing body", () => {
    return request(app)
      .post("/api/monthlys")
      .send({ item_id: 45 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
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
      .send({ body: "greg" })
      .expect(201)
      .then(({ body }) => {
        expect(body.result).toMatchObject({
          user_id: 3,
          user_name: "greg",
          score: 0,
        });
      });
  });
  test("POST 400 - bad request, wrong body name", () => {
    return request(app)
      .post("/api/users")
      .send({ boddy: "jog" })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
});

describe("PATCH score of user", () => {
  test("PATCH 201 - should increment the users score by the amount provided", () => {
    return request(app)
      .patch("/api/users/1")
      .send({ inc_score: 1 })
      .expect(201);
  });
  test("PATCH 400 - inc_score is spelt wrong", () => {
    return request(app)
      .patch("/api/users/1")
      .send({ ink_score: 1 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("PATCH 400 - user id is invalid", () => {
    return request(app)
      .patch("/api/users/one")
      .send({ inc_score: 1 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("PATCH 404 - user id not found", () => {
    return request(app)
      .patch("/api/users/513")
      .send({ inc_score: 1 })
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("id not found");
      });
  });
  test("PATCH 400 - missing fields", () => {
    return request(app)
      .patch("/api/users/1")
      .send({})
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("PATCH 400 - incorrect data type value", () => {
    return request(app)
      .patch("/api/users/1")
      .send({ inc_score: "one" })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
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
      .expect(201)
      .then(({ body }) => {
        expect(body.result).toMatchObject({
          recipe_id: 5,
          recipe_name: "cheese sarny",
          recipe_pic: null,
        });
      });
  });
  test("POST 400 - bad request, wrong body", () => {
    return request(app)
      .post("/api/recipes")
      .send({ boddy: "blabla", pic: "cheese" })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
  test("POST 400 - bad request, wrong pic name", () => {
    return request(app)
      .post("/api/recipes")
      .send({ body: "blabla", picture: "cheese" })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("bad request");
      });
  });
});

//--------------------------------------------------------------------

describe("ERROR 404 - end point not found", () => {
  test("if the end point is not found a message saying link not found is returned", () => {
    return request(app)
      .get("/api/sfjkbwkjdbwkjf")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toEqual("link not found");
      });
  });
});

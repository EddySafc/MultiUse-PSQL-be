const app = require("../app");
const request = require("supertest");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");

const {
  dailyData,
  weeklyData,
  monthlyData,
  userData,
} = require("../db/data/test-data/index");
beforeEach(() => seed({ dailyData, weeklyData, monthlyData, userData }));
afterAll(() => {
  return db.end();
});

describe("GET dailys", () => {
  test("GET 200 - respond with all daily todos", () => {
    return request(app).get("/api/dailys").expect(200);
  });
});

describe("POST item to dailys", () => {
  test("POST 201 - post new recipe to all_dailys", () => {
    return request(app)
      .post("/api/dailys")
      .send({ body: "walk", item_id: 99 })
      .expect(201);
  });
});

describe("GET weeklys", () => {
  test("GET 200 - respond with all weekly todos", () => {
    return request(app).get("/api/weeklys").expect(200);
  });
});

describe("POST item to weeklys", () => {
  test("POST 201 - post new recipe to weeklys", () => {
    return request(app)
      .post("/api/weeklys")
      .send({ body: "run 10km", item_id: 99 })
      .expect(201);
  });
});

describe("GET monthlys", () => {
  test("GET 200 - respond with all monthly todos", () => {
    return request(app).get("/api/monthlys").expect(200);
  });
});

describe("POST item to monthlys", () => {
  test("POST 201 - post new recipe to monthlys", () => {
    return request(app)
      .post("/api/monthlys")
      .send({ body: "swim", item_id: 99 })
      .expect(201);
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
    return request(app).get("/api/users").expect(200);
  });
});

// describe("GET user by Id", () => {
//   test("GET 200 - respond with a user by a given Id", () => {
//     return request(app).get("/api/users/1").expect(200);
//   });
// });

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

const express = require("express");
const cors = require("cors");
const app = express();

const {
  getDailys,
  postDaily,
  postWeekly,
  getWeeklys,
  getMonthlys,
  postMonthly,
  deleteDailyById,
  deleteWeeklyById,
  deleteMonthlyById,
  getUsers,
  postUsers,
  deleteUserById,
  patchUsers,
  getRecipes,
  postRecipe,
  postIngredients,
  getIngredients,
} = require("./controller");

app.use(cors());
app.use(express.json());

//-------------ToDoList Project--------------------------

app.get("/api/dailys", getDailys);
app.get("/api/weeklys", getWeeklys);
app.get("/api/monthlys", getMonthlys);

app.post("/api/dailys", postDaily);
app.post("/api/weeklys", postWeekly);
app.post("/api/monthlys", postMonthly);

app.delete("/api/dailys/:todo_id", deleteDailyById);
app.delete("/api/weeklys/:todo_id", deleteWeeklyById);
app.delete("/api/monthlys/:todo_id", deleteMonthlyById);

//---------------User LogIn Game Project------------------------------------

app.get("/api/users", getUsers);
app.post("/api/users", postUsers);
app.patch("/api/users/:user_id", patchUsers);
app.delete("/api/users/:user_id", deleteUserById);

//--------------Recipe Project--------------------------------

app.post("/api/recipes", postRecipe);
app.get("/api/recipes", getRecipes);
app.post("/api/shopping_list", postIngredients);
app.get("/api/shopping_list", getIngredients);

//------------Error Handling--------------------------

app.get("/*", (req, res) => {
  res.status(404).send({ msg: "link not found" });
});

app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  }
  // if (err.code === "23503") {
  //   if (err.constraint === "comments_author_fkey") {
  //     res.status(404).send({ msg: "username not found" });
  //   }
  //   if (err.constraint === "comments_review_id_fkey") {
  //     res.status(404).send({ msg: "id not found" });
  //   }
  // }
  // if (err.code === "22P02" || err.code === "23502") {
  //   res.status(400).send({ msg: "bad request" });
  // }
  // if (err.code === "42703") {
  //   res.status(404).send({ msg: "category does not exist" });
  // }
  // if (err.code === "42601") {
  //   res.status(400).send({ msg: "order invalid" });
  // }
});

module.exports = app;

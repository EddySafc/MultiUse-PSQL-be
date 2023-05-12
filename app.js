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
} = require("./controller");
const { getEndpointsDescription } = require("./endpoints");

app.use(cors());
app.use(express.json());

app.get("/api", getEndpointsDescription);

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

//---------------User LogIn Game Project---------------------

app.get("/api/users", getUsers);
app.post("/api/users", postUsers);
app.patch("/api/users/:user_id", patchUsers);
app.delete("/api/users/:user_id", deleteUserById);

//--------------Recipe Project--------------------------------

app.post("/api/recipes", postRecipe);
app.get("/api/recipes", getRecipes);

//------------Error Handling--------------------------

app.get("/*", (req, res) => {
  res.status(404).send({ msg: "link not found" });
});

app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  }
  if (err.code === "22P02" || err.code === "23502") {
    res.status(400).send({ msg: "bad request" });
  }
});

module.exports = app;

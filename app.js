const express = require("express");
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
} = require("./controller");

const app = express();
app.use(express.json());

app.get("/api/dailys", getDailys);
app.get("/api/weeklys", getWeeklys);
app.get("/api/monthlys", getMonthlys);

app.post("/api/dailys", postDaily);
app.post("/api/weeklys", postWeekly);
app.post("/api/monthlys", postMonthly);

app.delete("/api/dailys/:todo_id", deleteDailyById);
app.delete("/api/weeklys/:todo_id", deleteWeeklyById);
app.delete("/api/monthlys/:todo_id", deleteMonthlyById);

module.exports = app;

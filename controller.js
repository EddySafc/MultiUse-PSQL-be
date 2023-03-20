const {
  selectDailys,
  provideDailys,
  selectWeeklys,
  provideWeeklys,
  selectMonthlys,
  provideMonthlys,
  removeDailyToDoById,
  removeWeeklyToDoById,
  removeMonthlyToDoById,
} = require("./model");

exports.getDailys = (req, res) => {
  selectDailys().then((result) => {
    console.log("get dailys:", result);
    res.send({ result });
  });
};

exports.getWeeklys = (req, res) => {
  selectWeeklys().then((result) => {
    console.log("get weeklys:", result);
    res.send({ result });
  });
};

exports.getMonthlys = (req, res) => {
  selectMonthlys().then((result) => {
    console.log("get monthlys:", result);
    res.send({ result });
  });
};

exports.postDaily = (req, res) => {
  const newItem = req.body;
  provideDailys(newItem).then((result) => {
    console.log("post daily:", result);
    res.status(201).send({ result });
  });
};

exports.postWeekly = (req, res) => {
  const newItem = req.body;
  provideWeeklys(newItem).then((result) => {
    console.log("post weekly:", result);
    res.status(201).send({ result });
  });
};

exports.postMonthly = (req, res) => {
  const newItem = req.body;
  provideMonthlys(newItem).then((result) => {
    console.log("post monthly:", result);
    res.status(201).send({ result });
  });
};

exports.deleteDailyById = (req, res) => {
  const { todo_id } = req.params;
  removeDailyToDoById(todo_id).then((result) => {
    console.log(result);
    res.status(204).send(result);
  });
};

exports.deleteWeeklyById = (req, res) => {
  const { todo_id } = req.params;
  removeWeeklyToDoById(todo_id).then((result) => {
    console.log(result);
    res.status(204).send(result);
  });
};

exports.deleteMonthlyById = (req, res) => {
  const { todo_id } = req.params;
  removeMonthlyToDoById(todo_id).then((result) => {
    console.log(result);
    res.status(204).send(result);
  });
};

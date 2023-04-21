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
  selectUsers,
  provideUsers,
  removeUserById,
  selectUserById,
  changeUsers,
  updateUsers,
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

//--------------------------------------------------------

exports.getUsers = (req, res) => {
  selectUsers().then((result) => {
    console.log("get users:", result);
    res.send({ result });
  });
};

// exports.getUserById = (req, res) => {
//   const { user_id } = req.params;
//   console.log(user_id);
//   selectUserById(user_id).then((result) => {
//     console.log(result);
//     res.send({ result });
//   });
// };

exports.postUsers = (req, res) => {
  const newItem = req.body;
  provideUsers(newItem).then((result) => {
    console.log("post user:", result);
    res.status(201).send({ result });
  });
};

exports.patchUsers = (req, res) => {
  const { user_id } = req.params;
  const { inc_score } = req.body;
  updateUsers(user_id, inc_score).then((result) => {
    console.log("controller result:", result);
    res.status(201).send(result);
  });
};

exports.patchReviewVotes = (req, res, next) => {
  const { review_id } = req.params;
  const { inc_votes } = req.body;
  updateReviewVotes(review_id, inc_votes)
    .then((result) => {
      res.status(201).send({ review: result[0] });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteUserById = (req, res) => {
  const { user_id } = req.params;
  removeUserById(user_id).then((result) => {
    console.log(result);
    res.status(204).send(result);
  });
};

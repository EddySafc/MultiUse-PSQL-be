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
  updateUsers,
  selectRecipes,
  provideRecipe,
  fetchEndPointsDescription,
} = require("./model");

exports.getEndpointsDescription = (req, res, next) => {
  fetchEndPointsDescription()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getDailys = (req, res, next) => {
  selectDailys()
    .then((result) => {
      console.log("get dailys:", result);
      res.send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getWeeklys = (req, res, next) => {
  selectWeeklys()
    .then((result) => {
      console.log("get weeklys:", result);
      res.send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getMonthlys = (req, res, next) => {
  selectMonthlys()
    .then((result) => {
      console.log("get monthlys:", result);
      res.send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postDaily = (req, res, next) => {
  const newItem = req.body;
  provideDailys(newItem)
    .then((result) => {
      console.log("post daily:", result);
      res.status(201).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postWeekly = (req, res, next) => {
  const newItem = req.body;
  provideWeeklys(newItem)
    .then((result) => {
      console.log("post weekly:", result);
      res.status(201).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postMonthly = (req, res, next) => {
  const newItem = req.body;
  provideMonthlys(newItem)
    .then((result) => {
      console.log("post monthly:", result);
      res.status(201).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteDailyById = (req, res, next) => {
  const { todo_id } = req.params;
  removeDailyToDoById(todo_id)
    .then((result) => {
      console.log(result);
      res.status(204).send(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteWeeklyById = (req, res, next) => {
  const { todo_id } = req.params;
  removeWeeklyToDoById(todo_id)
    .then((result) => {
      console.log(result);
      res.status(204).send(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteMonthlyById = (req, res, next) => {
  const { todo_id } = req.params;
  removeMonthlyToDoById(todo_id)
    .then((result) => {
      console.log(result);
      res.status(204).send(result);
    })
    .catch((err) => {
      next(err);
    });
};

//--------------------------------------------------------

exports.getUsers = (req, res, next) => {
  selectUsers()
    .then((result) => {
      console.log("get users:", result);
      res.send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postUsers = (req, res, next) => {
  const newItem = req.body;
  provideUsers(newItem)
    .then((result) => {
      console.log("post user:", result);
      res.status(201).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchUsers = (req, res, next) => {
  const { user_id } = req.params;
  const { inc_score } = req.body;
  updateUsers(user_id, inc_score)
    .then((result) => {
      console.log("controller result:", result);
      res.status(201).send(result);
    })
    .catch((err) => {
      next(err);
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

exports.deleteUserById = (req, res, next) => {
  const { user_id } = req.params;
  removeUserById(user_id)
    .then((result) => {
      console.log(result);
      res.status(204).send(result);
    })
    .catch((err) => {
      next(err);
    });
};

//-------------------------------------------------------------------

exports.getRecipes = (req, res, next) => {
  selectRecipes()
    .then((result) => {
      res.send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postRecipe = (req, res, next) => {
  const newRecipe = req.body;
  provideRecipe(newRecipe)
    .then((result) => {
      res.status(201).send({ result });
    })
    .catch((err) => {
      next(err);
    });
};

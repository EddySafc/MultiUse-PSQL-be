const db = require("./db/connection");

exports.selectDailys = () => {
  return db.query("SELECT * FROM dailys;").then((result) => {
    return result.rows;
  });
};

exports.selectWeeklys = () => {
  return db.query("SELECT * FROM weeklys;").then((result) => {
    return result.rows;
  });
};

exports.selectMonthlys = () => {
  return db.query("SELECT * FROM monthlys;").then((result) => {
    return result.rows;
  });
};

exports.provideDailys = (newItem) => {
  if (newItem.hasOwnProperty("body") === false) {
    return Promise.reject({ status: 400, msg: "bad request" });
  }
  return db
    .query(
      `INSERT INTO dailys
  (todo_name, todo_id)
  VALUES
  ($1,$2) RETURNING*`,
      [newItem.body, newItem.item_id]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

exports.provideWeeklys = (newItem) => {
  if (newItem.hasOwnProperty("body") === false) {
    return Promise.reject({ status: 400, msg: "bad request" });
  }
  return db
    .query(
      `INSERT INTO weeklys
  (todo_name, todo_id)
  VALUES
  ($1,$2) RETURNING*`,
      [newItem.body, newItem.item_id]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

exports.provideMonthlys = (newItem) => {
  if (newItem.hasOwnProperty("body") === false) {
    return Promise.reject({ status: 400, msg: "bad request" });
  }
  return db
    .query(
      `INSERT INTO monthlys
  (todo_name, todo_id)
  VALUES
  ($1,$2) RETURNING*`,
      [newItem.body, newItem.item_id]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

exports.removeDailyToDoById = (todo_id) => {
  return db
    .query(
      `DELETE FROM dailys
    WHERE todo_id = $1
    RETURNING*;`,
      [todo_id]
    )
    .then((result) => {
      return result.rows[0];
    });
};

exports.removeWeeklyToDoById = (todo_id) => {
  return db
    .query(
      `DELETE FROM weeklys
    WHERE todo_id = $1
    RETURNING*;`,
      [todo_id]
    )
    .then((result) => {
      return result.rows[0];
    });
};

exports.removeMonthlyToDoById = (todo_id) => {
  return db
    .query(
      `DELETE FROM monthlys
    WHERE todo_id = $1
    RETURNING*;`,
      [todo_id]
    )
    .then((result) => {
      return result.rows[0];
    });
};

//-------------------------------------------------------------------

exports.selectUsers = () => {
  return db.query("SELECT * FROM users ORDER BY score DESC;").then((result) => {
    return result.rows;
  });
};

// exports.selectUserById = (id) => {
//   console.log(id);
//   return db
//     .query(
//       `SELECT * FROM users
//      WHERE user_id = $1;`,
//       [id]
//     )
//     .then((result) => {
//       console.log(result.rows);
//       return result.rows;
//     });
// };

exports.provideUsers = (newItem) => {
  return db
    .query(
      `INSERT INTO users
  (user_name, score)
  VALUES
  ($1, $2) RETURNING*`,
      [newItem.body, 0]
    )
    .then((result) => {
      return result.rows[0];
    });
};

exports.updateUsers = (user_id, inc_score) => {
  console.log("user_id:", user_id, "inc_score:", inc_score);
  return db
    .query(
      `UPDATE users
    SET score = score + $1
    WHERE user_id = $2
    RETURNING*;`,
      [inc_score, user_id]
    )
    .then((result) => {
      if (!result.rows[0]) {
        return Promise.reject({ status: 404, msg: "id not found" });
      }
      return result.rows[0];
    });
};

exports.updateReviewVotes = (review_id, inc_votes) => {
  return db
    .query(
      `UPDATE reviews
    SET votes = votes + $1
    WHERE review_id = $2
    RETURNING*;`,
      [inc_votes, review_id]
    )
    .then((result) => {
      if (!result.rows[0]) {
        return Promise.reject({ status: 404, msg: "id not found" });
      }
      return result.rows;
    });
};

exports.removeUserById = (user_id) => {
  return db
    .query(
      `DELETE FROM users
    WHERE user_id = $1
    RETURNING*;`,
      [user_id]
    )
    .then((result) => {
      return result.rows[0];
    });
};

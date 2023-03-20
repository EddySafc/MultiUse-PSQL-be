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
    });
};

exports.provideWeeklys = (newItem) => {
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
    });
};

exports.provideMonthlys = (newItem) => {
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

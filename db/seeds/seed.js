const db = require("../connection");
const format = require("pg-format");

const seed = async (data) => {
  console.log(data);
  const dailyData = data.dailyData;
  const weeklyData = data.weeklyData;
  const monthlyData = data.monthlyData;
  const userData = data.userData;

  await db.query(`DROP TABLE IF EXISTS dailys;`);
  await db.query(`DROP TABLE IF EXISTS weeklys;`);
  await db.query(`DROP TABLE IF EXISTS monthlys;`);

  await db.query(`CREATE TABLE dailys (
    todo_id SERIAL,
    todo_name TEXT
  );`);

  await db.query(`CREATE TABLE weeklys (
    todo_id SERIAL,
    todo_name TEXT
  );`);

  await db.query(`CREATE TABLE monthlys (
    todo_id SERIAL,
    todo_name TEXT
  );`);

  // const insertDailyQueryStr = format(
  //   `INSERT INTO dailys
  //   (todo_name)
  // VALUES %L RETURNING *;`,
  //   dailyData.map(({ body }) => [body])
  // );

  // await db.query(insertDailyQueryStr).then((result) => result.rows);

  // const insertWeeklyQueryStr = format(
  //   `INSERT INTO weeklys
  //   (todo_name)
  // VALUES %L RETURNING *;`,
  //   weeklyData.map(({ body }) => [body])
  // );

  // await db.query(insertWeeklyQueryStr).then((result) => result.rows);

  // const insertmonthlyQueryStr = format(
  //   `INSERT INTO monthlys
  //   (todo_name)
  // VALUES %L RETURNING *;`,
  //   monthlyData.map(({ body }) => [body])
  // );

  // await db.query(insertmonthlyQueryStr).then((result) => result.rows);

  //-------------------------------------------------

  await db.query(`DROP TABLE IF EXISTS users;`);

  await db.query(`CREATE TABLE users (
   user_id SERIAL,
   user_name TEXT,
   score INT
    );`);

  // const insertuserQueryStr = format(
  //   `INSERT INTO users
  //   (user_name, score)
  // VALUES %L RETURNING *;`,
  //   userData.map(({ user_name, score }) => [user_name, score])
  // );

  // await db.query(insertuserQueryStr).then((result) => result.rows);
};

module.exports = seed;

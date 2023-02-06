const db = require("../connection");
const format = require("pg-format");

const seed = async (data) => {
  const { recipeData } = data;

  await db.query(`DROP TABLE IF EXISTS all_recipes;`);

  await db.query(`CREATE TABLE all_recipes (
    recipe_id SERIAL PRIMARY KEY,
    recipe_name VARCHAR
  );`);

  const insertRecipeQueryStr = format(
    `INSERT INTO all_recipes
    (recipe_name)
  VALUES %L RETURNING *;`,
    recipeData.map(({ body }) => [body])
  );

  await db.query(insertRecipeQueryStr).then((result) => result.rows);
};

module.exports = seed;

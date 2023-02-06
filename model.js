const db = require("./db/connection");

exports.selectRecipes = () => {
  return db.query("SELECT * FROM all_recipes;").then((result) => {
    return result.rows;
  });
};

exports.provideRecipe = (newRecipe) => {
  return db
    .query(
      `INSERT INTO all_recipes 
  (recipe_name) 
  VALUES
  ($1) RETURNING*`,
      [newRecipe.body]
    )
    .then((result) => {
      return result.rows[0];
    });
};

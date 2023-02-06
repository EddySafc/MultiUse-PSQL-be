const { selectRecipes, provideRecipe } = require("./model");

exports.getRecipes = (req, res) => {
  selectRecipes().then((result) => {
    console.log("get:", result);
    res.send({ result });
  });
};

exports.postRecipe = (req, res) => {
  const newRecipe = req.body;
  provideRecipe(newRecipe).then((result) => {
    console.log("post:", result);
    res.status(201).send({ result });
  });
};

const express = require("express");
const { getRecipes, postRecipe } = require("./controller");

const app = express();
app.use(express.json());

app.post("/api/recipes", postRecipe);

app.get("/api/recipes", getRecipes);

module.exports = app;

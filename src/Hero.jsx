import { useState, useRef } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipesByIngredients, getRecipeInformation } from "./api/recipeApi";

function Hero() {
  const [ingredients, setIngredients] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [recipes, setRecipes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") return;
    setIngredients([...ingredients, value]);
    setValue("");
    inputRef.current.focus();
  }

  async function handleGetRecipe() {
    if (ingredients.length < 4) {
      alert("Please enter at least 4 ingredients!");
      return;
    }

    // Step 1: get recipes list
    const data = await getRecipesByIngredients(ingredients);

    // Step 2: fetch details for each recipe
    const detailedRecipes = await Promise.all(
      data.map((r) => getRecipeInformation(r.id))
    );

    setRecipes(detailedRecipes);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="e.g. oregano"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn">Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          onGetRecipe={handleGetRecipe}
        />
      )}

      {recipes.length > 0 && <ClaudeRecipe recipes={recipes} />}
    </div>
  );
}

export default Hero;

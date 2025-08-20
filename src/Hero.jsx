import { useState, useRef } from "react";
import "./Hero.css";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

function Hero() {
  const [ingredients, setIngredients] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [recipeShown, setRecipeShown] = useState(false)


  
  function toggleRecipeShown() {
    setRecipeShown(prev => !prev);
  }
  

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") return;
    setIngredients([...ingredients, value]);
    setValue("");
    inputRef.current.focus();
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

      {ingredients.length > 0 && <IngredientsList
        ingredients={ingredients}
        toggleRecipeShown={toggleRecipeShown}
      />}
      {recipeShown && <ClaudeRecipe />}
    </div>
  );
}

export default Hero;

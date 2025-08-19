import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [ingredients, setIngredients] = useState([]);
  const [value, setValue] = useState("");

  const ingredientsListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));


  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") return;
    setIngredients([...ingredients, value]);
    setValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn">Add Ingredient</button>
      </form>
      <section>
        <h2 className="hading">Ingredients on Hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
    </div>
  );
}

export default Hero;

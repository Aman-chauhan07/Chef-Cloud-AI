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
      <ul>{ingredientsListItems}</ul>
    </div>
  );
}

export default Hero;

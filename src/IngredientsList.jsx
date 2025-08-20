function IngredientsList({ ingredients, onGetRecipe }) {
  const items = ingredients.map((ing, i) => <li key={i}>{ing}</li>);

  return (
    <section>
      <h2 className="hading">Ingredients on Hand :</h2>
      <ul className="ingredients-list" aria-live="polite">{items}</ul>

      {ingredients.length >= 4 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={onGetRecipe} className="get-btn">Get a recipe</button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;

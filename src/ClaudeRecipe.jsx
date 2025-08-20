function ClaudeRecipe({ recipes }) {
  return (
    <section>
      <h2>Possible Dishes:</h2>
      <div className="suggested-recipe-container">
        {recipes.map((recipe) => (
          <article key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} width="200" />
            
            <div>
              <h4>Instructions:</h4>
              {recipe.instructions ? (
                <div
                  dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                />
              ) : (
                <p>No instructions available.</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ClaudeRecipe
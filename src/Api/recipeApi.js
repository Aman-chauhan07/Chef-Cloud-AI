const API_KEY = "0a94e38cb3ee4c0e93292e5";
const BASE_URL = "https://api.spoonacular.com/recipes";

// Step 1: Get recipe list by ingredients
export async function getRecipesByIngredients(ingredients) {
  const query = ingredients.join(",");
  const res = await fetch(
    `${BASE_URL}/findByIngredients?ingredients=${query}&number=5&apiKey=${API_KEY}`
  );
  if (!res.ok) throw new Error("API request failed");
  return await res.json();
}

// Step 2: Get full details of one recipe
export async function getRecipeInformation(id) {
  const res = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
  if (!res.ok) throw new Error("API request failed");
  return await res.json();
}

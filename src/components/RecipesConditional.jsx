import recipesArray from "../data/recipes.json";

const RecipesConditional = () => {

  return (
    <>
      <h2>Recipes Conditional</h2>

      {recipesArray.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h4>{recipe.name}</h4>
            {recipe.calories > 200 ? <p>🍔</p> : <p>🥬</p>}
          </div>
        );
      })}
    </>
  );
};

export default RecipesConditional;

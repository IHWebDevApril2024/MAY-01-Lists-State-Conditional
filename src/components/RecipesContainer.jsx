import recipesData from "../data/recipes.json";

const RecipesContainer = () => {
//   console.log(recipesData);
  const only10recipes = recipesData.slice(0, 10);

  return (
    <>
      <h2>Recipes</h2>
      <div className="recipes-container">
        {only10recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="recipe-container">
              <h3>{recipe.name}</h3>
              {/* <img src={recipe.image} alt={recipe.name} /> */}
              <p>The images are censored because we are hungry</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipesContainer;

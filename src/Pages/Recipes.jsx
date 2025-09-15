import { useContext } from "react";
import { recipecontext } from "../Context/Recipescontext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext); 
  const categories = [...new Set(data.map((r) => r.category))];

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col h-[65vh] items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-red-700">No Recipes Found!</h2>
        <p className="text-gray-500 mt-2">
          Looks like you haven't added any recipes yet.<br />
          Start by creating your first recipe!
        </p>
      </div>
    );
  }

  return (
    <div className="px-2">
      {categories.map((cat) => (
        <div key={cat} className="mb-6">
          <h2 className="text-xl font-bold mb-2">{cat}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data
              .filter((recipe) => recipe.category === cat)
              .map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;

import { useContext, useEffect } from "react";
import { recipecontext } from "../Context/Recipescontext";

const PopularRecipes = ({ recipe }) => {
  const { data } = useContext(recipecontext);

  // const popularRecipes = data.filter((r) => r.category === "breakfast");

  // Temporary dummy recipes data
  const recipes = [
    {
      id: 1,
      title: "Classic Margherita Pizza",
      img: "https://ik.imagekit.io/gauravkumar007/recipe-image/rava-laddu-recipe.webp?updatedAt=1755248217601",
      des: "Fresh tomatoes, mozzarella & basil.",
    },
    {
      id: 2,
      title: "Creamy Mushroom Pasta",
      img: "https://ik.imagekit.io/gauravkumar007/recipe-image/rava-laddu-recipe.webp?updatedAt=1755248217601",
      des: "Rich & creamy Italian pasta.",
    },
    {
      id: 3,
      title: "Avocado Toast Special",
      img: "https://ik.imagekit.io/gauravkumar007/recipe-image/rava-laddu-recipe.webp?updatedAt=1755248217601",
      des: "Healthy breakfast with a twist.",
    },
    {
      id: 4,
      title: "Rava Laddu",
      img: "https://ik.imagekit.io/gauravkumar007/recipe-image/rava-laddu-recipe.webp?updatedAt=1755248217601",
      des: "Sweet semolina balls with nuts.",
    },
  ];

  return (
    <div>
      {/* Recipes Grid */}
      <section className="py-12 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Popular Recipes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-900/50"
            >
              <img
                src={recipe.img}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-[1.50rem] font-semibold text-gray-700">
                  {recipe.title}
                </h3>
                <p className="text-gray-600">{recipe.des}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

//  <div className="px-2">
//       <h2 className="text-xl font-bold mb-2">Popular Recipes</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {popularRecipes.length > 0 ? (
//           popularRecipes.map((recipe) => (
//             <RecipeCard key={recipe.id} recipe={recipe} />
//           ))
//         ) : (
//           <p>No popular recipes yet.</p>
//         )}
//       </div>
//     </div>

export default PopularRecipes;

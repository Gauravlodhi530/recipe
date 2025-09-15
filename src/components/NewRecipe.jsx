import React from "react";

// Sample Data for demonstration
const recipes = [
  {
    id: 1,
    title: "Gucchi Mushroom Recipe (Morel Mushroom Rice)",
    image: "https://ik.imagekit.io/gauravkumar007/recipe-image/bhel-puri-recipe-1.webp?updatedAt=1755248214040",
  },
  {
    id: 2,
    title: "Allam Pachadi (Ginger Chutney)",
    image: "https://ik.imagekit.io/gauravkumar007/recipe-image/bhel-puri-recipe-1.webp?updatedAt=1755248214040",
  },
  {
    id: 3,
    title: "Chole Bhature | Chana Bhatura",
    image: "https://ik.imagekit.io/gauravkumar007/recipe-image/bhel-puri-recipe-1.webp?updatedAt=1755248214040",
  },
  {
    id: 4,
    title: "Ragda Patties Recipe (Mumbai Style Ragda Pattice)",
    image: "https://ik.imagekit.io/gauravkumar007/recipe-image/bhel-puri-recipe-1.webp?updatedAt=1755248214040",
  },
];

const NewRecipes = ({ data = recipes }) => {
  return (
    <section className="py-12 px-4 md:px-12 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
        NEW RECIPES
      </h2>
      <p className="text-gray-700 mb-10 max-w-5xl text-2xl">
        Explore newly added, retested, or improved recipes from my collection of
        vegetarian food. These recipes reflect both traditional techniques and
        modern twists on vegetarian cuisine, with a focus on home-cooked meals
        that are approachable, flavorful, and family-friendly.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((recipe) => (
          <div
            key={recipe.id}
            className="flex flex-col items-center bg-gray-50 rounded-lg shadow hover:shadow-md transition p-3"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="text-center font-medium text-black text-md">
              {recipe.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewRecipes;

import React from "react";

// Sample recipes data
const breakfastRecipes = [
  {
    id: 1,
    title: "Masala Dosa Recipe",
    image: "https://ik.imagekit.io/gauravkumar007/recipe-image/samosa-3.webp?updatedAt=1755248214227",
  },
  {
    id: 2,
    title: "32 Oats Recipes",
    image: "https://ik.imagekit.io/gauravkumar007/recipe-image/samosa-3.webp?updatedAt=1755248214227",
  },
  {
    id: 3,
    title: "Rava Dosa Recipe",
    image: "https://ik.imagekit.io/gauravkumar007/recipe-image/samosa-3.webp?updatedAt=1755248214227",
  },
  {
    id: 4,
    title: "Medu Vada Recipe (Garelu)",
    image: "https://ik.imagekit.io/gauravkumar007/recipe-image/samosa-3.webp?updatedAt=1755248214227",
  },
];

const BreakfastRecipes = ({ data = breakfastRecipes }) => (
  <section className="py-12 px-4 md:px-12">
    <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">
      Breakfast Recipes
    </h2>
    <p className="text-gray-700 mb-10 max-w-6xl text-2xl">
       Explore comforting and wholesome Indian breakfast recipes, from poha and upma to parathas and idli. These traditional recipes are flavorful, satisfying, and often quick to make; perfect for busy mornings or relaxed weekend brunches.
      </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {data.map(recipe => (
        <div
          key={recipe.id}
          className="bg-white rounded shadow p-2 flex flex-col items-center"
        >
          <div className="w-full h-40 overflow-hidden rounded">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white px-2 py-2 mt-2 font-semibold text-center text-black">
            {recipe.title}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BreakfastRecipes;

import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, chef, image, title, des, cat } = recipe;

  return (
   
     <Link
      to={`/recipe/detail/${id}`}
      className="w-full bg-gray-200 sm:w-[300px]  rounded-lg shadow-md hover:shadow-xl hover:translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Image with Hover Zoom */}
      <div className="relative overflow-hidden h-48 ">
        <img
          className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-500"
          src={image}
          alt={title}
        />
        {/* Category/Badge (optional) */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
          {recipe.cat}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h1 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
          {title}
        </h1>
        <small className="text-lg text-red-500 font-medium">{chef}</small>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {des.length > 90 ? des.slice(0, 90) + "..." : des}
        </p>

        {/* Read More Link */}
        <div className="mt-3">
          <span className="text-blue-500 text-sm font-semibold hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/Recipescontext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();

  useEffect(() => {
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      setdata(JSON.parse(savedRecipes));
    }
  }, [setdata]);

  const recipe = data.find((r) => String(r.id) === String(params.id));

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      chef: recipe?.chef,
      des: recipe?.des,
      ing: recipe?.ing,
      ins: recipe?.ins,
      cat: recipe?.cat,
    },
  });

  const UpdateHandler = (updatedRecipe) => {
    const Index = data.findIndex((r) => String(r.id) === String(params.id));
    const copydata = [...data];
    copydata[Index] = { ...copydata[Index], ...updatedRecipe };
    setdata(copydata);
    toast.success("Recipe updated successfully!");
    localStorage.setItem("recipes", JSON.stringify(copydata));
    navigate("/recipes");
  };

  const DeleteHandler = () => {
    const filteredData = data.filter(
      (recipe) => String(recipe.id) !== String(params.id)
    );
    setdata(filteredData);
    toast.success("Recipe deleted successfully!");
    localStorage.setItem("recipes", JSON.stringify(filteredData));
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-full max-w-7xl mx-auto my-10 grid md:grid-cols-2 gap-8 p-6  shadow-xl rounded-2xl">
      {/* Left section - Recipe Preview */}
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          {recipe?.title}
        </h1>
        <p className="mt-2 text-gray-500 text-sm">Chef: <span className="text-red-500 font-medium">{recipe?.chef}</span></p>
        <img
          className="w-full h-80 object-cover rounded-xl shadow-md mt-5 transition-transform"
          src={recipe.image}
          alt={recipe?.title}
        />
        <h4 className="text-gray-900 mt-4 text-2xl">Description</h4>
        <p className=" text-gray-600 leading-relaxed">{recipe?.des}</p>
        <h4 className="text-gray-900 mt-4 text-2xl">Ingredients</h4>
        <p className=" text-gray-600 leading-relaxed">{recipe?.ing}</p>
        <h4 className="text-gray-900 mt-4 text-2xl">Instructions</h4>
        <p className=" text-gray-600 leading-relaxed">{recipe?.ins}</p>
      </div>

      {/* Right section - Edit Form */}
      <form
        className="bg-gray-200 text-gray-800 p-6 rounded-xl shadow-inner space-y-4"
        onSubmit={handleSubmit(UpdateHandler)}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Recipe</h2>

        {[
          { name: "image", placeholder: "Enter image URL", type: "url" },
          { name: "title", placeholder: "Recipe Title", type: "text" },
          { name: "chef", placeholder: "Chef Name", type: "text" },
        ].map((field) => (
          <div key={field.name}>
            <input
              {...register(field.name)}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
            />
          </div>
        ))}

        <textarea
          {...register("des")}
          placeholder="Enter description"
          rows="3"
          className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />

        <textarea
          {...register("ing")}
          placeholder="Ingredients (comma separated)"
          rows="2"
          className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />

        <textarea
          {...register("ins")}
          placeholder="Instructions (comma separated)"
          rows="3"
          className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />

        <select
          {...register("cat")}
          className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        >
          <option value="#">Select Category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            className="flex-1 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-lg shadow-lg transition"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={DeleteHandler}
            className="flex-1 px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium rounded-lg shadow-lg transition"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  ) : (
    <p className="text-center py-10 text-gray-500">Loading recipe...</p>
  );
};

export default SingleRecipe;

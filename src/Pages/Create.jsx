import { nanoid } from "nanoid/non-secure";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/Recipescontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();


    const copydata = [...data, recipe];
    setdata(copydata);
    localStorage.setItem("data", JSON.stringify(copydata));


    toast.success("Recipe added successfully!");
    reset();
    navigate("/recipes");
  };


  return (
    <div className="w-full max-w-2xl mx-auto my-12 p-8 rounded-xl shadow-2xl bg-gray-900 text-gray-100 border border-gray-700">
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
        Create New Recipe
      </h1>


      <form className="space-y-6" onSubmit={handleSubmit(SubmitHandler)}>
        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium mb-1">
            Image URL
          </label>
          <input
            {...register("image", { required: "Image URL is required" })}
            type="url"
            id="image"
            placeholder="Enter your image URL"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          {errors.image && <small className="text-red-400 mt-1">{errors.image.message}</small>}
        </div>


        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Recipe Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            id="title"
            placeholder="Recipe Title"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          {errors.title && <small className="text-red-400 mt-1">{errors.title.message}</small>}
        </div>


        {/* Chef */}
        <div>
          <label htmlFor="chef" className="block text-sm font-medium mb-1">
            Chef Name
          </label>
          <input
            {...register("chef", { required: "Chef name is required" })}
            type="text"
            id="chef"
            placeholder="Chef Name"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          {errors.chef && <small className="text-red-400 mt-1">{errors.chef.message}</small>}
        </div>


        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            {...register("des", { required: "Description is required" })}
            id="description"
            placeholder="Enter your description"
            rows="4"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          {errors.des && <small className="text-red-400 mt-1">{errors.des.message}</small>}
        </div>


        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium mb-1">
            Ingredients
          </label>
          <textarea
            {...register("ing", { required: "Ingredients are required" })}
            id="ingredients"
            placeholder="Write ingredients separated by commas"
            rows="3"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          {errors.ing && <small className="text-red-400 mt-1">{errors.ing.message}</small>}
        </div>


        {/* Instructions */}
        <div>
          <label htmlFor="instructions" className="block text-sm font-medium mb-1">
            Instructions
          </label>
          <textarea
            {...register("ins", { required: "Instructions are required" })}
            id="instructions"
            placeholder="Write instructions separated by commas"
            rows="4"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          {errors.ins && <small className="text-red-400 mt-1">{errors.ins.message}</small>}
        </div>


        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            Category
          </label>
          <select
            {...register("cat", { required: "Please select a category" })}
            id="category"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            <option value="">Select category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>
          {errors.cat && <small className="text-red-400 mt-1">{errors.cat.message}</small>}
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};


export default Create;
import React from 'react';
import SingleRecipe from './SingleRecipe';
import Create from './Create';
import "../style/Home.module.scss";
import PopularRecipes from '../components/PopularRecipes';
import NewRecipes from '../components/NewRecipe';
import BreakfastRecipes from '../components/BreakfastRecipes';
import { NavLink } from 'react-router-dom';

const Home = () => {
  // Temporary dummy recipes data
  const recipes = [
    { id: 1, title: "Classic Margherita Pizza", img: "/pizza.jpg", description: "Fresh tomatoes, mozzarella & basil." },
    { id: 2, title: "Creamy Mushroom Pasta", img: "/pasta.jpg", description: "Rich & creamy Italian pasta." },
    { id: 3, title: "Avocado Toast Special", img: "/avocado.jpg", description: "Healthy breakfast with a twist." }
  ];

  return (
    <div className="">
      
      {/* Hero Section */}
      <section className="relative h-[100vh] bg-gray-900 text-white flex items-center justify-center mt-[-5px]">
        <img 
          src="https://ik.imagekit.io/gauravkumar007/recipe-image/poha-recipe-2.jpg?updatedAt=1755248214038" 
          alt="Delicious food" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Foodie's Paradise</h1>
          <p className="text-lg mb-6">Discover, Cook, and Share Your Favorite Recipes</p>
        <NavLink to={'/recipes'}>
          <button  className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition">
            Explore Recipes
          </button>
        </NavLink>
        </div>
      </section>
      <PopularRecipes />
      <NewRecipes />
      <BreakfastRecipes />

    </div>
  );
};

export default Home;

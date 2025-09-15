import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const recipecontext = createContext(null);

const Recipescontext = ({children}) => {
  const [data, setdata] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      ing: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      ins: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      chef: "pankaj",
      category: "Dinner",
      des: "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. Drizzle with olive oil and season with salt and pepper.",
    },
     {
      id: 1,
      title: "Classic Margherita Pizza",
      img: "https://ik.imagekit.io/gauravkumar007/recipe-image/rava-laddu-recipe.webp?updatedAt=1755248217601",
      des: "Fresh tomatoes, mozzarella & basil.",
      category: "Popular",

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
      category: "Popular",

    },
  ]);
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("data")) || []);
  }, []);
  // console.log(data);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {children}
    </recipecontext.Provider>
  );
};

export default Recipescontext;

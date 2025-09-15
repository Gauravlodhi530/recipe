import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Recipes from "../Pages/Recipes";
import Create from "../Pages/Create";
import SingleRecipe from "../Pages/SingleRecipe";
import PressMedia from "../Pages/PressMedia";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsConditions from "../Pages/TermsConditions";
import Accessibility from "../Pages/Accessibility";


const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/detail/:id" element={<SingleRecipe />} />
      <Route path="/about" element={<About />} />
      <Route path="/create-recipe" element={<Create />} />
      <Route path="/press-media" element={<PressMedia />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/accessibility" element={<Accessibility />} />
    </Routes>
  );
};

export default Mainroutes;

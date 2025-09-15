import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can also use Heroicons or SVGs

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-amber-900 text-white fixed top-0 left-0 w-full z-50 shadow-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          {/* <img src="logo.png" alt="Logo" className="w-10 h-10" /> */}
          <h1 className="text-xl font-bold tracking-wide">Foodie</h1>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-200 transition-colors ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `hover:text-yellow-200 transition-colors ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-yellow-200 transition-colors ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/create-recipe"
            className={({ isActive }) =>
              `px-4 py-2 rounded bg-gray-900 hover:bg-gray-800 transition ${
                isActive ? "text-yellow-300 font-semibold" : "text-white"
              }`
            }
          >
            Create Recipe
          </NavLink>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block hover:text-yellow-300 ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `block hover:text-yellow-300 ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
            onClick={toggleMenu}
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block hover:text-yellow-300 ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/create-recipe"
            className={({ isActive }) =>
              `block px-1 py-2 rounded bg-gray-900 hover:bg-gray-800 w-30 ${
                isActive ? "text-yellow-300 font-semibold" : "text-white"
              }`
            }
            onClick={toggleMenu}
          >
            Create Recipe
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

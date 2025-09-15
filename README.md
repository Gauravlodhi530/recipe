# Foodie Recipe Website

This is **Foodie**, a recipe website built with **React** that lets users create, explore, update, and delete recipes. It uses **Context API** for state management and saves recipes in the **browser’s Local Storage** so your data persists even after refresh.

Live Demo: [https://foodie-recipe-website.netlify.app/](https://foodie-recipe-website.netlify.app/)

---

## Table of Contents
1. Features  
2. Tech Stack  
3. Installation  
4. Usage  
5. Folder Structure  
6. Contributing  
7. License  

---

## Features
- Browse recipes with images and details (ingredients, instructions, etc.)  
- **Create** new recipes directly in the app  
- **Update** existing recipes  
- **Delete** recipes you no longer want  
- Recipes are saved in **Local Storage** (persist even after page refresh)  
- Global state management using **React Context API**  
- Responsive design for desktop and mobile  
- User-friendly and visually appealing UI  

---

## Tech Stack
- **React.js** (Frontend)  
- **Context API** for state management  
- **Local Storage** for data persistence  
- **CSS3 / SCSS / Tailwind** (update based on what you used)  
- **Netlify** for deployment  

---

## Installation
To run the project locally:

```bash
# Clone the repo
git clone https://github.com/YourUserName/foodie-recipe-website.git

# Move into the folder
cd foodie-recipe-website

# Install dependencies
npm install

# Start the development server
npm start
```

Then open your browser at:  
👉 `http://localhost:3000`

---

## Usage
- Visit the homepage to see all saved recipes  
- **Create Recipe**: Add a new recipe with title, description, and ingredients  
- **Update Recipe**: Edit any existing recipe’s details  
- **Delete Recipe**: Remove unwanted recipes  
- All recipes are automatically stored in **Local Storage**  
- Mobile responsive — works on smartphones, tablets, and desktops  

---

## Folder Structure
```
foodie-recipe-website/
│
├── public/
│   └── assets/
│       └── images/
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/           # Context API for global state
│   ├── pages/             # Pages (Home, Create Recipe, etc.)
│   ├── styles/            # CSS/SCSS files
│   ├── utils/             # Helper functions
│   ├── App.js
│   └── index.js
│
├── .gitignore
├── package.json
├── README.md
└── netlify.toml (if any)
```


## License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

import React from 'react';

export default function About() {
  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 mb-6">
            About Foodie
          </h1>
          <p className="text-lg text-gray-800  mb-6 leading-relaxed">
            Welcome to <span className="font-semibold text-orange-500">Foodie</span> — your go-to platform for a world of delicious recipes. Whether you're a seasoned chef or just starting your culinary journey, Foodie is designed to inspire and simplify your cooking experience. We believe that great food brings people together, and our mission is to make creating and sharing meals a joyful experience for everyone.
          </p>

          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-inner mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">What You Can Do</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Create Recipes:</strong> Easily upload your favorite dishes, complete with high-quality images, detailed ingredients, and simple, step-by-step instructions.
              </li>
              <li>
                <strong>Explore Recipes:</strong> Dive into a diverse and growing collection of recipes shared by a global community of food lovers.
              </li>
              <li>
                <strong>Manage Your Creations:</strong> With our new features, you can now <strong className="text-blue-500">Update</strong> and <strong className="text-red-500">Delete</strong> your recipes anytime, giving you full control over your culinary contributions.
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-600">
            Join our community today and start exploring, creating, and sharing. Your next favorite recipe is just a click away!
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="about recipe.png"
            alt="A variety of fresh vegetables and herbs on a wooden cutting board"
            className="rounded-3xl shadow-2xl transform transition-transform duration-300 w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
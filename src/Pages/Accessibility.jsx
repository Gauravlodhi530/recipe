export default function AccessibilityStatement() {
  return (
    <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-16">
      {/* Left Column */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
        <p className="text-gray-600 mb-6 text-lg">
          We are committed to making all of our recipes and cooking content
          accessible to everyone, including people with disabilities. Our team
          continually works to improve navigation, text readability, image
          descriptions, and screen-reader support so that all visitors can enjoy
          and follow our recipes with ease.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
          Learn More
        </button>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={"Accessibility-Statement.png"}
          alt="Accessibility Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}

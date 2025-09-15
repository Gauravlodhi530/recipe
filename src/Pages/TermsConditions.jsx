
export default function TermsConditions() {
  return (
    <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-16">
      {/* Left Column */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={"terms-and-conditions.png"}
          alt="Terms and Conditions Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}

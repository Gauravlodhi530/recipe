// pages/PrivacyPolicy.jsx

export default function PrivacyPolicy() {
  return (
    <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-16">
      {/* Left Column */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6 text-lg">
          We value your privacy. Learn how we handle and protect your personal
          information in compliance with Google Ads policies.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Learn More
        </button>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={"image.png"}
          alt="Privacy Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}

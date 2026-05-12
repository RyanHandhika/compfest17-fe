const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
    title: "Organic & Fresh Sourcing",
    desc: "Every ingredient is sourced from local, sustainable farms within 100 miles of our kitchen, ensuring peak nutrient density and flavor profile in every bite.",
    bg: "bg-white",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Ultimate Convenience",
    desc: "Skip the meal prep and the cleanup. Your personalized menu arrives at your doorstep, ready to enjoy in minutes.",
    bg: "bg-white",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "Biometric Tracking",
    desc: "Sync your wearable health data with our platform to adjust your macronutrient and intake automatically based on your activity levels.",
    bg: "bg-white",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    title: "Chef-Crafted Excellence",
    desc: "Lady members come culinary directors to our kitchen from elite functional nutrition dining and living wellness.",
    bg: "bg-green-700",
    dark: true,
    hasImage: true,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-950 mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            We combine nutritional science with culinary excellence to deliver
            more than just food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Top 2 cards */}
          <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
            <div className="w-11 h-11 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
              {features[0].icon}
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">
              {features[0].title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {features[0].desc}
            </p>
          </div>

          <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
            <div className="w-11 h-11 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
              {features[1].icon}
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">
              {features[1].title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {features[1].desc}
            </p>
          </div>

          {/* Bottom 2 cards */}
          <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
            <div className="w-11 h-11 bg-green-200 rounded-2xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">
              {features[2].title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {features[2].desc}
            </p>
          </div>

          {/* Chef-Crafted dark card */}
          <div className="bg-green-700 rounded-3xl p-8 flex gap-6 items-start overflow-hidden relative">
            <div className="flex-1 z-10">
              <div className="w-11 h-11 bg-green-600 rounded-2xl flex items-center justify-center mb-5">
                {features[3].icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {features[3].title}
              </h3>
              <p className="text-green-100 text-sm leading-relaxed mb-5">
                {features[3].desc}
              </p>
              <button className="bg-white text-green-800 text-xs font-semibold px-5 py-2 rounded-full hover:bg-green-50 transition-all">
                Meet Our Chefs
              </button>
            </div>
            {/* Decorative photo-like element */}
            <div className="w-28 h-28 rounded-2xl bg-green-600 flex-shrink-0 flex items-center justify-center overflow-hidden mt-2">
              <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-800 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-300 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

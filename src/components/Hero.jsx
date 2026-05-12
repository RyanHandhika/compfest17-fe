import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-20 flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase">
            Fresh Nutrition
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-green-950">
            Healthy Meals
            <br />
            <span className="text-green-700">Delivered to</span>
            <br />
            Your Door
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-sm">
            Expertly crafted, chef-prepared meals tailored to your health needs.
            Experience the intersection of luxury dining and clinical wellness.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-green-800 transition-all hover:shadow-lg"
            >
              View Plans
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-full font-medium text-sm hover:bg-green-50 transition-all">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Right — Meal Card */}
        <div className="relative flex justify-center">
          <div className="relative bg-white rounded-3xl shadow-2xl p-4 w-80 md:w-96">
            {/* Meal image placeholder */}
            <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-green-200 via-green-100 to-amber-100 flex items-center justify-center overflow-hidden">
              {/* Decorative food illustration */}
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full bg-stone-100 border-4 border-white shadow-inner"></div>
                {/* Greens */}
                <div className="absolute top-2 left-8 w-24 h-8 bg-green-400 rounded-full opacity-80 rotate-12"></div>
                <div className="absolute top-4 left-4 w-16 h-6 bg-green-500 rounded-full opacity-70 -rotate-6"></div>
                {/* Sweet potato */}
                <div className="absolute bottom-10 right-4 w-14 h-10 bg-orange-400 rounded-xl opacity-90"></div>
                <div className="absolute bottom-8 right-6 w-10 h-8 bg-orange-500 rounded-xl opacity-80"></div>
                {/* Grain */}
                <div className="absolute bottom-6 left-6 w-16 h-10 bg-amber-200 rounded-xl opacity-90"></div>
                {/* Avocado */}
                <div className="absolute bottom-4 right-2 w-10 h-10 bg-green-300 rounded-full opacity-90 border-2 border-white"></div>
              </div>
            </div>
            {/* Delivery badge */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Next Delivery
                </p>
                <p className="text-sm font-semibold text-green-800">
                  Tomorrow, 7:00 AM
                </p>
              </div>
              <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Floating decoration */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-100 rounded-full opacity-40 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}

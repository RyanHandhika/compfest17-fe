import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    tag: "WEIGHT LOSS",
    tagBg: "bg-green-700",
    name: "Diet Plan",
    price: "$99",
    features: [
      "Calorie Controlled (1,200-1,500)",
      "Low Glycemic Index Ingredients",
      "Metabolism Boosting Recipes",
      "Daily Detox Infusions",
      "Nutritional Coach Support",
    ],
    color: "from-stone-300 to-stone-500",
    icon: "🥗",
  },
  {
    tag: "MUSCLE GAIN",
    tagBg: "bg-green-700",
    name: "Protein Plan",
    price: "$129",
    features: [
      "High Protein (40g+ per meal)",
      "Premium Lean Meat Sources",
      "Post-Workout Recovery Snacks",
      "Custom Macro Tracking",
      "BCAA-Rich Superfoods",
    ],
    color: "from-green-700 to-green-900",
    icon: "🥩",
    popular: true,
  },
  {
    tag: "GOURMET EXPERIENCE",
    tagBg: "bg-stone-700",
    name: "Royal Plan",
    price: "$189",
    features: [
      "Michelin-Inspired Menus",
      "Rare & Seasonal Ingredients",
      "Chef's Table Private Access",
      "Cold-Pressed Juice Pairings",
      "Priority Delivery Windows",
    ],
    color: "from-slate-600 to-slate-800",
    icon: "🍽️",
  },
];

// Gradient meal image card
function MealCard({ plan }) {
  return (
    <div
      className={`h-52 bg-gradient-to-br ${plan.color} flex items-center justify-center relative overflow-hidden rounded-t-2xl`}
    >
      <span
        className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${plan.tagBg} text-white tracking-wide`}
      >
        {plan.tag}
      </span>
      <span className="text-6xl opacity-80">{plan.icon}</span>
    </div>
  );
}

export default function PlansPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50/40">
      <Navbar />
      <div className="pt-20 max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
            Tailored Nutrition
          </p>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Journey
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Expertly curated meal plans designed to nourish your body and
            elevate your lifestyle through premium ingredients.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${plan.popular ? "ring-2 ring-green-500" : ""}`}
            >
              <MealCard plan={plan} />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.price}{" "}
                  <span className="text-sm font-normal text-gray-400">
                    /week
                  </span>
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/subscribe")}
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-green-700 text-white hover:bg-green-800 shadow-md"
                      : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why SEA Catering section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why SEA Catering?
            </h2>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              We blend nutritional science with culinary artistry to deliver
              more than just food — we deliver a revitalization of your health.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "100% Organic",
                  sub: "Sustainably Sourced",
                  icon: "🌿",
                },
                {
                  title: "Expert Led",
                  sub: "Nutritionist Approved",
                  icon: "🏅",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <p className="text-sm font-bold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chef image placeholder */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 h-72 flex items-center justify-center">
            <div className="text-center text-white/60">
              <span className="text-6xl">👨‍🍳</span>
              <p className="mt-3 text-sm font-medium text-white/80">
                Michelin-level precision
              </p>
              <p className="text-xs text-white/40">in every meal</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

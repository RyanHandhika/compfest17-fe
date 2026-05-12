const plans = [
  {
    label: "Keto Friendly",
    name: "Diet Plan",
    desc: "Optimized for weight management and metabolic health without sacrificing flavor.",
    features: ["1,200 - 1,500 kcal / day", "Low Glycemic Index"],
    cta: "Select Diet",
    popular: false,
    dark: false,
    gradient: "from-green-100 to-emerald-50",
  },
  {
    label: "Most Popular",
    name: "Protein Plan",
    desc: "Designed for athletes and active individuals focused on muscle recovery and performance.",
    features: ["150g+ Protein / day", "Performance Carbs"],
    cta: "Select Protein",
    popular: true,
    dark: true,
    gradient: "from-green-700 to-green-800",
  },
  {
    label: "Premium",
    name: "Royal Plan",
    desc: "The ultimate culinary journey featuring rare ingredients and unlimited customization options.",
    features: ["Bespoke Ingredient Sourcing", "Private Nutritionist Access"],
    cta: "Select Royal",
    popular: false,
    dark: false,
    gradient: "from-slate-800 to-slate-900",
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-green-600 text-xs font-semibold uppercase tracking-widest mb-2">
            Our Community
          </p>
          <h2 className="text-4xl font-bold text-green-950 mb-3">
            Choose Your Strategy
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Specialized meal tracks designed for specific physiological
            outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
            >
              {/* Card image area */}
              <div
                className={`h-44 bg-gradient-to-br ${plan.gradient} flex items-center justify-center relative`}
              >
                <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  {plan.label}
                </span>
                {/* Food icon decoration */}
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Card content */}
              <div className="bg-white p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {plan.desc}
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-green-700 text-white hover:bg-green-800 shadow-md"
                      : "border border-green-300 text-green-700 hover:bg-green-50"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

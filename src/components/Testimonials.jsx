import { useState } from "react";

const testimonials = [
  {
    name: "Elena Rodriguez",
    role: "Subscriber since 2022",
    text: "SEA Catering didn't just change what I eat; it's changed how I live. I have more energy for my morning runs and I've saved 10 hours a week on meal prepping.",
    avatar: "ER",
  },
  {
    name: "Marcus Chen",
    role: "Macroathlete",
    text: "The Protein Plan is the first meal service that actually meets my macros consistently. The taste and restaurant-quality which is unheard of in fitness catering.",
    avatar: "MC",
  },
  {
    name: "Priya Nair",
    role: "Wellness Coach",
    text: "I recommend SEA Catering to all my clients. The biometric integration is a game-changer — meals that evolve with your body's needs every week.",
    avatar: "PN",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-green-600 text-xs font-semibold uppercase tracking-widest mb-2">
            Our Community
          </p>
          <h2 className="text-4xl font-bold text-green-950">
            Transformation Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {testimonials.slice(0, 2).map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-sm border border-green-100"
            >
              <div className="text-green-300 text-5xl font-serif leading-none mb-4">
                "
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-green-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-3">
          <button className="w-8 h-8 rounded-full border border-green-300 text-green-700 flex items-center justify-center hover:bg-green-100">
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center hover:bg-green-800">
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
        </div>
      </div>
    </section>
  );
}

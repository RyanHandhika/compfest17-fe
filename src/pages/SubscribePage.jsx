import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const planOptions = [
  {
    id: "diet",
    name: "Diet",
    desc: "Calorie controlled, balanced macros.",
    price: 12,
  },
  {
    id: "protein",
    name: "Protein",
    desc: "High protein for muscle recovery.",
    price: 15,
    popular: true,
  },
  {
    id: "royal",
    name: "Royal",
    desc: "Premium ingredients, gourmet prep.",
    price: 18,
  },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const mealTypes = ["Breakfast", "Lunch", "Dinner"];

export default function SubscribePage() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("protein");
  const [selectedDays, setSelectedDays] = useState(["Mon", "Wed", "Fri"]);
  const [selectedMeals, setSelectedMeals] = useState(["Breakfast", "Lunch"]);
  const [allergy, setAllergy] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const plan = planOptions.find((p) => p.id === selectedPlan);
  const mealsPerDelivery = selectedMeals.length;
  const deliveriesPerWeek = selectedDays.length;
  const total = (plan?.price * mealsPerDelivery * deliveriesPerWeek).toFixed(2);

  const toggleDay = (d) =>
    setSelectedDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );
  const toggleMeal = (m) =>
    setSelectedMeals((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m],
    );

  return (
    <div className="min-h-screen bg-green-50/20">
      <Navbar />
      <div className="pt-20 max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-1">
          Customize Your Journey
        </h1>
        <p className="text-gray-500 text-sm mb-6 max-w-lg">
          Tailor your nutrition to your lifestyle. Our premium meal plans are
          crafted by nutritionists and delivered fresh to your door.
        </p>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-1.5 bg-green-200 rounded-full">
            <div className="h-1.5 bg-green-600 rounded-full w-2/3"></div>
          </div>
          <span className="text-xs text-gray-400 uppercase tracking-wider font-medium whitespace-nowrap">
            Step 2 of 3: Selection
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-5">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Personal Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Select Plan */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-5">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Select Plan
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {planOptions.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlan(p.id)}
                    className={`relative border-2 rounded-xl p-4 text-left transition-all ${
                      selectedPlan === p.id
                        ? "border-green-600 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {p.popular && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                        POPULAR
                      </span>
                    )}
                    <p className="font-bold text-gray-900 text-sm">{p.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5 mb-2">
                      {p.desc}
                    </p>
                    <p
                      className={`text-sm font-bold ${selectedPlan === p.id ? "text-green-700" : "text-gray-600"}`}
                    >
                      ${p.price}.00 / meal
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Meal Types & Delivery Days */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Meal Types
                  </p>
                  <div className="space-y-2">
                    {mealTypes.map((m) => (
                      <button
                        key={m}
                        onClick={() => toggleMeal(m)}
                        className={`flex items-center gap-3 w-full border rounded-xl px-4 py-3 transition-all ${
                          selectedMeals.includes(m)
                            ? "border-green-400 bg-green-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                            selectedMeals.includes(m)
                              ? "bg-green-600 border-green-600"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedMeals.includes(m) && (
                            <svg
                              className="w-2.5 h-2.5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {m}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Delivery Days
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {days.map((d) => (
                      <button
                        key={d}
                        onClick={() => toggleDay(d)}
                        className={`w-11 h-11 rounded-full text-sm font-semibold transition-all ${
                          selectedDays.includes(d)
                            ? "bg-green-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    We deliver freshly prepared meals three times a week to
                    ensure peak nutrition.
                  </p>
                </div>
              </div>
            </div>

            {/* Allergy notes */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-3">
                Allergy Notes & Dietary Preferences
              </label>
              <textarea
                rows={4}
                placeholder="e.g. No shellfish, gluten-free, allergy to peanuts..."
                value={allergy}
                onChange={(e) => setAllergy(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all placeholder-gray-400 resize-none"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            {/* Meal image */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-green-200 to-green-700 h-44 flex items-center justify-center">
              <span className="text-6xl">🥦</span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Order Summary
              </h3>
              <p className="text-green-600 text-sm font-semibold mb-4 flex items-center gap-1">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                {plan?.name} Plan Selected
              </p>

              <div className="space-y-2 text-sm mb-5">
                <div className="flex justify-between text-gray-600">
                  <span>Meals per delivery</span>
                  <span className="font-medium">{mealsPerDelivery} meals</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Deliveries per week</span>
                  <span className="font-medium">{deliveriesPerWeek} days</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>
                    {plan?.name} Plan (${plan?.price}/meal)
                  </span>
                  <span className="font-medium">
                    $
                    {(
                      plan?.price *
                      mealsPerDelivery *
                      deliveriesPerWeek
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Premium Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-5">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  Total Price
                </p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-bold text-gray-900">${total}</p>
                  <span className="text-gray-400 text-sm mb-1">/wk</span>
                  <span className="ml-auto text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-md font-semibold">
                    TAX INCL.
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate("/user-dashboard")}
                className="w-full bg-green-700 text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-green-800 transition-all shadow-md"
              >
                Submit Subscription
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
              <p className="text-xs text-gray-400 text-center mt-3">
                Cancel or pause anytime. No hidden commitments.
              </p>
            </div>

            {/* Nutritional guarantee */}
            <div className="bg-gray-900 rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="font-bold text-sm">Nutritional Guarantee</p>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Every meal is audited by our in-house nutritionists for macro
                precision.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

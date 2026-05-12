import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const weekDays = [
  {
    day: "MON, OCT 21",
    active: true,
    meals: [
      { type: "BREAKFAST", name: "Avocado Ke..." },
      { type: "LUNCH", name: "Grilled Salm..." },
      { type: "DINNER", name: "Beef Tender..." },
    ],
  },
  {
    day: "TUE, OCT 22",
    active: false,
    meals: [
      { type: "BREAKFAST", name: "Chia Seed P..." },
      { type: "LUNCH", name: "Turkey Wrap" },
      { type: "DINNER", name: "Zucchini N..." },
    ],
  },
  {
    day: "WED, OCT 23",
    active: false,
    paused: true,
    meals: [{ type: "PAUSED", name: "No Delivery" }],
  },
  {
    day: "THU, OCT 24",
    active: false,
    meals: [
      { type: "BREAKFAST", name: "Green Omel..." },
      { type: "LUNCH", name: "Quinoa Bowl" },
      { type: "DINNER", name: "Herb Chick..." },
    ],
  },
  {
    day: "FRI, OCT 25",
    active: false,
    meals: [
      { type: "BREAKFAST", name: "Greek Yogu..." },
      { type: "LUNCH", name: "Lemon Cod" },
      { type: "DINNER", name: "Steak Stir-f..." },
    ],
  },
  {
    day: "SAT, OCT 26",
    active: false,
    meals: [
      { type: "BREAKFAST", name: "Keto Panca..." },
      { type: "LUNCH", name: "Tuna Tartare" },
      { type: "DINNER", name: "Roast Lamb" },
    ],
  },
  {
    day: "SUN, OCT 27",
    active: false,
    meals: [
      { type: "BREAKFAST", name: "Veggie Sc..." },
      { type: "LUNCH", name: "Chicken Ca..." },
      { type: "DINNER", name: "Seared Scal..." },
    ],
  },
];

const billing = [
  { month: "October 2024", date: "OCT 01, 2024", amount: "$499.00" },
  { month: "September 2024", date: "SEP 01, 2024", amount: "$499.00" },
  { month: "August 2024", date: "AUG 01, 2024", amount: "$499.00" },
];

function MealTypeColor(type) {
  if (type === "BREAKFAST") return "text-orange-500";
  if (type === "LUNCH") return "text-green-600";
  if (type === "DINNER") return "text-blue-500";
  return "text-gray-400";
}

export default function UserDashboard() {
  return (
    <div className="flex min-h-screen bg-green-50/20">
      <Sidebar />

      <main className="ml-48 flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Good morning, John
          </h1>
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Current Plan
              </p>
              <p className="text-sm font-bold text-green-700">
                Executive Wellness
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Left: Subscription + Schedule */}
          <div className="lg:col-span-2 space-y-5">
            {/* Subscription card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                    ACTIVE SUBSCRIPTION
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-3">
                    Executive Wellness Plan
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    3 meals per day · 7 days a week · Keto Optimized
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Next Delivery
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    Oct 24, 2024
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Remaining Meals
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    42{" "}
                    <span className="text-gray-400 font-normal text-base">
                      / 60
                    </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                    <div
                      className="bg-green-500 h-1 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Health Score
                  </p>
                  <p className="text-xl font-bold text-gray-900 flex items-center gap-1">
                    <span className="text-pink-500">♥</span> 94%
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Status
                  </p>
                  <p className="text-lg font-bold text-gray-900 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                    On Track
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all">
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Modify Meal Plan
                </button>
                <button className="border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all">
                  Pause Subscription
                </button>
                <button className="text-red-400 text-sm font-medium hover:text-red-500 ml-2">
                  Cancel Subscription
                </button>
              </div>
            </div>

            {/* Delivery schedule */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-gray-900">
                  Upcoming Delivery Schedule
                </h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500"
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
                  <button className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500"
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
              <p className="text-gray-400 text-xs mb-5">
                Manage and preview your wellness journey for the next 7 days
              </p>

              <div className="grid grid-cols-7 gap-1.5 overflow-x-auto">
                {weekDays.map((day, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-2 min-w-[90px] ${day.active ? "bg-green-700 text-white" : "bg-gray-50"}`}
                  >
                    <p
                      className={`text-xs font-bold mb-2 ${day.active ? "text-green-200" : "text-gray-400"}`}
                    >
                      {day.day}
                    </p>
                    {day.paused ? (
                      <div className="space-y-1">
                        <p className="text-xs text-gray-400">PAUSED</p>
                        <p className="text-xs text-gray-400">No Delivery</p>
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        {day.meals.map((meal, mi) => (
                          <div
                            key={mi}
                            className={`rounded-lg p-1.5 ${day.active ? "bg-green-600" : "bg-white border border-gray-100"}`}
                          >
                            <p
                              className={`text-xs font-bold ${day.active ? "text-green-200" : MealTypeColor(meal.type)}`}
                            >
                              {meal.type}
                            </p>
                            <p
                              className={`text-xs truncate ${day.active ? "text-white" : "text-gray-700"}`}
                            >
                              {meal.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button className="mt-4 text-sm text-green-700 font-semibold flex items-center gap-1 hover:text-green-800">
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Full Monthly Menu (PDF)
              </button>
            </div>
          </div>

          {/* Right: Billing + Support */}
          <div className="space-y-5">
            {/* Billing history */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-gray-900">
                  Billing History
                </h3>
                <button>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                {billing.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-green-500"
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
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">
                        {b.month}
                      </p>
                      <p className="text-xs text-gray-400">{b.date}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-800">
                      {b.amount}
                    </p>
                  </div>
                ))}
              </div>

              <button className="text-green-600 text-sm font-semibold mt-4 hover:text-green-700 block">
                View All Transactions
              </button>
            </div>

            {/* Priority Support */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">
                Membership Perk
              </p>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold">Priority Support</h3>
                <svg
                  className="w-8 h-8 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                As a Pro member, you have a dedicated wellness concierge at your
                disposal 24/7.
              </p>
              <button className="bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-500 transition-all">
                Contact Concierge
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

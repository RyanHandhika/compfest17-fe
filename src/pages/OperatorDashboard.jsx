import Sidebar from "../components/Sidebar";
import { useState } from "react";

const stats = [
  {
    label: "TOTAL USERS",
    value: "12,845",
    change: "+12%",
    icon: (
      <svg
        className="w-6 h-6 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "NEW SUBSCRIPTIONS",
    value: "1,240",
    change: "+8%",
    icon: (
      <svg
        className="w-6 h-6 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
  },
  {
    label: "MONTHLY REVENUE",
    value: "$142,500",
    change: "+24%",
    icon: (
      <svg
        className="w-6 h-6 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const orders = [
  {
    name: "David Chen",
    email: "david.c@example.com",
    date: "Oct 24, 2023",
    plan: "Keto Elite",
    planColor: "bg-green-100 text-green-700",
    status: "Delivered",
    statusColor: "text-green-600",
    amount: "$245.00",
    initials: "DC",
    avatarBg: "bg-blue-200",
  },
  {
    name: "Sarah Jenkins",
    email: "s.jenkins@test.com",
    date: "Oct 25, 2023",
    plan: "Vegan Vitality",
    planColor: "bg-green-100 text-green-700",
    status: "Pending",
    statusColor: "text-yellow-500",
    amount: "$189.50",
    initials: "SJ",
    avatarBg: "bg-rose-200",
  },
  {
    name: "Marcus Thorne",
    email: "m.thorne@corp.org",
    date: "Oct 25, 2023",
    plan: "Standard Mix",
    planColor: "bg-gray-100 text-gray-600",
    status: "Delivered",
    statusColor: "text-green-600",
    amount: "$120.00",
    initials: "MT",
    avatarBg: "bg-slate-200",
  },
];

// Simple SVG line chart
function RevenueChart() {
  const points = [
    20, 22, 19, 28, 32, 38, 35, 45, 42, 50, 55, 60, 58, 65, 70, 68, 75, 80, 85,
    90, 88, 92, 95, 98, 96, 100, 105, 108, 112, 115,
  ];
  const h = 160,
    w = 440,
    pad = 10;
  const max = Math.max(...points),
    min = Math.min(...points);
  const coords = points.map((v, i) => {
    const x = pad + (i / (points.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    return `${x},${y}`;
  });
  const pathD = `M ${coords.join(" L ")}`;
  const areaD = `M ${pad},${h - pad} L ${coords.join(" L ")} L ${w - pad},${h - pad} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-36">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#areaGrad)" />
      <path
        d={pathD}
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Simple bar chart
function BarChart() {
  const bars = [65, 45, 80, 70, 95, 75];
  const labels = ["W1", "W2", "W3", "W4", "W5", "W6"];
  const max = Math.max(...bars);
  return (
    <div className="flex items-end gap-3 h-32 mt-4">
      {bars.map((v, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <div
            className="w-full rounded-t-md bg-green-300"
            style={{ height: `${(v / max) * 100}%`, minHeight: 8 }}
          ></div>
          <span className="text-xs text-gray-400">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

export default function OperatorDashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex min-h-screen bg-green-50/30">
      <Sidebar isOperator={true} />

      <main className="ml-48 flex-1 p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Operator Dashboard
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Real-time overview of SEA Catering's operational health.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="border border-gray-200 bg-white text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all">
              Export Data
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-700 transition-all shadow-sm">
              New Campaign
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center">
                  {s.icon}
                </div>
                <span className="text-green-600 text-sm font-semibold">
                  {s.change}
                </span>
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                {s.label}
              </p>
              <p className="text-3xl font-bold text-gray-900">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          {/* Revenue chart - 2/3 width */}
          <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Revenue Analytics
                </h3>
                <p className="text-xs text-gray-400">
                  Transaction volume over the last 30 days
                </p>
              </div>
              <button className="flex items-center gap-1 border border-gray-200 text-sm text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50">
                Last 30 Days
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <RevenueChart />
            <div className="flex justify-between text-xs text-gray-400 mt-1 px-2">
              <span>MAY 01</span>
              <span>MAY 10</span>
              <span>MAY 20</span>
              <span>MAY 30</span>
            </div>
          </div>

          {/* Subscription growth */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">
              Subscription Growth
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Weekly retention performance
            </p>
            <BarChart />
          </div>
        </div>

        {/* Orders table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 flex items-center justify-between border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Manage Orders</h3>
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 w-56">
              <svg
                className="w-4 h-4 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search orders..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-sm text-gray-700 outline-none flex-1 placeholder-gray-400"
              />
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {[
                  "Customer",
                  "Order Date",
                  "Plan Type",
                  "Status",
                  "Amount",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-3"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders
                .filter((o) =>
                  o.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((order, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-full ${order.avatarBg} flex items-center justify-center text-xs font-bold text-gray-600`}
                        >
                          {order.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {order.name}
                          </p>
                          <p className="text-xs text-gray-400">{order.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${order.planColor}`}
                      >
                        {order.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${order.status === "Delivered" ? "bg-green-500" : "bg-yellow-400"}`}
                        ></span>
                        <span
                          className={`text-sm font-medium ${order.statusColor}`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                      {order.amount}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-100">
            <p className="text-sm text-gray-400">Showing 3 of 1,240 orders</p>
            <div className="flex items-center gap-2">
              <button className="border border-gray-200 text-sm text-gray-600 px-4 py-1.5 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="border border-gray-200 text-sm text-gray-600 px-4 py-1.5 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

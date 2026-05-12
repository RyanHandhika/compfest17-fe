const steps = [
  {
    number: "01",
    title: "Personalize Your Plan",
    desc: "Take our 2-minute biometric assessment to determine your unique caloric and nutrient requirements based on your lifestyle goals.",
  },
  {
    number: "02",
    title: "Chef Prepared",
    desc: "Our culinary team prepares your meals using fresh, organic ingredients, flash-cooking them to preserve nutrients and taste integrity.",
  },
  {
    number: "03",
    title: "Daily Delivery",
    desc: "Receive your insulated cooler bag before dawn. Simply heat for 5 minutes or enjoy fresh whenever your schedule allows.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-green-600 text-xs font-semibold uppercase tracking-widest mb-2">
            The Process
          </p>
          <h2 className="text-4xl font-bold text-green-950">How it Works</h2>
          <p className="text-gray-500 mt-2">
            Your journey to peak health simplified into three elegant steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-full w-full h-px bg-green-200 z-0"
                  style={{ width: "calc(100% - 2rem)", left: "50%" }}
                ></div>
              )}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-green-100 hover:shadow-md transition-shadow relative z-10">
                <span className="text-5xl font-bold text-green-100 leading-none block mb-4">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-green-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

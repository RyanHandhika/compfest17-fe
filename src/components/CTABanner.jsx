import { useNavigate } from "react-router-dom";

export default function CTABanner() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-green-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Elevate
          <br />
          <span className="text-green-400">Your Vitality?</span>
        </h2>
        <p className="text-green-200 mb-10 text-base">
          Join 5,000+ wellness seekers who have transformed their relationship
          with food.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/login")}
            className="bg-green-500 hover:bg-green-400 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-green-500/30 text-sm"
          >
            Start Your Journey
          </button>
          <button
            onClick={() => navigate("/login")}
            className="border border-green-500 text-green-300 px-8 py-3.5 rounded-full font-semibold hover:bg-green-900 transition-all text-sm"
          >
            Schedule a Consult
          </button>
        </div>
      </div>
    </section>
  );
}

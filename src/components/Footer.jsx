import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-950 border-t border-green-900 py-10 text-green-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <span className="text-green-300 font-semibold text-sm">
            SEA Catering
          </span>
        </div>
        <p className="text-green-600">
          © 2024 SEA Catering. Premium Wellness Delivered.
        </p>
        <div className="flex gap-5">
          {[
            "Privacy Policy",
            "Terms of Service",
            "Sustainability",
            "Help Center",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-green-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

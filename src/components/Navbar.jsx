import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-green-700 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <span className="font-semibold text-green-900 text-sm tracking-wide">
            SEA Catering
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Plans", "How It Works", "About", "Sustainability"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="text-sm text-gray-600 hover:text-green-700 font-medium transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-green-700 text-white text-sm px-5 py-2 rounded-full font-medium hover:bg-green-800 transition-all hover:shadow-md"
          >
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-green-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-green-100 px-6 py-4 flex flex-col gap-4">
          {["Plans", "How It Works", "About", "Sustainability"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-gray-700 font-medium hover:text-green-700"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => navigate("/login")}
            className="text-sm text-gray-600 text-left"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-green-700 text-white text-sm px-5 py-2 rounded-full font-medium"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

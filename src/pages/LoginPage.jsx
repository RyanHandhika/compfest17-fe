import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "../hooks/UseForm";
import { validators } from "../utils/Validators";
import { FormField } from "../components/FormField";

const loginValidators = {
  email: validators.email,
  password: validators.loginPassword,
};

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/user-dashboard";

  const [serverError, setServerError] = useState("");
  const [remember, setRemember] = useState(false);

  const {
    values,
    errors,
    touched,
    submitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({ email: "", password: "" }, loginValidators);

  const onSubmit = handleSubmit(async (vals) => {
    setServerError("");
    try {
      const user = await login({ email: vals.email, password: vals.password });
      navigate(user.role === "operator" ? "/operator" : from, {
        replace: true,
      });
    } catch (err) {
      setServerError(err.message);
    }
  });

  return (
    <div className="min-h-screen flex">
      {/* ── Left brand panel ── */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-green-900 via-green-800 to-green-950 relative overflow-hidden flex-col justify-between p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-300 rounded-full opacity-10 -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
            S
          </div>
          <span className="text-white font-bold text-lg tracking-wide">
            SEA Catering
          </span>
        </div>

        {/* Hero copy */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            Premium wellness
            <br />
            <span className="text-green-300">delivered to your</span>
            <br />
            doorstep.
          </h2>
          <p className="text-green-200 text-sm leading-relaxed max-w-xs mb-8">
            Join our community of health-conscious individuals transforming
            their lives through precision nutrition.
          </p>

          {/* Dashboard preview card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center text-lg">
                🛒
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  Daily Nutrition
                </p>
                <p className="text-green-300 text-xs">
                  Optimized for performance
                </p>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1.5">
              <div className="bg-green-400 h-1.5 rounded-full w-2/3" />
            </div>
            <p className="text-green-300 text-xs mt-2">
              1,340 / 1,800 kcal today
            </p>
          </div>
        </div>

        <p className="relative z-10 text-green-500 text-xs">
          Trusted by 5,000+ wellness enthusiasts worldwide
        </p>
      </div>

      {/* ── Right form panel ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 md:p-16">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-7 h-7 bg-green-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
              S
            </div>
            <span className="text-green-900 font-bold">SEA Catering</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm mb-8">
            Access your personalized meal plan and wellness dashboard.
          </p>

          {/* Server error banner */}
          {serverError && (
            <div className="mb-5 flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <svg
                className="w-5 h-5 text-red-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-red-600">{serverError}</p>
            </div>
          )}

          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <FormField
              label="Email Address"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              autoComplete="email"
              required
            />

            <FormField
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
              autoComplete="current-password"
              required
              rightLabel={
                <Link
                  to="/forgot-password"
                  className="text-xs text-green-600 font-semibold hover:text-green-700"
                >
                  Forgot?
                </Link>
              }
            />

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setRemember((r) => !r)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                  remember ? "bg-green-700 border-green-700" : "border-gray-300"
                }`}
                aria-label="Remember me"
              >
                {remember && (
                  <svg
                    className="w-3 h-3 text-white"
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
              </button>
              <span className="text-sm text-gray-600">
                Remember me for 30 days
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-green-800 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Signing in…
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social buttons (UI only) */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
              Apple
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-700 font-semibold hover:text-green-800"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

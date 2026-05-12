import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "../hooks/UseForm";
import { validators } from "../utils/Validators";
import { FormField, PasswordStrength } from "../components/FormField";

const steps = ["Account", "Security", "Done"];

const step1Validators = {
  fullName: validators.fullName,
  email: validators.email,
};

const step2Validators = {
  password: validators.password,
  confirmPassword: validators.confirmPassword,
};

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [serverError, setServerError] = useState("");
  const [role, setRole] = useState("user");

  // Step 1 form
  const form1 = useForm({ fullName: "", email: "" }, step1Validators);
  // Step 2 form
  const form2 = useForm({ password: "", confirmPassword: "" }, step2Validators);

  const handleStep1 = form1.handleSubmit(async () => {
    setStep(2);
  });

  const handleStep2 = form2.handleSubmit(async (vals) => {
    setServerError("");
    try {
      await register({
        fullName: form1.values.fullName,
        email: form1.values.email,
        password: vals.password,
        role,
      });
      setStep(3);
      setTimeout(
        () => navigate(role === "operator" ? "/operator" : "/user-dashboard"),
        1800,
      );
    } catch (err) {
      setServerError(err.message);
    }
  });

  return (
    <div className="min-h-screen flex">
      {/* ── Left brand panel ── */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-green-900 via-green-800 to-green-950 relative overflow-hidden flex-col justify-between p-12">
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-500 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300 rounded-full opacity-10 -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
            S
          </div>
          <span className="text-white font-bold text-lg tracking-wide">
            SEA Catering
          </span>
        </div>

        {/* Benefits */}
        <div className="relative z-10 space-y-5">
          <h2 className="text-3xl font-bold text-white leading-tight">
            Start your wellness
            <br />
            <span className="text-green-300">journey today.</span>
          </h2>
          <p className="text-green-200 text-sm leading-relaxed max-w-xs">
            Join thousands of members who have transformed their health with
            expert-crafted meal plans.
          </p>

          {[
            {
              icon: "🥗",
              title: "Chef-crafted meals",
              desc: "Restaurant quality, nutritionist approved",
            },
            {
              icon: "📦",
              title: "Daily delivery",
              desc: "Fresh to your door every morning",
            },
            {
              icon: "📊",
              title: "Health tracking",
              desc: "Biometric sync and macro monitoring",
            },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {b.icon}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{b.title}</p>
                <p className="text-green-300 text-xs">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="relative z-10 text-green-500 text-xs">
          Cancel anytime · No hidden fees
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

          {/* Step indicator */}
          {step < 3 && (
            <div className="flex items-center gap-2 mb-8">
              {steps.slice(0, 2).map((s, i) => {
                const num = i + 1;
                const done = num < step;
                const active = num === step;
                return (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        done
                          ? "bg-green-600 text-white"
                          : active
                            ? "bg-green-800 text-white"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {done ? (
                        <svg
                          className="w-3.5 h-3.5"
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
                      ) : (
                        num
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium ${active ? "text-gray-800" : "text-gray-400"}`}
                    >
                      {s}
                    </span>
                    {i < 1 && (
                      <div
                        className={`w-8 h-px mx-1 ${step > num ? "bg-green-500" : "bg-gray-200"}`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Step 1: Account Info ── */}
          {step === 1 && (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Create Account
              </h1>
              <p className="text-gray-400 text-sm mb-8">
                Tell us a bit about yourself to get started.
              </p>

              <form onSubmit={handleStep1} noValidate className="space-y-5">
                <FormField
                  label="Full Name"
                  name="fullName"
                  placeholder="Your full name"
                  value={form1.values.fullName}
                  onChange={form1.handleChange}
                  onBlur={form1.handleBlur}
                  error={form1.errors.fullName}
                  touched={form1.touched.fullName}
                  autoComplete="name"
                  required
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={form1.values.email}
                  onChange={form1.handleChange}
                  onBlur={form1.handleBlur}
                  error={form1.errors.email}
                  touched={form1.touched.email}
                  autoComplete="email"
                  required
                />

                {/* Account type */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Account Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        value: "user",
                        label: "Customer",
                        desc: "Order and track meals",
                        icon: "🧑‍💼",
                      },
                      {
                        value: "operator",
                        label: "Operator",
                        desc: "Manage orders & analytics",
                        icon: "🏢",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setRole(opt.value)}
                        className={`flex flex-col items-start gap-1 p-4 rounded-xl border-2 text-left transition-all ${
                          role === opt.value
                            ? "border-green-600 bg-green-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-xl">{opt.icon}</span>
                        <p
                          className={`text-sm font-bold ${role === opt.value ? "text-green-800" : "text-gray-700"}`}
                        >
                          {opt.label}
                        </p>
                        <p className="text-xs text-gray-400">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-800 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-sm transition-all"
                >
                  Continue →
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-8">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-green-700 font-semibold hover:text-green-800"
                >
                  Sign In
                </Link>
              </p>
            </>
          )}

          {/* ── Step 2: Password ── */}
          {step === 2 && (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Secure Your Account
              </h1>
              <p className="text-gray-400 text-sm mb-8">
                Creating account for{" "}
                <span className="font-semibold text-green-700">
                  {form1.values.email}
                </span>
              </p>

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

              <form onSubmit={handleStep2} noValidate className="space-y-5">
                <div>
                  <FormField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={form2.values.password}
                    onChange={form2.handleChange}
                    onBlur={form2.handleBlur}
                    error={form2.errors.password}
                    touched={form2.touched.password}
                    autoComplete="new-password"
                    required
                  />
                  <PasswordStrength password={form2.values.password} />
                </div>

                <FormField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Repeat your password"
                  value={form2.values.confirmPassword}
                  onChange={form2.handleChange}
                  onBlur={form2.handleBlur}
                  error={form2.errors.confirmPassword}
                  touched={form2.touched.confirmPassword}
                  autoComplete="new-password"
                  required
                />

                {/* Terms */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  By creating an account you agree to our{" "}
                  <span className="text-green-600 font-medium cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-green-600 font-medium cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </p>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border border-gray-200 text-gray-700 py-4 rounded-2xl font-semibold text-sm hover:bg-gray-50 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={form2.submitting}
                    className="flex-1 bg-green-800 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    {form2.submitting ? (
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
                        Creating…
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </div>
              </form>
            </>
          )}

          {/* ── Step 3: Success ── */}
          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome, {form1.values.fullName.split(" ")[0]}! 🎉
              </h1>
              <p className="text-gray-500 text-sm mb-3">
                Your account has been created successfully.
              </p>
              <p className="text-gray-400 text-xs">
                Redirecting you to your dashboard…
              </p>
              <div className="mt-6 w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-green-600 h-1.5 rounded-full animate-[grow_1.8s_ease-in-out_forwards]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

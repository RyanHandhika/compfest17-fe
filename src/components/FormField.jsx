import { useState } from "react";

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  hint,
  rightLabel,
  autoComplete,
  required,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;
  const hasError = touched && error;

  return (
    <div className="flex flex-col gap-1.5">
      {/* Label row */}
      {(label || rightLabel) && (
        <div className="flex items-center justify-between">
          {label && (
            <label
              htmlFor={name}
              className="text-xs font-semibold text-gray-500 uppercase tracking-wider"
            >
              {label}
              {required && <span className="text-red-400 ml-0.5">*</span>}
            </label>
          )}
          {rightLabel && rightLabel}
        </div>
      )}

      {/* Input wrapper */}
      <div
        className={`flex items-center gap-2 border rounded-xl px-4 py-3 transition-all bg-green-50/40
          ${
            hasError
              ? "border-red-300 ring-2 ring-red-100 bg-red-50/20"
              : "border-gray-200 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100"
          }`}
      >
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
        />

        {/* Password toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0 transition-colors"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        )}

        {/* Email icon */}
        {type === "email" && (
          <svg
            className="w-4 h-4 text-gray-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        )}
      </div>

      {/* Error or hint */}
      {hasError ? (
        <p className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
          <svg
            className="w-3.5 h-3.5 flex-shrink-0"
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
          {error}
        </p>
      ) : hint ? (
        <p className="text-xs text-gray-400 mt-0.5">{hint}</p>
      ) : null}
    </div>
  );
}

export function PasswordStrength({ password }) {
  const checks = [
    { label: "8+ characters", pass: password.length >= 8 },
    { label: "Uppercase letter", pass: /[A-Z]/.test(password) },
    { label: "Number", pass: /[0-9]/.test(password) },
  ];
  const score = checks.filter((c) => c.pass).length;

  const barColor =
    score === 0
      ? "bg-gray-200"
      : score === 1
        ? "bg-red-400"
        : score === 2
          ? "bg-yellow-400"
          : "bg-green-500";
  const label =
    score === 0 ? "" : score === 1 ? "Weak" : score === 2 ? "Fair" : "Strong";
  const labelColor =
    score === 1
      ? "text-red-500"
      : score === 2
        ? "text-yellow-600"
        : "text-green-600";

  if (!password) return null;

  return (
    <div className="mt-1 space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex-1 flex gap-1 h-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex-1 rounded-full transition-all duration-300 ${i <= score ? barColor : "bg-gray-200"}`}
            />
          ))}
        </div>
        {label && (
          <span className={`text-xs font-semibold ${labelColor}`}>{label}</span>
        )}
      </div>
      <div className="flex gap-3">
        {checks.map((c, i) => (
          <span
            key={i}
            className={`text-xs flex items-center gap-1 ${c.pass ? "text-green-600" : "text-gray-400"}`}
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {c.pass ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
            {c.label}
          </span>
        ))}
      </div>
    </div>
  );
}

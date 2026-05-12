export const validators = {
  fullName: (val = "") => {
    if (!val.trim()) return "Full name is required.";
    if (val.trim().length < 2) return "Name must be at least 2 characters.";
    if (val.trim().length > 60) return "Name must be under 60 characters.";
    return "";
  },

  email: (val = "") => {
    if (!val.trim()) return "Email is required.";
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(val)) return "Please enter a valid email address.";
    return "";
  },

  password: (val = "") => {
    if (!val) return "Password is required.";
    if (val.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(val)) return "Include at least one uppercase letter.";
    if (!/[0-9]/.test(val)) return "Include at least one number.";
    return "";
  },

  loginPassword: (val = "") => {
    if (!val) return "Password is required.";
    return "";
  },

  confirmPassword: (val = "", allValues = {}) => {
    if (!val) return "Please confirm your password.";
    if (val !== allValues.password) return "Passwords do not match.";
    return "";
  },

  phone: (val = "") => {
    if (!val.trim()) return ""; // optional
    const cleaned = val.replace(/\D/g, "");
    if (cleaned.length < 8) return "Enter a valid phone number.";
    return "";
  },
};

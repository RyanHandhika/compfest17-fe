import { createContext, useContext, useState, useEffect } from "react";
import { login as loginApi, register as registerApi } from "../api/auth";

const AuthContext = createContext(null);
const SESSION_KEY = "sea_catering_session";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY));

      if (session) setUser(session);
    } catch {
      // ignore
    }
    setLoading(false);
  }, []);

  async function login({ email, password }) {
    const data = await loginApi(email, password);
    localStorage.setItem(SESSION_KEY, JSON.stringify(data.user));
    setUser(data.user);
    return data.user;
  }

  async function register({ fullName, email, password, role }) {
    const data = await registerApi(fullName, email, password, role);
    localStorage.setItem(SESSION_KEY, JSON.stringify(data.user));
    setUser(data.user);
    return data.user;
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

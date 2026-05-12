import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

// Simulate a users "database" in localStorage
const USERS_KEY = "sea_catering_users";
const SESSION_KEY = "sea_catering_session";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session on mount
  useEffect(() => {
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY));
      if (session) setUser(session);
    } catch {
      // ignore
    }
    setLoading(false);
  }, []);

  async function register({ fullName, email, password, role = "user" }) {
    // Simulate async
    await new Promise((r) => setTimeout(r, 600));

    const users = getUsers();
    const exists = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase(),
    );
    if (exists) throw new Error("An account with this email already exists.");

    const newUser = {
      id: Date.now().toString(),
      fullName,
      email,
      password, // NOTE: plain text only for demo — never do this in production
      role,
      createdAt: new Date().toISOString(),
      plan: null,
    };

    saveUsers([...users, newUser]);

    const session = { id: newUser.id, fullName, email, role, plan: null };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return session;
  }

  async function login({ email, password }) {
    await new Promise((r) => setTimeout(r, 600));

    const users = getUsers();
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password,
    );
    if (!found) throw new Error("Invalid email or password. Please try again.");

    const session = {
      id: found.id,
      fullName: found.fullName,
      email: found.email,
      role: found.role,
      plan: found.plan,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return session;
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
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

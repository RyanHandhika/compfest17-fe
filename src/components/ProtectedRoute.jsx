import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children, requiredRole }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-green-200 border-t-green-700 rounded-full animate-spin" />
          <p className="text-sm text-gray-500">Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Wrong role — send to appropriate dashboard
    return (
      <Navigate
        to={user.role === "operator" ? "/operator" : "/user-dashboard"}
        replace
      />
    );
  }

  return children;
}

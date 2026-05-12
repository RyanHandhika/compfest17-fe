import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PlansPage from "./pages/PlanPage";
import SubscribePage from "./pages/SubscribePage";
import UserDashboard from "./pages/UserDashboard";
import OperatorDashboard from "./pages/OperatorDashboard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/plans" element={<PlansPage />} />

        {/* Protected - any logged-in user */}
        <Route
          path="/subscribe"
          element={
            <ProtectedRoute>
              <SubscribePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute requiredRole="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected - operator only */}
        <Route
          path="/operator"
          element={
            <ProtectedRoute requiredRole="operator">
              <OperatorDashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

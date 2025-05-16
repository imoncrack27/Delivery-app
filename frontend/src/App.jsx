import { Routes, Route, Router } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard";
//import ProtectedRoute from "./components/ProtectedRoute";
import RestaurantDashboard from "./pages/dashboard/RestaurantDashboard";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Dashboards */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            //<ProtectedRoute>
            <CustomerDashboard />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/restaurant-owner"
          element={
            //<ProtectedRoute>
            <RestaurantDashboard />
            //</ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

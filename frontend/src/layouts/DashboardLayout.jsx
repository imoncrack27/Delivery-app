// src/layouts/DashboardLayout.jsx
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
}

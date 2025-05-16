import Navbar from "../../components/Navbar";

export default function CustomerDashboard() {
  const customerName = "John"; // Replace with actual user context/state

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar role="customer" />

      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
          Welcome back, {customerName}! 👋
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2 text-red-500">
              Your Orders
            </h2>
            <p className="text-gray-600">View and manage your recent orders.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2 text-red-500">
              Restaurants
            </h2>
            <p className="text-gray-600">
              Explore your favorite local restaurants.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2 text-red-500">
              Favorites
            </h2>
            <p className="text-gray-600">
              Manage your favorite dishes and restaurants.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-red-500">
        Foodie
      </Link>

      <div className="flex items-center gap-4">
        {role === "customer" && (
          <>
            <Link
              to="/dashboard/orders"
              className="text-gray-700 hover:text-red-500"
            >
              Orders
            </Link>
            <Link
              to="/dashboard/restaurants"
              className="text-gray-700 hover:text-red-500"
            >
              Restaurants
            </Link>
          </>
        )}

        {role === "restaurant" && (
          <>
            <Link
              to="/dashboard/menu"
              className="text-gray-700 hover:text-red-500"
            >
              Menu
            </Link>
            <Link
              to="/dashboard/orders"
              className="text-gray-700 hover:text-red-500"
            >
              Orders
            </Link>
          </>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

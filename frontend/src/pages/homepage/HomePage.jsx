import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-red-800">
      {/* Hero Section with Image */}
      <div className="relative bg-cover bg-center h-[100vh] flex items-center justify-center text-white bg-hero-image">
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <div className="z-10 text-center px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Welcome to <span className="text-red-500">Foodie</span>!
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">
            Order your favorite meals from local restaurants delivered straight
            to your door.
          </p>
        </div>

        {/* Login & Register Buttons (Fixed to Top-Right) */}
        <div className="absolute top-4 right-4 flex gap-6">
          <Link
            to="/login"
            className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-red-500 text-red-500 px-6 py-3 rounded-lg text-lg hover:bg-red-50 transition"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Features of Foodie
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="w-full sm:w-1/3 md:w-1/4 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Wide Variety of Restaurants
              </h3>
              <p className="text-gray-600">
                Choose from a wide range of local restaurants to satisfy your
                cravings.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get your meals delivered quickly and fresh with our reliable
                delivery system.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Easy Payments
              </h3>
              <p className="text-gray-600">
                Pay seamlessly through various secure payment options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <p className="text-xl text-gray-700">
                Browse through the menu and select your items.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center">
                2
              </div>
              <p className="text-xl text-gray-700">
                Add items to your cart and proceed to checkout.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center">
                3
              </div>
              <p className="text-xl text-gray-700">
                Choose your preferred payment method and confirm.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center">
                4
              </div>
              <p className="text-xl text-gray-700">
                Wait for your food to be delivered right to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 w-100">
        <p>&copy; 2025 Foodie. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

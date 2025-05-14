import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-full max-w-sm bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />
        <select className="w-full mb-4 p-2 border rounded">
          <option value="">Select Role</option>
          <option value="customer">Customer</option>
          <option value="restaurant">Restaurant</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-green-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;

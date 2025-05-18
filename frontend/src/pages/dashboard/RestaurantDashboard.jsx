import { useEffect, useState } from "react";
import axios from "axios";

const RestaurantDashboard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  // Fetch menu on mount
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      // If you're storing token in localStorage and sending as Bearer token, use this:
      // const token = localStorage.getItem("token");
      // const headers = { Authorization: `Bearer ${token}` };

      // If you use httpOnly cookie for JWT, just send withCredentials:true and no headers needed
      const response = await axios.get("http://localhost:5000/api/menu", {
        withCredentials: true, // send cookies automatically
      });
      console.log("Menu data:", response.data);
      setMenuItems(response.data.menu || []);
    } catch (err) {
      console.error("Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setForm({ name: "", description: "", price: "" });
    setEditingItem(null);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setForm(item);
    setEditingItem(item);
    setModalOpen(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (editingItem) {
        res = await axios.put(
          `http://localhost:5000/api/menu/${editingItem._id}`,
          form,
          { withCredentials: true }
        );
        setMenuItems((prev) =>
          prev.map((item) => (item._id === editingItem._id ? res.data : item))
        );
      } else {
        res = await axios.post("http://localhost:5000/api/menu", form, {
          withCredentials: true,
        });
        setMenuItems((prev) => [...prev, res.data]);
      }
      setModalOpen(false);
    } catch (err) {
      console.error("Submit failed:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`, {
        withCredentials: true,
      });
      setMenuItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (loading) return <p>Loading menu...</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Restaurant Dashboard</h1>
        <button
          onClick={openCreateModal}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Menu Item
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {menuItems.map((item) => (
          <div key={item._id} className="bg-white shadow p-4 rounded">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="mt-1 font-bold">₱{item.price}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => openEditModal(item)}
                className="text-sm bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingItem ? "Edit" : "Add"} Menu Item
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  {editingItem ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDashboard;

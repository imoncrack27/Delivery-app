import { useState } from "react";
import Navbar from "../../components/Navbar";
import { dummyMenu, dummyOrders } from "../../data/restaurantDummy";
import toast from "react-hot-toast";
import AddMenuModal from "../../components/AddMenuModal";
import EditMenuModal from "../../components/EditMenuModal";
import DeleteConfirmModal from "../../components/DeleteConfirmModal";

export default function RestaurantOwnerDashboard() {
  const [menuItems, setMenuItems] = useState(dummyMenu);
  const [orders] = useState(dummyOrders);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDelete = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Item deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar with role="restaurant" */}
      <Navbar role="restaurant" />

      <main className="max-w-6xl mx-auto p-4 space-y-12">
        {/* 1. Menu Management Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Menu</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            + Add Menu Item
          </button>

          {showAddModal && (
            <AddMenuModal
              onClose={() => setShowAddModal(false)}
              onAdd={(newItem) => {
                setMenuItems([...menuItems, newItem]);
                toast.success("Item added successfully!");
              }}
            />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <p className="text-green-600 font-semibold">₱{item.price}</p>
                <div className="flex justify-between items-center text-center gap-4">
                  <div className="">
                    <button
                      onClick={() => {
                        setEditItem(item);
                        setShowEditModal(true);
                      }}
                      className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    {showEditModal && (
                      <EditMenuModal
                        item={editItem}
                        onClose={() => setShowEditModal(false)}
                        onUpdate={(updatedItem) => {
                          setMenuItems((prev) =>
                            prev.map((item) =>
                              item.id === updatedItem.id ? updatedItem : item
                            )
                          );
                          toast.success("Item updated!");
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setItemToDelete(item);
                        setShowDeleteModal(true);
                      }}
                      className="mb-4   px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                    {showDeleteModal && itemToDelete && (
                      <DeleteConfirmModal
                        item={itemToDelete}
                        onClose={() => setShowDeleteModal(false)}
                        onDelete={handleDelete}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Orders Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Incoming Orders
          </h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-6 rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div>
                  <p className="font-semibold">Order #{order.id}</p>
                  <p>Customer: {order.customer}</p>
                  <p>Items: {order.items.join(", ")}</p>
                  <p>Total: ₱{order.total}</p>
                </div>
                <span
                  className={`mt-3 sm:mt-0 px-3 py-1 rounded-full text-sm ${
                    order.status === "pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : order.status === "accepted"
                      ? "bg-green-200 text-green-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

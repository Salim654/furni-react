import { useEffect, useState } from "react";
import { getMyOrders, cancelOrder } from "../services/orderService";
import { ChevronDown, ChevronUp } from "lucide-react";
import SwitchSelector from "react-switch-selector";
import { confirmAlert } from "react-confirm-alert"; 
import { ToastContainer, toast } from "react-toastify";
import "react-confirm-alert/src/react-confirm-alert.css"; 
import "react-toastify/dist/ReactToastify.css";
import noOrderImg from "../assets/images/no-order.svg";

export default function ListOrders({ token }) {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");

  const statusOptions = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Processing", value: "processing" },
    { label: "Completed", value: "completed" },
  ];

  // Fetch orders and remove cancelled ones
  const fetchOrders = async () => {
    try {
      const data = await getMyOrders(token);
      setOrders((data.orders || []).filter((order) => order.status !== "cancelled"));
    } catch (err) {
      console.error("Failed to load orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  const toggleExpand = (id) => {
    setExpandedOrder(expandedOrder === id ? null : id);
  };

  const handleCancel = (orderId) => {
    confirmAlert({
      title: "Confirm Cancel",
      message: "Are you sure you want to cancel this order?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await cancelOrder(orderId, token);
              toast.success("Order cancelled successfully!");
              // Remove cancelled order from state immediately
              setOrders((prev) => prev.filter((o) => o.id !== orderId));
            } catch (err) {
              console.error("Cancel failed:", err);
              toast.error("Failed to cancel order!");
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  // Filter orders (already excluded cancelled)
  const filteredOrders =
    filterStatus === "all"
      ? orders
      : orders.filter((order) => order.status === filterStatus);

  const showNoOrdersImage = filteredOrders.length === 0;

  return (
    <div className="orders-section">
      <div className="container">
        {/* Status filter */}
        {orders.length > 0 && (
          <div className="row mb-4">
            <div className="col-12 d-flex justify-content-center">
              <div className="w-100" style={{ maxWidth: 500 }}>
                <SwitchSelector
                  border={1}
                  options={statusOptions}
                  initial={0}
                  onChange={(value) => setFilterStatus(value)}
                  backgroundColor="#f0f0f0"
                  selectedColor="#fff"
                  optionBorderColor="#4f46e5"
                  optionColor="#4f46e5"
                  fontSize={14}
                />
              </div>
            </div>
          </div>
        )}

        {/* Orders list */}
        {showNoOrdersImage ? (
          <div className="text-center py-24">
            <img
              src={noOrderImg}
              alt="No orders"
              className="mx-auto mb-4"
              style={{ width: "40%", height: "auto" }}
            />
            {orders.length === 0 ? (
              <>
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  No Orders Found
                </p>
                <p className="text-gray-500 max-w-md mx-auto">
                  You haven’t placed any orders yet. Once you do, they’ll appear here.
                </p>
              </>
            ) : (
              <p className="text-gray-500 text-xl">No orders with this status.</p>
            )}
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="border rounded-xl shadow p-4 bg-white mb-4"
            >
              {/* Order header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(order.id)}
              >
                <div>
                  <p className="font-bold">Order #{order.id}</p>
                  <p className="text-sm text-gray-500">
                    Status:{" "}
                    <span className="capitalize text-blue-600">{order.status}</span>{" "}
                    | Total: <span className="font-semibold">{order.total} DT</span>
                  </p>
                </div>
                {expandedOrder === order.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </div>

              {/* Expanded order items */}
              {expandedOrder === order.id && (
                <div className="mt-3 border-t pt-3 overflow-x-auto">
                  <table className="w-full table-auto">
                    <tbody>
                      {order.items.map((item) => (
                        <tr key={item.id} className="align-middle" style={{ height: "60px" }}>
                          <td className="p-2">
                            <div
                              style={{
                                width: "60px",
                                height: "60px",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                src={`http://127.0.0.1:8000/storage/${item.product.image}`}
                                alt={item.product.name}
                                style={{ width: "60px", height: "60px", objectFit: "cover" }}
                              />
                            </div>
                          </td>
                          <td className="p-2 text-sm font-medium">{item.product.name}</td>
                          <td className="p-2 text-sm text-gray-500 text-center">Qty: {item.quantity}</td>
                          <td className="p-2 text-sm font-semibold text-blue-600 text-right">{item.price} DT</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Cancel button for pending orders */}
                  {order.status === "pending" && (
                    <div className="mt-4 text-right">
                      <button
                        onClick={() => handleCancel(order.id)}
                        style={{
                          backgroundColor: "#eb8383",
                          color: "#fff",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          transition: "0.2s",
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#f17878")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#eb8383")}
                      >
                        Cancel Order
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}

        {/* Toast container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}

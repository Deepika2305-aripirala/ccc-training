import { useState, useEffect } from "react";
import { getOrders,getOrderById,deleteOrder } from "../services/order.services";
import OrderCard from "../components/OrderCard";
import OrderForm from "../components/OrderForm";

export default function Order() {

  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  async function loadOrders() {
    try {
      const response = await getOrders();
      setOrders(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function handleDelete(id) {
  try {
    await deleteOrder(id);
    await loadOrders();
    } catch (error) {
    console.log(error.message);
    }
    }
    async function handleEdit(id) {
  try {
    const response = await getOrderById(id);
    console.log(response.data.data);
    setSelectedOrder(response.data.data);
  } catch (error) {
    console.log(error.message);
  }
}
  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-2/3 bg-gray-100 p-5">
        <OrderForm
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      fetchOrders={loadOrders}
      />
        {orders.map((order) => (
        <OrderCard
          key={order._id}
          data={order}
          onDelete = {handleDelete}
          onEdit = {handleEdit}
        />
      ))}
      </div>
    </div>
  );
}
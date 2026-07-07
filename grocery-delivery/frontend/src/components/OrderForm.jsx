import { useState, useEffect } from "react";
import { getUsers } from "../services/user_services";
import { getProduct } from "../services/product.services";
import { createOrder, updateOrder } from "../services/order.services";

const initialState = {
  user: "",
  products: [
    {
      product: "",
      quantity: 1,
    },
  ],
};

export default function OrderForm({
  selectedOrder,
  setSelectedOrder,
  fetchOrders,
}) {
  const [formData, setFormData] = useState(initialState);

  const [users, setUsers] = useState([]);
  const [productsList, setProductsList] = useState([]);

  async function loadData() {
    try {
      const userResponse = await getUsers();
      const productResponse = await getProduct();

      setUsers(userResponse.data.data);
      setProductsList(productResponse.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (selectedOrder) {
      setFormData({
        user: selectedOrder.user._id,
        products: selectedOrder.products.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
        })),
      });
    } else {
      setFormData(initialState);
    }
  }, [selectedOrder]);

  function handleUserChange(e) {
    setFormData({
      ...formData,
      user: e.target.value,
    });
  }

  function handleProductChange(index, field, value) {
    const updatedProducts = [...formData.products];

    updatedProducts[index][field] =
      field === "quantity" ? Number(value) : value;

    setFormData({
      ...formData,
      products: updatedProducts,
    });
  }

  function addProduct() {
    setFormData({
      ...formData,
      products: [
        ...formData.products,
        {
          product: "",
          quantity: 1,
        },
      ],
    });
  }

  function removeProduct(index) {
    const updatedProducts = [...formData.products];

    updatedProducts.splice(index, 1);

    setFormData({
      ...formData,
      products: updatedProducts,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (selectedOrder) {
        await updateOrder(selectedOrder._id, formData);
      } else {
        await createOrder(formData);
      }

      await fetchOrders();

      setFormData(initialState);
      setSelectedOrder(null);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleCancel() {
    setFormData(initialState);
    setSelectedOrder(null);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded shadow mb-5"
    >
      <h2 className="text-xl font-semibold mb-4">
        {selectedOrder ? "Update Order" : "Create Order"}
      </h2>

      <div className="mb-4">
        <label className="block mb-2">Customer</label>

        <select
          value={formData.user}
          onChange={handleUserChange}
          className="border w-full p-2 rounded"
          required
        >
          <option value="">Select Customer</option>

          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <h3 className="font-semibold mb-2">Products</h3>

      {formData.products.map((item, index) => (
        <div
          key={index}
          className="border rounded p-3 mb-3"
        >
          <div className="mb-3">
            <label className="block mb-2">Product</label>

            <select
              value={item.product}
              onChange={(e) =>
                handleProductChange(index, "product", e.target.value)
              }
              className="border w-full p-2 rounded"
              required
            >
              <option value="">Select Product</option>

              {productsList.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="block mb-2">Quantity</label>

            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                handleProductChange(index, "quantity", e.target.value)
              }
              className="border w-full p-2 rounded"
              required
            />
          </div>

          {formData.products.length > 1 && (
            <button
              type="button"
              onClick={() => removeProduct(index)}
              className="text-red-500"
            >
              Remove Product
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addProduct}
        className="border px-4 py-2 rounded hover:bg-gray-100 mb-4"
      >
        + Add Product
      </button>

      <div className="flex gap-2">
        <button
          type="submit"
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          {selectedOrder ? "Update Order" : "Create Order"}
        </button>

        {selectedOrder && (
          <button
            type="button"
            onClick={handleCancel}
            className="border px-4 py-2 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
import { useState,useEffect } from "react";
import { createProduct,updateProductById } from "../services/product.services";

const initialState={
  productId: "",
  name: "",
  price: ""
};
export default function ProductForm({selectedProduct,setSelectedProduct,fetchProduct}){
    const [formData,setFormData] = useState(initialState);
    useEffect(()=>{
      if(selectedProduct){
        setFormData({
          productId: selectedProduct.productId,
          name: selectedProduct.name,
          price: selectedProduct.price
        });
      }
    },[selectedProduct]);

    function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
      e.preventDefault();
  
      try {
        if (selectedProduct) {
          await updateProductById(selectedProduct._id, formData);
        } else {
          await createProduct(formData);
        }
        await fetchProduct();
  
        setFormData(initialState);
        setSelectedProduct(null);
      } catch (error) {
        console.log(error.message);
      }
    }

    function handleCancel() {
    setFormData(initialState);
    setSelectedProduct(null);
  }

    return <>
      <form onSubmit={handleSubmit} className="bg-white p-4 mb-5 rounded shadow">
      <div className="mb-3">
        <label className="block mb-1">product ID</label>
        <input
          type="text"
          name="productId"
          value={formData.productId}
          onChange={handleChange}
          className="border w-full p-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border w-full p-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border w-full p-2 rounded"
          required
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          {selectedProduct ? "Update Product" : "Create Product"}
        </button>

        {selectedProduct && (
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
    </>
}
import { useState,useEffect } from "react";
import {getProduct,getProductById,deleteProductById} from '../services/product.services'
import ProductForm from '../components/ProductForm'
import PListCard from '../components/PListCard'
export default function Product(){

  const [products,setProducts] = useState([]);
  const [selectedProduct,setSelectedProduct] = useState(null);

  async function loadProducts(){
    try{
      const response = await getProduct();
      setProducts(response.data.data);
    }catch(error){
        console.log(error.message);
    }
  }
  async function handleDelete(id){
    try{
        await deleteProductById(id);
        await loadProducts();
    }catch(error){
      console.log(error.message);
    }
  }
  async function handleEdit(id){
    try{
      const response = await getProductById(id);
      setSelectedProduct(response.data.data);
    }
    catch(error){
      console.log(error.message);
    }
  }
  useEffect(()=>{
    loadProducts();
  },[]);
  return(
    <>
      <div className="flex w-full h-screen justify-center items-center font-mono">
      <div className="bg-gray-100 w-1/3 p-5">
      <div className="text-center underline my-1.5">Products List</div>
      <div className='pt-5'>
      <ProductForm
      selectedProduct = {selectedProduct}
      setSelectedProduct = {setSelectedProduct}
      fetchProduct = {loadProducts}/> 
      <div className='pt-5'>
        {products.length === 0 ? (
        <div className='text-center'>No Products Found</div>
          ): (products.map((product)=>(
              <PListCard key={product._id} data={product} onDelete={handleDelete} onEdit={handleEdit}/>
            )))}
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
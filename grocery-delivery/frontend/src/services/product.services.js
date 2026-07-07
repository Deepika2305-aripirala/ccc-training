import api from '../api/axios'

export function createProduct(data){
  return api.post("/products",data);
}

export function getProduct(){
  return api.get("/products");
}

export function getProductById(id){
  return api.get(`/products/${id}`);
}

export function updateProductById(id,data){
  return api.put(`/products/${id}`,data);
}
export function deleteProductById(id){
  return api.delete(`/products/${id}`);
}
import axios from "axios";

export const getProducts = async () => {
axios.get("http://localhost:5000/products")
  .then(res => console.log(res))
  .catch(err => {
    console.log(err.message);
    console.log(err.code);
    console.log(err.config);
  });
};
export const getProduct = async (id) => {
  const response = await axios.get(`/products/${id}`);
    if (response.status !== 200) {
      throw new Error('Failed to fetch product');
    }
    console.log(response.data);
    return response.data;
};
export const createProduct = async (product) => {
  const response = await axios.post('/products', product);
  if (response.status !== 201) {
    throw new Error('Failed to create product');
  }
  console.log(response.data);
  return response.data;
};
import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "http://localhost:5000";

export const createUser = async (data) => {
   try {
    const res = await axios.post(`${API_URL}/users`, data);
    return res.data;
  } catch (error) {
    throw error;
  }

};
export const createCategory = async (data) => {
   try {
    const res = await axios.post(`${API_URL}/categories`, data);
    return res.data;
  } catch (error) {
    throw error;
  }

};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData);
    toast.success("Product created successfully");
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    toast.error("Error creating product");
    throw error;
  }
};

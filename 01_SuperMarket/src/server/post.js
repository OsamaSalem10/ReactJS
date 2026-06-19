import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "http://localhost:5000";

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    toast.success("User created successfully");
    return response.data;
  } catch (errors) {
  if (errors.response?.data?.errors?.length > 0) {
    toast.error(errors.response.data.errors[0].msg);
  } else if (errors.response?.data?.message) {
    toast.error(errors.response?.data.message);
    console.log(errors.response?.data);
  } else {
    toast.error("Something went wrong");
  }

  throw errors;
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

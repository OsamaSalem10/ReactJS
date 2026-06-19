import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "http://localhost:5000";
export const _editUser = async (id, userData) => {
  try {
    const { data } = await axios.put(`${API_URL}/users/${id}`, userData);
    return data;
  } catch (error) {
    console.error("Edit user error:", error);
    if (!error.response) {
      toast.error("Server is offline");
    } else {
      toast.error(error.response.data?.message || "Something went wrong");
    }
    return null;
  }
};
export const _editProduct = async (id, productData) => {
  try {
    const { data } = await axios.put(`${API_URL}/products/${id}`, productData);
    return data;
  } catch (error) {
    console.error("Edit product error:", error);
    if (!error.response) {
      toast.error("Server is offline");
    } else {
      toast.error(error.response.data?.message || "Something went wrong");
    }
    return null;
  }
};
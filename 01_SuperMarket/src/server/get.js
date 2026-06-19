import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "http://localhost:5000";
export async function _getAllUsers() {
  try {
    const { data } = await axios.get(`${API_URL}/users`);
    return data;
  } catch (error) {
    console.error("Get users error:", error);

    if (!error.response) {
      toast.error("Server is offline");
    } else {
      toast.error(error.response.data?.message || "Something went wrong");
    }

    return [];
  }
}
export const _getProducts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/products`);
    return data;
  } catch (error) {
    console.error("Get products error:", error);

    if (!error.response) {
      toast.error("Server is offline");
    } else {
      toast.error(error.response.data?.message || "Something went wrong");
    }

    return [];
  }
};

export const _getOrders = async () => {
   try {
    const { data } = await axios.get(`${API_URL}/orders`);
    return data;
  } catch (error) {
    console.error("Get orders error:", error);

    if (!error.response) {
      toast.error("Server is offline");
    } else {
      toast.error(error.response.data?.message || "Something went wrong");
    }

    return [];
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export function logOut() {
  localStorage.removeItem("token");
}
export function getToken() {
  return localStorage.getItem("token");
}

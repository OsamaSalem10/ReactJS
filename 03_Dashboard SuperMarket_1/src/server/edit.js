import axios from "axios";
const API_URL = "http://localhost:5000";
export const _editUser = async (id, data) => {
  try {
    const res = await axios.put(`${API_URL}/users/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const _editCategory = async (id, data) => {
  try {
    const res = await axios.put(`${API_URL}/categories/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const _editProduct = async (id, data) => {
    try {
    const res = await axios.put(`${API_URL}/products/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

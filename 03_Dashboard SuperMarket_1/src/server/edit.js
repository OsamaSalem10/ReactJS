import api from "./axios"
export const _editUser = async (id, data) => {
  try {
    const res = await api.put(`users/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const _editCategory = async (id, data) => {
  try {
    const res = await api.put(`/categories/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const _editProduct = async (id, data) => {
    try {
    const res = await api.put(`/products/${id}`, data);
    console.log(res)
    return res.data;
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
};
export const _editCart = async (id, data) => {
    try {
    const res = await api.put(`/cart/${id}`, data);
    console.log(res)
    return res.data;
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
};

import api from "./axios"



export const _createUser = async (data, navigate) => {
  try {
    const res = await api.post(`/users`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const createCategory = async (data) => {
  try {
    const res = await api.post(`/categories`, data);
    return res.data;
  } catch (error) {
    throw error;
  }

};

export const createProduct = async (productData) => {
  try {
    const response = await api.post(`/products`, productData);

    return response.data;
  } catch (error) {
  

    throw error;
  }
};
export const _createCart = async (data) => {
  try {
    const response = await api.post(`/cart`, data);
console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error;
  }
};
export const createOrder = async (orderData) => {
  try {
    const response = await api.post(`/orders`, orderData);

    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const createOrderList = async (orderListData) => {
  try {
    const response = await api.post(`/order-items`, orderListData);
    console.log("Order list created successfully:", response); return response.data;
  } catch (error) {
    console.error("Error creating order list:", error);
    throw error;
  }
};

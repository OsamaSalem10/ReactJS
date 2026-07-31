import api from "./axios";

export const _getAllUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};

export async function _getAllCategories() {
  const { data } = await api.get("/categories");
  return data;
}
export const _getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const _getOrders = async () => {
  const { data } = await api.get("/orders");
  return data;
};
export const _orderList = async () => {
  const { data } = await api.get("/order-items");
  return data;
};
export const _getCarts = async (id) => {
  const { data } = await api.get(`/cart/${id}`);
  return data;
};



import api from "./axios"

class EditService {
  async editUser(id, formData, update, navigate) {
    try {
      const { data } = await api.put(`/users/${id}`, formData);
      update(data);
      navigate("/customers");
    } catch (error) {
      console.error("Error editing user:", error);

      throw error;
    }
  }
  async editCategory(id, formData, update, navigate) {
    try {
      const { data } = await api.put(`/categories/${id}`, formData);
      update(data);
      navigate("/categories");
    } catch (error) {
      console.error("Error editing category:", error);
      throw error;
    }
  }
  async editProduct(id, formData, update, navigate) {
    try {
      const { data } = await api.put(`/products/${id}`, formData);
      update(data);
      navigate("/products");
    } catch (error) {
      console.error("Error editing product:", error);
      throw error;
    }
  }
  async editOrder(id, formData, update, navigate) {
    try {
      const { data } = await api.put(`/orders/${id}`, formData);
      update(data);
      navigate("/orders");
    } catch (error) {
      console.error("Error editing order:", error);
      throw error;
    }
  }
  async editWishlist(id, formData, update, navigate) {
    try {
      const { data } = await api.put(`/wishlists/${id}`, formData);
      update(data);
      navigate("/wishlist");
    } catch (error) {
      console.error("Error editing wishlist:", error);
      throw error;
    }
  }
  async editCart(id, formData, update, navigate) {
    try {
      const { data } = await api.put(`/carts/${id}`, formData);
      update(data);
      navigate("/carts");
    } catch (error) {
      console.error("Error editing cart:", error);
      throw error;
    }
  }
  async editOrderItem(id, formData, update, navigate) {
    try {
      const { data } = await api.put(`/order-items/${id}`, formData);
      update(data);
      navigate("/order-items");
    } catch (error) {
      console.error("Error editing order item:", error);
      throw error;
    }
  }
}
export default EditService;
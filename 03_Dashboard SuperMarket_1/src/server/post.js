import api from "./axios"
import { toast } from "react-toastify";

class PostService {
  async createUser(formData, update, navigate) {
    try {
      const { data } = await api.post("/users", formData);

      toast.success("User created successfully!");

      await update();

      navigate("/customers");

      return data;
    } catch (error) {
      toast.error(
        error.response?.data?.errors?.[0]?.msg ||
        error.response?.data?.message ||
        "Something went wrong."
      );

      throw error;
    }
  }
  async createCategory(formData, update, navigate) {
    try {
      const { data } = await api.post("/categories", formData);

      toast.success("Category created successfully!");

      await update();

      navigate("/categories");

      return data;
    } catch (error) {
      toast.error(
        error.response?.data?.errors?.[0]?.msg ||
        error.response?.data?.message ||
        "Something went wrong."
      );

      throw error;
    }
  }

  async createProduct(formData, update, navigate) {
    try {
      const { data } = await api.post("/products", formData);

      toast.success("Product created successfully!");

      await update();

      navigate("/products");

      return data;
    } catch (error) {
      toast.error(
        error.response?.data?.errors?.[0]?.msg ||
        error.response?.data?.message ||
        "Something went wrong."
      );

      throw error;
    }
  }
  async createWishlist(formData, update, navigate) {
    try {
      const { data } = await api.post("/wishlist", formData);

      toast.success("Wishlist created successfully!");

      await update();

      navigate("/wishlist");

      return data;
    } catch (error) {
      toast.error(
        error.response?.data?.errors?.[0]?.msg ||
        error.response?.data?.message ||
        "Something went wrong."
      );

      throw error;
    }
  }
  async createCart(formData, update, navigate) {
    try {
      const { data } = await api.post("/carts", formData);

      toast.success("Cart created successfully!");

      await update();

      navigate("/carts");

      return data;
    } catch (error) {
      toast.error(
        error.response?.data?.errors?.[0]?.msg ||
        error.response?.data?.message ||
        "Something went wrong."
      );

      throw error;
    }
  }
    async createOrder(formData, update, navigate) {
      try {
        const { data } = await api.post("/orders", formData);
        await update();
        navigate("/orders");
        toast.success("Order created successfully!");
        return data;
      } catch (error) {
        toast.error(
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "Something went wrong."
        );

        throw error;
      }
    }
    async createOrderItem(formData, update, navigate) {
      try {
        const { data } = await api.post("/order-items", formData);
        await update();
        navigate("/order-items");
        toast.success("Order item created successfully!");
        return data;
      } catch (error) {
        toast.error(
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "Something went wrong."
        );
      }
    }
  
}
export default PostService;




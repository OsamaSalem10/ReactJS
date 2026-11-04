import { toast } from "react-toastify";
import api from "./axios";

class ApiServiceGet {
  /* ================= USERS ================= */

  static async getAllUsers() {
    try {
      const { data } = await api.get("/users");
      return data.result;
    } catch (error) {
        if (!error.response) {
        toast.error("تعذر الاتصال بالسيرفر، حاول مرة أخرى");
      }else {
        toast.error(
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "حدث خطأ ما."
        );
      }
      throw error;
    }
  }

  /* ================= CATEGORIES ================= */

  static async getAllCategories() {
    try {
      const { data } = await api.get("/categories");
      return data.result;
    } catch (error) {
      if (!error.response) {
        toast.error("تعذر الاتصال بالسيرفر، حاول مرة أخرى");
      } else {
        toast.error(
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "حدث خطأ ما."
        );
      }
      throw error;
    }
  }

  /* ================= PRODUCTS ================= */

  static async getProducts() {
    try {
      const { data } = await api.get("/products");
      return data.result;
    } catch (error) {
      if (!error.response) {
        toast.error("تعذر الاتصال بالسيرفر، حاول مرة أخرى");
      } else {
        toast.error(
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "حدث خطأ ما."
        );
      }
      throw error;
    }
  }

  /* ================= ORDERS ================= */

  static async getOrders() {
    try {
      const { data } = await api.get("/orders");
      return data.result;
    } catch (error) {
      if (!error.response) {
        toast.error("تعذر الاتصال بالسيرفر، حاول مرة أخرى");
      } else {
        toast.error(
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "حدث خطأ ما."
        );
      }
      throw error;
    }
  }

  /* ================= ORDER ITEMS ================= */

  static async getOrderItems() {
    try {
      const { data } = await api.get("/order-items");
      return data.result;
    } catch (error) {
      if (!error.response) {
        toast.error("تعذر الاتصال بالسيرفر، حاول مرة أخرى");
      } else {
        toast.error(
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "حدث خطأ ما."
        );
      }
      throw error;
    }
  }

  /* ================= CARTS ================= */

  static async getCarts() {
    try {
      const { data } = await api.get("/carts");
      return data.result;
    } catch (error) {
      if (!error.response) {
        toast.error("تعذر الاتصال بالسيرفر، حاول مرة أخرى");
      } else {
        toast.error(
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "حدث خطأ ما."
        );
      }
      throw error;
    }
  }

  /* ================= WISHLISTS ================= */

  static async getWishlist() {
    try {
      const { data } = await api.get("/wishlists");
      return data.result;
    } catch (error) {
      if (!error.response) {
        toast.error("تعذر الاتصال بالسيرفر، حاول مرة أخرى");
      } else {
        toast.error(
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "حدث خطأ ما."
        );
      }
      throw error;
    }
  }

  /* ================= COMMENTS ================= */

  static async getComments() {
    try {
      const { data } = await api.get("/comments");
      return data.result;
    } catch (error) {
      if (!error.response) {
        toast.error("تعذر الاتصال بالسيرفر، حاول مرة أخرى");
      } else {
        toast.error(
          error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          "حدث خطأ ما."
        );
      }
     throw error;
    }
  }
}

export default ApiServiceGet;

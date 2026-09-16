import api from "./axios";


/* =========================================================
   USERS
========================================================= */

export const _getAllUsers = async () => {

    const { data } =
        await api.get("/users");
    return data.result;
};


/* =========================================================
   CATEGORIES
========================================================= */

export const _getAllCategories = async () => {

    const { data } =
        await api.get("/categories");

    return data.result;
};


/* =========================================================
   PRODUCTS
========================================================= */

export const _getProducts = async () => {

    const { data } =
        await api.get("/products");

    return data.result;
};


/* =========================================================
   ORDERS
========================================================= */

export const _getOrders = async () => {

    const { data } =
        await api.get("/orders");

    return data.result;
};




/* =========================================================
   ORDER ITEMS
========================================================= */

export const _getOrderItems = async (id) => {

    const { data } =
        await api.get(
            `/order-items`
        );

    return data.result;
};


/* =========================================================
   CART
========================================================= */

export const _getCarts = async (id) => {

    const { data } =
        await api.get(
            `/carts`
        );

    return data.result;
};
/* =========================================================
   Wishlist
========================================================= */

export const _getWishlist = async (id) => {

    const { data } =
        await api.get(
            `/wishlist`
        );

    return data.result;
};
/* =========================================================
   Comments
========================================================= */

export const _getComments = async (id) => {

    const { data } =
        await api.get(
            `/comments`
        );

    return data.result;
};
import api from "./axios";

export const _deleteUser = async (id) => {
    try {
        const res = await api.delete(`/users/${id}`)
        return res.data
    } catch (error) {
        throw error;
    }
}
export const _deleteCategory = async (id) => {
    try {
        const res = await api.delete(`/categories/${id}`)
        return res.data
    } catch (error) {
        throw error;
    }
}
export const _deleteProduct = async (id) => {
    try {
        const res = await api.delete(`/products/${id}`)
        return res.data
    } catch (error) {
        throw error;
    }
}
export const _deleteOrder = async (id) => {
    try {
        const res = await api.delete(`/orders/${id}`)
        return res.data
    } catch (error) {
        throw error;
    }
}
export const _deleteCart = async (id) => {
    try {
        const res = await api.delete(`/cart/${id}`)
        return res.data
    } catch (error) {
        throw error;
    }
}


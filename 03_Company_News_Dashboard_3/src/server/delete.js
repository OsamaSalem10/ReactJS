import api from "./axios";
export const deleteUser = async (id) => {
    try {
        const res = await api.delete(`/users/${id}`)
        return res.data
    } catch (error) {
        throw error;
    }
}
export const deleteCategory = async (id) => {
    try {
        const res = await api.delete(`/categories/${id}`)
        return res.data
    } catch (error) {
        throw error;
    }
}
export const deleteCompany = async (id) => {
    try {
        const res = await api.delete(`/companies/${id}`)
        return res.data
    } catch (error) {
        throw error;
    }
}
import api from "./axios";
export const editUser = async (id, user) => {
    try {
        const res = await api.put(`/users/${id}`, user);
        console.log("User updated successfully:", res);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const editCategory = async (id, category) => {
    try {
        const res = await api.put(`/categories/${id}`, category);
        console.log("Category updated successfully:", res);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const editCompany = async (id, company) => {
    try {
        const res = await api.put(`/companies/${id}`, company);
        console.log("Company updated successfully:", res);
        return res.data;
    } catch (error) {
        throw error;
    }
}
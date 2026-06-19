import axios from "axios";
const API_URL = "http://localhost:5000";

export const _deleteUser = async (id) => {
    try {
        const res = await axios.delete(`${API_URL}/users/${id}`)
        return res.data
    } catch (error) {
        throw error;
    }
}
export const _deleteCategory = async (id) => {
    try {
        const res = await axios.delete(`${API_URL}/categories/${id}`)
        return res.data
    } catch (error) {
        throw error;
    }
}


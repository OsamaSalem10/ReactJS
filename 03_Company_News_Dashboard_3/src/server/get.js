import api from "./axios"

export const GetAllUsers = async () => {
    const response = await api.get("/users");
    return response.data;
}
export const GetAllCategories = async () => {
    const response = await api.get("/categories");
    return response.data;
}
export const GetAllCompanies = async () => {
    const response = await api.get("/companies");
    return response.data;
}
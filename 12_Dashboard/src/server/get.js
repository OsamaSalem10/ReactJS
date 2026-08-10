import api from "./axios"

export const GetAllUsers = async () => {
    const response = await api.get("/users");
    return response.data;
}
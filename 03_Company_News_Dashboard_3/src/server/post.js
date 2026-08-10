import api from "./axios";
export const createUser = async (user) => {
   try {
    const res = await api.post(`/users`, user);
    return res.data;
  } catch (error) {
    throw error;
  }
}
export const createCategory = async (category) => {
   try {
    const res = await api.post(`/categories`, category);
    console.log("Category created successfully:", res);
    return res.data;
  } catch (error) {
    throw error;
  }
}
export const createCompany = async (company) => {
   try {
    const res = await api.post(`/companies`, company);
    console.log("Company created successfully:", res);
    return res.data;
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
}
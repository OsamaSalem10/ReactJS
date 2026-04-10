import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

/* Fetch all users */
export const GetUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);    
    return response.data;
  } catch (error) { 
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const GetProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);    
    return response.data;
  } catch (error) { 
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const GetOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/orders`);  
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  } 
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
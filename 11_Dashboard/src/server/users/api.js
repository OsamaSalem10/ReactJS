import axios from 'axios';
export const getUsers = async () => {
 axios.get("http://localhost:5000/users")
  .then(res => console.log(res))
  .catch(err => {
    console.log(err.message);
    console.log(err.code);
    console.log(err.config);
  });
};
export const getUser = async (id) => {
  const response = await axios.get(`/users/${id}`);
  if (response.status !== 200) {
    throw new Error('Failed to fetch user');
  }
  console.log(response.data);
    return response.data;
};
export const createUser = async (user) => {
  const response = await axios.post('/users', user);
  if (response.status !== 201) {
    throw new Error('Failed to create user');
  }
    return response.data;
};
export const updateUser = async (id, user) => {
  const response = await axios.put(`/users/${id}`, user);
  if (response.status !== 200) {
    throw new Error('Failed to update user');
  }
    return response.data;
};
export const deleteUser = async (id) => {
  const response = await axios.delete(`/users/${id}`);
  if (response.status !== 200) {
    throw new Error('Failed to delete user');
  }
    return response.data;
};

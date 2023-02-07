import axios from "axios";

const apiClient = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getProfile = async (id) => {
  try {
    const { data } = await apiClient.get(`users/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const saveUser = async (payload) => {
  try {
    const { data } = await apiClient.post("users", payload);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (payload) => {
  try {
    const { data } = await apiClient.patch(`users`, payload);
    return data;
  } catch (error) {
    throw error;
  }
};

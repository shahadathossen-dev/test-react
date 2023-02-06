import axios from "axios";

const apiClient = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getCategories = async (id) => {
  try {
    const { data } = await apiClient.get('categories');
    return data;
  } catch (error) {
    throw error;
  }
};

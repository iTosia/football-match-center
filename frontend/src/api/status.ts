import axios from 'axios';

const API_BASE_URL = "http://localhost:9000/api";

export const getBackendStatus = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/status`);
    return response.data;
  } catch (error) {
    console.error('Error fetching backend status:', error);
    throw error;
  }
};

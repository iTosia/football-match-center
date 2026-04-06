import axios from 'axios';

export const getBackendStatus = async () => {
  try {
    const response = await axios.get(`/api/status`);
    return response.data;
  } catch (error) {
    console.error('Error fetching backend status:', error);
    throw error;
  }
};

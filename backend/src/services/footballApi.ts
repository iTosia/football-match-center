import axios from "axios";

const api = axios.create({
  baseURL: process.env.FOOTBALL_API_URL,
  headers: {
    "x-apisports-key": process.env.FOOTBALL_API_KEY as string,
  },
});

export const getTeamById = async (teamId: number) => {
  const response = await api.get("/teams", {
    params: {
      id: teamId,
    },
  });

  return response.data;
};

export const getApiStatus = async () => {
  try {
    const response = await api.get("/status");
    return response.data;
  } catch (error) {
    console.error("Error fetching API status:", error);
    throw error;
  }
};
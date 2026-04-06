import { Match } from "../types/Match";

const API_BASE_PATH = "/api";
const API_URL = `${API_BASE_PATH}/matches`;

export const getUpcomingMatches = async (): Promise<Match[]> => {
  const res = await fetch(`${API_URL}/upcoming`);
  return res.json();
};

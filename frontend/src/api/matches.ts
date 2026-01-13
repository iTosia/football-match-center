import { Match } from "../types/Match";

const API_URL = "http://localhost:9000/api/matches";

export const getUpcomingMatches = async (): Promise<Match[]> => {
  const res = await fetch(`${API_URL}/upcoming`);
  return res.json();
};

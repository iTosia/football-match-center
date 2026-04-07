export const getTeam = async (id: number) => {
  const res = await fetch(`/api/external/team?id=${id}`);
  
  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }
  
  return res.json();
};
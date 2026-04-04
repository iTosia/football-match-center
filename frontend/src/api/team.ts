export const getTeam = async (id: number) => {
  const res = await fetch(`http://localhost:9000/api/external/team?id=${id}`);
  return res.json();
};
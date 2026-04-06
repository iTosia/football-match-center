export const getTeam = async (id: number) => {
  const res = await fetch(`/api/external/team?id=${id}`);
  return res.json();
};
import { useEffect, useState } from "react";
import { getTeam } from "../api/team";

export default function TeamCard() {
  const [team, setTeam] = useState<any>(null);

  useEffect(() => {
    getTeam(42).then(setTeam);
  }, []);

  if (!team) return <div>Loading...</div>;

  return (
    <div>
      <h2>Team name: {team.name}</h2>
      <img src={team.logo} alt={team.name} width={100} />
      <p>Short name: {team.code}</p>
      <p>Country: {team.country}</p>
      <p>Founded: {team.founded}</p>
      <p>Stadium: {team.stadium.name}</p>
      <p>Stadium city: {team.stadium.city}</p>
      <p>Stadium capacity: {team.stadium.capacity}</p>
      <p>Stadium surface: {team.stadium.surface}</p>
    </div>
  );
}
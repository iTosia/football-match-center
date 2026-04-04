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
      <h2>{team.name}</h2>
      <img src={team.logo} alt={team.name} width={100} />
      <p>{team.country}</p>
      <p>{team.stadium.name} ({team.stadium.city})</p>
    </div>
  );
}
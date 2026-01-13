import { useEffect, useState } from "react";
import { Match } from "../types/Match";
import { getUpcomingMatches } from "../api/matches";

export default function MatchList() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    getUpcomingMatches().then(setMatches);
  }, []);

  return (
    <div>
      <h2>Upcoming matches</h2>

      {matches.map(match => (
        <div key={match._id}>
          <strong>{match.homeTeam}</strong> vs <strong>{match.awayTeam}</strong>
          <div>{new Date(match.date).toLocaleDateString()}</div>
          <div>{match.competition} — {match.stadium}</div>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import { Calendar, MapPin, Shield } from "lucide-react";
import { Match } from "../types/Match";
import { getUpcomingMatches } from "../api/matches";

export default function MatchList() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUpcomingMatches()
      .then(setMatches)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-pitch-surface border border-pitch-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-pitch-border flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink-primary">Upcoming Matches</h3>
        {!loading && (
          <span className="text-xs text-ink-muted bg-pitch-elevated px-2 py-0.5 rounded font-medium">
            {matches.length} fixture{matches.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="divide-y divide-pitch-border animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="px-6 py-5 space-y-2">
              <div className="h-3 bg-pitch-elevated rounded w-1/3" />
              <div className="h-5 bg-pitch-elevated rounded w-2/3" />
              <div className="h-3 bg-pitch-elevated rounded w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && matches.length === 0 && (
        <div className="px-6 py-12 text-center">
          <Shield size={32} className="text-ink-muted mx-auto mb-3" />
          <p className="text-sm text-ink-secondary">No upcoming matches found.</p>
        </div>
      )}

      {/* Match rows */}
      {!loading && matches.length > 0 && (
        <ul className="divide-y divide-pitch-border">
          {matches.map((match) => (
            <li key={match._id} className="px-6 py-5 hover:bg-pitch-elevated/50 transition-colors duration-150">
              {/* Date */}
              <div className="flex items-center gap-1.5 mb-2">
                <Calendar size={12} className="text-brand-blue" />
                <span className="text-xs text-brand-blue font-medium">
                  {new Date(match.date).toLocaleDateString(undefined, {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>

              {/* Matchup */}
              <p className="text-base font-semibold text-ink-primary mb-2">
                <span>{match.homeTeam}</span>
                <span className="mx-2 text-ink-muted font-normal text-sm">vs</span>
                <span>{match.awayTeam}</span>
              </p>

              {/* Meta tags */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 text-xs text-ink-secondary">
                  <Shield size={11} className="text-ink-muted" />
                  {match.competition}
                </span>
                <span className="w-1 h-1 rounded-full bg-pitch-border" />
                <span className="inline-flex items-center gap-1 text-xs text-ink-secondary">
                  <MapPin size={11} className="text-ink-muted" />
                  {match.stadium}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { Globe, CalendarDays, MapPin, Users, Layers } from "lucide-react";
import { getTeam } from "../api/team";

export default function TeamCard() {
  const [team, setTeam] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeam(42)
      .then(setTeam)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-pitch-surface border border-pitch-border rounded-2xl p-6 animate-pulse">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-pitch-elevated" />
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-pitch-elevated rounded w-3/4" />
            <div className="h-3 bg-pitch-elevated rounded w-1/2" />
          </div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-3 bg-pitch-elevated rounded w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (!team) return null;

  return (
    <div className="bg-pitch-surface border border-pitch-border rounded-2xl overflow-hidden">
      {/* Team header */}
      <div className="p-6 flex items-center gap-4">
        <img
          src={team.logo}
          alt={team.name}
          className="w-24 h-24 object-contain rounded-lg bg-pitch-elevated p-1.5"
        />
        <div>
          <h2 className="text-lg font-semibold text-ink-primary leading-tight">{team.name}</h2>
          {team.code && (
            <span className="inline-block mt-1 text-xs font-medium tracking-widest uppercase text-ink-muted bg-pitch-elevated px-2 py-0.5 rounded">
              {team.code}
            </span>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-pitch-border" />

      {/* Team meta */}
      <div className="p-6 space-y-3">
        <MetaRow icon={<Globe size={15} />} label="Country" value={team.country} />
        <MetaRow icon={<CalendarDays size={15} />} label="Founded" value={team.founded} />
      </div>

      {/* Divider */}
      <div className="border-t border-pitch-border" />

      {/* Stadium info */}
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">Stadium</p>
        <div className="space-y-3">
          <MetaRow icon={<MapPin size={15} />} label="Venue" value={team.stadium?.name} />
          <MetaRow icon={<Globe size={15} />} label="City" value={team.stadium?.city} />
          <MetaRow icon={<Users size={15} />} label="Capacity" value={team.stadium?.capacity?.toLocaleString()} />
          <MetaRow icon={<Layers size={15} />} label="Surface" value={team.stadium?.surface} />
        </div>
      </div>
    </div>
  );
}

function MetaRow({ icon, label, value }: { icon: React.ReactNode; label: string; value?: string | number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-ink-muted flex-shrink-0">{icon}</span>
      <span className="text-xs uppercase tracking-widest text-ink-muted w-20 flex-shrink-0">{label}</span>
      <span className="text-sm text-ink-primary font-medium truncate">{value ?? '—'}</span>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import TeamCard from "./components/TeamCard";
import MatchList from "./components/MatchList";
import ApiErrorPage from "./components/ApiErrorPage";
import { getBackendStatus } from "./api/status";

function App() {
  const [apiUp, setApiUp] = useState(true);
  const [loading, setLoading] = useState(true);

  const checkApiStatus = async () => {
    try {
      setLoading(true);
      await getBackendStatus();
      setApiUp(true);
    } catch (error) {
      setApiUp(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkApiStatus();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pitch-base">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
          <p className="text-ink-secondary text-sm tracking-wide">Loading application…</p>
        </div>
      </div>
    );
  }

  if (!apiUp) {
    return <ApiErrorPage onRetry={checkApiStatus} />;
  }

  return (
    <div className="min-h-screen bg-pitch-base text-ink-primary">
      {/* Sticky glass header */}
      <header className="sticky top-0 z-10 border-b border-pitch-border bg-pitch-surface/70 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center gap-3">
          <Trophy size={22} className="text-brand-blue" />
          <span className="font-semibold text-base tracking-tight text-ink-primary">
            Football Match Center
          </span>
          <div className="ml-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs text-ink-secondary uppercase tracking-widest">Live</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 items-start">
          <TeamCard />
          <MatchList />
        </div>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';

interface ApiErrorPageProps {
  onRetry: () => void;
}

const ApiErrorPage: React.FC<ApiErrorPageProps> = ({ onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pitch-base px-4">
      <div className="w-full max-w-md bg-pitch-surface border border-pitch-border rounded-2xl p-10 text-center shadow-2xl">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pitch-elevated border border-pitch-border mb-6">
          <WifiOff size={30} className="text-brand-blue" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-ink-primary mb-2">
          Connection Failed
        </h2>

        {/* Description */}
        <p className="text-sm text-ink-secondary leading-relaxed mb-8">
          We couldn't reach the football API. The backend may be offline or unreachable.
          Please check your connection and try again.
        </p>

        {/* Retry button */}
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-5 rounded-lg text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-pitch-surface"
        >
          <RefreshCw size={15} />
          Try Again
        </button>

        {/* Footer note */}
        <p className="mt-6 text-xs text-ink-muted">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
};

export default ApiErrorPage;

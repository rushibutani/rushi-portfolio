"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-950 text-white">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold mb-4">Critical Error</h2>
            <p className="text-gray-400 mb-6">
              {error.message ||
                "A critical error occurred. Please refresh the page."}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={reset}
                className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="px-4 py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-500/10 transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

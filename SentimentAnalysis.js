import React, { useState, useEffect } from "react";

export function SentimentAnalysis() {
  const [token, setToken] = useState("");
  const [sentiment, setSentiment] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); 
  const [retryCount, setRetryCount] = useState(0); // Added retry counter

  const analyzeSentiment = async () => {
    if (!token.trim()) {
      setError("Please enter a token name to analyze.");
      return;
    }

    setError(null);
    setLoading(true);
    setSentiment(null);
    setRetryCount(0);

    const fetchSentiment = async (retries: number) => {
      try {
        const trimmedToken = token.trim();
        const response = await fetch(`https://api.example.com/sentiment?token=${encodeURIComponent(trimmedToken)}`);
        if (!response.ok) {
          throw new Error("Failed to fetch sentiment analysis");
        }
        const data = await response.json();
        setSentiment(data?.sentiment ?? "Unable to determine sentiment");
      } catch (error) {
        if (retries < 3) {
          setRetryCount(retries + 1); // Increment retry count
          setTimeout(() => fetchSentiment(retries + 1), 1000); // Retry after 1 second
        } else {
          setSentiment("Error fetching sentiment");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSentiment(retryCount);
  };

  const resetAnalysis = () => {
    setToken("");
    setSentiment(null);
    setError(null);
    setRetryCount(0); // Reset retry count
  };

  const sentimentColors: Record<string, string> = {
    Positive: "text-green-500",
    Negative: "text-red-500",
    Neutral: "text-yellow-500",
    Error: "text-gray-500",
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Real-Time Token Sentiment Analysis</h2>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex justify-center gap-2">
        <input
          type="text"
          placeholder="Enter token name"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) analyzeSentiment();
          }}
          className="p-2 border rounded-md text-black w-64"
        />
        <button
          onClick={analyzeSentiment}
          className={`p-2 rounded-md text-white transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}
          disabled={loading}
        >
          {loading ? (
            <div className="h-5 w-5 mx-auto text-white">
              <div className="animate-spin h-full w-full border-t-2 border-blue-500 rounded-full"></div>
            </div>
          ) : "Analyze"}
        </button>
        <button
          onClick={resetAnalysis}
          className="p-2 rounded-md bg-gray-500 hover:bg-gray-700 text-white"
          disabled={loading}
        >
          Reset
        </button>
      </div>

      {loading && <p className="text-sm text-gray-400 mt-2">Analyzing sentiment...</p>}

      {sentiment && (
        <div className={`mt-4 text-xl font-bold ${sentimentColors[sentiment] || "text-gray-500"}`}>
          Sentiment: {sentiment}
        </div>
      )}
    </div>
  );
}

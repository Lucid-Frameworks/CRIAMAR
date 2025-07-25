import React, { useState, useEffect } from "react";

// Custom hook for sentiment analysis
function useSentiment(token: string) {
  const [sentiment, setSentiment] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token.trim()) return;

    const analyzeSentiment = async () => {
      setError(null);
      setLoading(true);
      setSentiment(null);

      try {
        const response = await fetch(`https://api.example.com/sentiment?token=${encodeURIComponent(token.trim())}`);
        if (!response.ok) {
          throw new Error("Failed to fetch sentiment analysis");
        }
        const data = await response.json();
        setSentiment(data?.sentiment ?? "Unable to determine sentiment");
      } catch (error) {
        setError("Error fetching sentiment");
      } finally {
        setLoading(false);
      }
    };

    analyzeSentiment();
  }, [token]);

  return { sentiment, loading, error };
}

export function SentimentAnalysis() {
  const [token, setToken] = useState("");
  const { sentiment, loading, error } = useSentiment(token); // Using the custom hook

  const resetAnalysis = () => {
    setToken("");
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
          className="p-2 border rounded-md text-black w-64"
        />
        <button
          onClick={() => {}}
          className={`p-2 rounded-md text-white transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        <button
          onClick={resetAnalysis}
          className="p-2 rounded-md bg-gray-500 hover:bg-gray-700 text-white"
        >
          Reset
        </button>
      </div>

      {sentiment && (
        <div className={`mt-4 text-xl font-bold ${sentimentColors[sentiment] || "text-gray-500"}`}>
          Sentiment: {sentiment}
        </div>
      )}
    </div>
  );
}

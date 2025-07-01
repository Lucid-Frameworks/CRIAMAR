import React, { useState } from "react";

export function SentimentAnalysis() {
  const [token, setToken] = useState("");
  const [sentiment, setSentiment] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const analyzeSentiment = async () => {
    if (!token.trim()) {
      alert("Please enter a token name to analyze.");
      return;
    }

    setLoading(true);
    setSentiment(null);

    try {
      const trimmedToken = token.trim();
      const response = await fetch(`https://api.example.com/sentiment?token=${encodeURIComponent(trimmedToken)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch sentiment analysis");
      }
      const data = await response.json();
      setSentiment(data.sentiment || "Neutral");
    } catch (error) {
      setSentiment("Error fetching sentiment");
    } finally {
      setLoading(false);
    }
  };

  const resetAnalysis = () => {
    setToken("");
    setSentiment(null);
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
            <svg className="animate-spin h-5 w-5 mx-auto text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          ) : "Analyze"}
        </button>
        <button
          onClick={resetAnalysis}
          className="p-2 rounded-md bg-gray-500 hover:bg-gray-700 text-white"
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

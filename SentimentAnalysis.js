import React, { useState } from "react";

export function SentimentAnalysis() {
  const [token, setToken] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSentiment = async () => {
    if (!token) {
      alert("Please enter a token name to analyze.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://api.example.com/sentiment?token=${encodeURIComponent(token)}`);
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

  const sentimentColor = sentiment === "Positive" 
    ? "text-green-500" 
    : sentiment === "Negative" 
    ? "text-red-500" 
    : "text-yellow-500";

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Real-Time Token Sentiment Analysis</h2>
      <input
        type="text"
        placeholder="Enter token name"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="p-2 border rounded-md text-black"
      />
      <button
        onClick={analyzeSentiment}
        className={`ml-2 p-2 rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'}`}
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
        className="ml-2 p-2 rounded-md bg-gray-500 hover:bg-gray-700 text-white"
      >
        Reset
      </button>
      {sentiment && (
        <div className={`mt-4 text-xl font-bold ${sentimentColor}`}>
          Sentiment: {sentiment}
        </div>
      )}
    </div>
  );
}

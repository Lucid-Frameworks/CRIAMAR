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
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {sentiment && (
        <div className="mt-4 text-xl font-bold">
          Sentiment: {sentiment}
        </div>
      )}
    </div>
  );
}

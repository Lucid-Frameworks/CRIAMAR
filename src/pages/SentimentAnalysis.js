import React, { useState } from "react";

export function SentimentAnalysis() {
  const [token, setToken] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeSentiment = async () => {
    if (!token.trim()) {
      setError("Please enter a valid token name.");
      return;
    }

    setLoading(true);
    setSentiment(null);
    setError(null);

    try {
      // Simulate an API request or sentiment analysis process
      const sentiments = ["Positive", "Neutral", "Negative"];
      const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
      setSentiment(randomSentiment);
    } catch (err) {
      setError("Error fetching sentiment.");
    } finally {
      setLoading(false);
    }
  };

  const sentimentColors = {
    Positive: "text-green-500",
    Neutral: "text-yellow-500",
    Negative: "text-red-500",
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">NLP-Based Token Sentiment Analysis</h2>
      <input
        type="text"
        placeholder="Enter token name"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="p-2 border rounded-md text-black w-full sm:w-64"
      />
      <button
        onClick={analyzeSentiment}
        className="ml-2 p-2 bg-blue-500 rounded-md hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {error && <div className="mt-4 text-red-500">{error}</div>}
      {sentiment && (
        <div className={`mt-4 text-xl font-bold ${sentimentColors[sentiment] || "text-gray-500"}`}>
          Sentiment: {sentiment} (NLP-derived)
        </div>
      )}
    </div>
  );
}
  
import React, { useState } from "react";

export function SentimentAnalysis() {
  const [token, setToken] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSentiment = () => {
    if (!token.trim()) {
      alert("Please enter a token name to analyze.");
      return;
    }

    setLoading(true);
    setSentiment(null);

    const sentiments = ["Positive", "Neutral", "Negative"];
    const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
    
    setTimeout(() => {
      setSentiment(randomSentiment);
      setLoading(false);
    }, 1000); // Simulating network delay
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">NLP-Based Token Sentiment Analysis</h2>
      <input
        type="text"
        placeholder="Enter token name"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="p-2 border rounded-md text-black"
      />
      <button
        onClick={analyzeSentiment}
        className="ml-2 p-2 bg-blue-500 rounded-md hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {sentiment && (
        <div className="mt-4 text-xl font-bold">Sentiment: {sentiment} (NLP-derived)</div>
      )}
    </div>
  );
}
  
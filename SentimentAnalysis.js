import React, { useState } from "react";

export function SentimentAnalysis() {
  const [token, setToken] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSentiment = () => {
    if (!token) {
      alert("Please enter a token name to analyze.");
      return;
    }

    setLoading(true);
    const sentiments = ["Positive", "Neutral", "Negative"];
    setTimeout(() => {
      const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
      setSentiment(randomSentiment);
      setLoading(false);
    }, 1500);
  };

  const sentimentColors = {
    Positive: "text-green-500",
    Neutral: "text-yellow-500",
    Negative: "text-red-500",
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
        <div className={`mt-4 text-xl font-bold ${sentimentColors[sentiment]} opacity-0 animate-fadeIn`}>
          Sentiment: {sentiment}
        </div>
      )}
    </div>
  );
}
